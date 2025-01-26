---
title: Tiny Wasm Compiler
date: 2025-01-25T21:30:00-08:00
taxonomies:
  tags:
    - simon-willison
extra:
  link:
    url: https://wasmgroundup.com/blog/wasm-compiler-in-a-tweet
    title: A WebAssembly compiler that fits in a tweet
  via:
    url: https://simonwillison.net/2025/Jan/25/a-webassembly-compiler-that-fits-in-a-tweet
    title: Simon Willison
---

This was a really cool walkthrough of an obfuscated program through incrementally deobfuscating it. I especially liked the heavy use of coercion in the obfuscated code, since that heavily leans on JavaScript's somewhat janky typecasting that always leads to _interesting_ results. I've previously written a [compiler](https://github.com/ayukmr/glaze) using LLVM, and the similar "low-level but not too low-level" aspect of the Wasm byte array makes it seem like a fun spec to create and compile a language into.
