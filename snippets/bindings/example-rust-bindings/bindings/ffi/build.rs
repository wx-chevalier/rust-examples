fn main() {
    uniffi_build::generate_scaffolding("./src/my_rust_code.udl")
        .expect("Building the UDL file failed");
}
