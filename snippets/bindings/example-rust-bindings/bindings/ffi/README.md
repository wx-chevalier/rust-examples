# `example-rust-bindings-ffi`

Rust code that can be used to generate Kotlin and Swift bindings for
example-rust-bindings.

## Prerequisites

### Android

* [Install Rust](https://www.rust-lang.org/tools/install)
* [Install Android NDK](https://developer.android.com/ndk/downloads) - download
  android-ndk-r22b-linux-x86_64.zip and unzip it e.g.:

```bash
unzip android-ndk-r22b-linux-x86_64.zip
```

NOTE: at time of writing (2022-06-28) you needed to use android-ndk-r22b or
earlier, because later versions fail with an error like
`ld: error: unable to find library -lgcc`.  See
[rust-lang #85806](https://github.com/rust-lang/rust/pull/85806) for more.

* Configure Rust for cross compilation:

```bash
rustup target add aarch64-linux-android
rustup target add x86_64-linux-android
```

(Note: `aarch64` is for most physical Android devices, but `x86_64` is useful
for running an Android emulator on a PC. You can also add `i686` if you use
32-bit emulators.)

* Edit Cargo config `bindings/ffi/.cargo/config.toml` to contain
  something like:

```toml
[target.aarch64-linux-android]
ar = "NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/bin/ar"
linker = "NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/bin/aarch64-linux-android30-clang"

[target.x86_64-linux-android]
ar = "NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/bin/ar"
linker = "NDK_HOME/toolchains/llvm/prebuilt/linux-x86_64/bin/x86_64-linux-android30-clang"
```

Replacing NDK_HOME with something like `/home/andy/android-ndk-r22b/`.

(Again, add the equivalent for `i686` if you use a 32-bit emulator.)

(Note: this file is ignored in the top-level `.gitignore` file, so it won't be
checked in to Git.)

(More details in the
[Cargo reference](https://doc.rust-lang.org/cargo/reference/config.html)).

* Install uniffi-bindgen:

```bash
cargo install uniffi_bindgen
```

### iOS

* (The iOS sections only work on Mac OS)

* [Install Rust](https://www.rust-lang.org/tools/install)

* Install uniffi-bindgen:

```bash
cd bindings/ffi
cargo install uniffi_bindgen
```

* Configure Rust for cross compilation:

```bash
rustup target add aarch64-apple-ios
rustup target add aarch64-apple-ios-sim
rustup target add x86_64-apple-ios
```

* Install
  [xcodebuild](https://developer.apple.com/library/archive/technotes/tn2339/_index.html)


* Install `lipo` (for creating the fat static libs)

## Building

### Android

* Build shared object:

```bash
cd bindings/ffi
cargo build --target aarch64-linux-android
cargo build --target x86_64-linux-android
```

This will create:

```
../../target/aarch64-linux-android/debug/libexample_rust_bindings_ffi.so
../../target/x86_64-linux-android/debug/libexample_rust_bindings_ffi.so
```

(Plus some .a files we don't need.)

* Strip the libraries to make them smaller:

```bash
NDK_HOME/toolchains/aarch64-linux-android-4.9/prebuilt/linux-x86_64/bin/aarch64-linux-android-strip \
    ../../target/aarch64-linux-android/debug/libexample_rust_bindings_ffi.so
NDK_HOME/toolchains/x86_64-4.9/prebuilt/linux-x86_64/bin/x86_64-linux-android-strip \
    ../../target/x86_64-linux-android/debug/libexample_rust_bindings_ffi.so
```

Replacing NDK_HOME with something like `/home/andy/android-ndk-r22b/`.

* Copy the shared libraries into your Android project:

```bash
mkdir -p ../../examples/example-android/app/src/main/jniLibs/aarch64
cp ../../target/aarch64-linux-android/debug/libexample_rust_bindings_ffi.so \
    ../../examples/example-android/app/src/main/jniLibs/aarch64

mkdir -p ../../examples/example-android/app/src/main/jniLibs/x86_64
cp ../../target/x86_64-linux-android/debug/libexample_rust_bindings_ffi.so \
    ../../examples/example-android/app/src/main/jniLibs/x86_64

mkdir -p ../../examples/example-android/app/src/main/jniLibs/arm64-v8a
cp ../../target/aarch64-linux-android/debug/libexample_rust_bindings_ffi.so \
    ../../examples/example-android/app/src/main/jniLibs/arm64-v8a
```

(Note: the `arm64-v8a` part is to support Android emulators running on an M1
Mac.)

See
[Include prebuilt native libraries](https://developer.android.com/studio/projects/gradle-external-native-builds#jniLibs)
in the Android documentation for more details.

* Generate the Kotlin bindings. This happens automatically when you
  build the example project because of the `android.applicationVariants.all`
  section in [app/build.gradle](../../examples/example-android/app/build.gradle)

### iOS

* Build shared object:

```bash
cd bindings/ffi
cargo build --target aarch64-apple-ios
cargo build --target aarch64-apple-ios-sim
cargo build --target x86_64-apple-ios

EXAMPLE=../../examples/example-ios

mkdir -p ../../target/ios-combined
lipo -create \
  ../../target/x86_64-apple-ios/debug/libexample_rust_bindings_ffi.a \
  ../../target/aarch64-apple-ios-sim/debug/libexample_rust_bindings_ffi.a \
  -output ../../target/ios-combined/libexample_rust_bindings_ffi.a
```

This will create:

```
../../target/x86_64-apple-ios/debug/libexample_rust_bindings_ffi.a
../../target/aarch64-apple-ios-sim/debug/libexample_rust_bindings_ffi.a
../../target/ios-combined/libexample_rust_bindings_ffi.a
```

* Copy the shared object into the example project:

```bash
EXAMPLE=../../examples/example-ios
mkdir -p ${EXAMPLE}
cp ../../target/ios-combined/libexample_rust_bindings_ffi.a ${EXAMPLE}/
```

* Generate the bindings:

```bash
uniffi-bindgen \
    generate src/my_rust_code.udl \
    --language swift \
    --config uniffi.toml \
    --out-dir ${EXAMPLE}

mkdir -p ${EXAMPLE}/headers
mkdir -p ${EXAMPLE}/Sources
mv ${EXAMPLE}/*.h         ${EXAMPLE}/headers/
mv ${EXAMPLE}/*.modulemap ${EXAMPLE}/headers/
mv ${EXAMPLE}/*.swift     ${EXAMPLE}/Sources/
```

This creates lots of stuff inside the example project.

* Generate the .xcframework file:

```bash
xcodebuild -create-xcframework \
  -library ../../target/aarch64-apple-ios/debug/libexample_rust_bindings_ffi.a" \
  -headers ${EXAMPLE}/headers \
  -library ${EXAMPLE}/libexample_rust_bindings_ffi.a" \
  -headers ${EXAMPLE}/headers \
  -output ${EXAMPLE}/ExampleRustBindings.xcframework"
```

## Trying it out

### Android

Open the Android project `examples/example-android` in Android Studio.

When you build in Android Studio, the code in
[app/build.gradle](examples/example-android/app/build.gradle) should generate
Kotlin code that wraps the .so files that were copied into this project in the
Build section. You can use the Rust code under the namespace
`uniffi.my_rust_code`. See
[MainActivity.kt](app/src/main/java/net/artificialworlds/exampleandroid/MainActivity.kt)
for an example.

### iOS

Open the project `examples/example-ios` in XCode.

TODO: example of how to write code that uses the generated bindings.
TODO: do we need to use Rust nightly compiler?
TODO: does `make ios` succeed on a properly set-up Mac?
TODO: what else is needed to get a proper XCode project that works?
