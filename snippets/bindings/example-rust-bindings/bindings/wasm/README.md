# `example-rust-bindings-wasm`

WASM/JavaScript bindings for example-rust-bindings.

## Prerequisites

* [Install Rust](https://www.rust-lang.org/tools/install)
* [Install NodeJS and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Install wasm-pack](https://rustwasm.github.io/wasm-pack/installer/)

## Building

* Run:

```sh
cd bindings/wasm
npm install
npm run build
```

This will generate:

```
pkg/example-rust-bindings_bg.wasm
pkg/example-rust-bindings_bg.wasm.d.ts
pkg/example-rust-bindings.d.ts
pkg/example-rust-bindings.js
... plus some other files
```

## Trying it out

Copy the files into the example application:

```bash
cd bindings/wasm
mkdir -p ../../examples/example-web/generated/
cp \
    pkg/example-rust-bindings_bg.wasm \
    pkg/example-rust-bindings_bg.wasm.d.ts \
    pkg/example-rust-bindings.d.ts \
    pkg/example-rust-bindings.js \
    ../../examples/example-web/generated/
```

Start up a web server:

```bash
cd ../../examples/example-web
python -m http.server 8000
```

and visit the web page:

```bash
firefox http://localhost:8000
```
