all: android ios web

android: android-aarch64 android-x86_64

android-aarch64:
	cd bindings/ffi && \
	cargo build --release --target aarch64-linux-android && \
	mkdir -p ../../examples/example-android/app/src/main/jniLibs/aarch64 && \
	cp ../../target/aarch64-linux-android/release/libexample_rust_bindings_ffi.so \
		../../examples/example-android/app/src/main/jniLibs/aarch64/libuniffi_my_rust_code.so && \
	mkdir -p ../../examples/example-android/app/src/main/jniLibs/arm64-v8a && \
	cp ../../target/aarch64-linux-android/release/libexample_rust_bindings_ffi.so \
		../../examples/example-android/app/src/main/jniLibs/arm64-v8a/libuniffi_my_rust_code.so

android-x86_64:
	cd bindings/ffi && \
	cargo build --release --target x86_64-linux-android && \
	mkdir -p ../../examples/example-android/app/src/main/jniLibs/x86_64 && \
	cp ../../target/x86_64-linux-android/release/libexample_rust_bindings_ffi.so \
		../../examples/example-android/app/src/main/jniLibs/x86_64/libuniffi_my_rust_code.so

EXAMPLE_IOS := ../../examples/example-ios

ios:
	cd bindings/ffi && \
	cargo build --release --target aarch64-apple-ios && \
	cargo build --release --target aarch64-apple-ios-sim && \
	cargo build --release --target x86_64-apple-ios && \
	mkdir -p ../../target/ios-combined && \
	lipo -create \
	  ../../target/x86_64-apple-ios/release/libexample_rust_bindings_ffi.a \
	  ../../target/aarch64-apple-ios-sim/release/libexample_rust_bindings_ffi.a \
	  -output ../../target/ios-combined/libexample_rust_bindings_ffi.a && \
	mkdir -p ${EXAMPLE_IOS} && \
	rm -f ${EXAMPLE_IOS}/libexample_rust_bindings_ffi.a && \
	cp ../../target/ios-combined/libexample_rust_bindings_ffi.a ${EXAMPLE_IOS}/ && \
	uniffi-bindgen \
		generate src/my_rust_code.udl \
		--language swift \
		--config uniffi.toml \
		--out-dir ${EXAMPLE_IOS} && \
	mkdir -p ${EXAMPLE_IOS}/headers && \
	mkdir -p ${EXAMPLE_IOS}/Sources && \
	mv ${EXAMPLE_IOS}/*.h         ${EXAMPLE_IOS}/headers/ && \
	mv ${EXAMPLE_IOS}/*.modulemap ${EXAMPLE_IOS}/headers/ && \
	mv ${EXAMPLE_IOS}/*.swift     ${EXAMPLE_IOS}/Sources/ && \
	xcodebuild -create-xcframework \
	  -library ../../target/aarch64-apple-ios/release/libexample_rust_bindings_ffi.a \
	  -headers ${EXAMPLE_IOS}/headers \
	  -library ${EXAMPLE_IOS}/libexample_rust_bindings_ffi.a \
	  -headers ${EXAMPLE_IOS}/headers \
	  -output ${EXAMPLE_IOS}/ExampleRustBindings.xcframework

web:
	cd bindings/wasm && \
	npm install && \
	npm run build && \
	mkdir -p ../../examples/example-web/generated && \
	cp \
		pkg/example-rust-bindings_bg.wasm \
		pkg/example-rust-bindings_bg.wasm.d.ts \
		pkg/example-rust-bindings.d.ts \
		pkg/example-rust-bindings.js \
		../../examples/example-web/generated/

clean:
	cargo clean
	rm -rf bindings/wasm/node_modules
	rm -rf bindings/wasm/pkg
	rm -rf bindings/ffi/src/generated
	rm -rf examples/example-android/app/src/main/jniLibs
	rm -rf examples/example-android/app/build/generated
