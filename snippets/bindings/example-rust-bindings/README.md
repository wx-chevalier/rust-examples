# example-rust-bindings

The minimal code I could write to get code written in Rust to execute in:

* Web (by compiling to WASM)
* Android (by compiling to native)
* TODO iOS (by compiling to native)

For more explanation see
[Building cross-platform Rust for Web, Android and iOS – a minimal example](https://www.artificialworlds.net/blog/2022/07/06/building-cross-platform-rust-for-web-android-and-ios-a-minimal-example/).

## Prerequisites

You will need to set up quite a few things - please read the Prerequisites
section in each of the READMEs:

* [bindings/wasm/README.md](bindings/wasm/README.md)
* [bindings/ffi/README.md](bindings/ffi/README.md)

The short answer is that you will need: Rust, NodeJS, npm, wasm-pack, Android
NDK and the Cargo config to use it, Rust targets for all Android platforms,
uniffi-bindgen. For iOS you will need to be running under OS X, with xcodebuild
and lipo as well as the Rust targets for the iOS platforms.

## Building the bindings

To build all the bindings, try:

```bash
make
```

Or if you're not on OS X:

```bash
make web android
```

Alternatively, to build for a single platform, or to learn more, see the
individual README files:

* Web: [bindings/wasm/README.md](bindings/wasm/README.md)

* Android & iOS: [bindings/ffi/README.md](bindings/ffi/README.md)

## How it works

`crates/example-rust-bindings` contains our normal Rust code.

`bindings/ffi` contains code and config to build shared object files for various
types of Android, and for iOS. It uses `uniffi-bindgen` to generate the required
extra code.  `bindings/ffs/src/build.rs` runs the uniffi command to generate the
"scaffolding", and `bindings/ffi/src/my_rust_code.udl` contains the definition
of the code we want to share between platforms.

`bindings/wasm` contains code and config to build .js and .wasm files meaning we
can use our Rust code in JavaScript for the Web. It does not use uniffi -
instead it is based on `wasm_bindgen` and requires nodejs to build.

`examples/example-android` contains an Android project that uses our Rust code.
`examples/example-android/app/build.gradle` contains a
`android.applicationVariants.all` section that uses
`bindings/ffi/src/my_rust_code.udl` to generate Kotlin code. Our normal Kotlin
code can use the Rust by calling functions inside the `uniffi.my_rust_code`
namespace.

`examples/example-web` contains an example of how to use our Rust code in a web
page. `examples/example-web/index.html` loads the WASM in a module and calls
functions inside it.

`examples/example-ios` contains an example of how to use our Rust code in iOS.
Most of its contents are actually generated when we run the build for
`bindings/ffi`.

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)
