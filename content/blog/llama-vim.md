---
title: llama.vim
date: 2025-01-23
taxonomies:
  tags:
    - ai
    - hacker-news
    - vim
extra:
  link:
    url: https://github.com/ggml-org/llama.vim
    title: ggml-org/llama.vim
  via:
    url: https://news.ycombinator.com/item?id=42806328
    title: Hacker News
---

A nice AI completion plugin from Georgi Gerganov, the creator of [llama.cpp](https://github.com/ggerganov/llama.cpp). The completion seems pretty good, but it's obviously either going to be slower or less accurate than something like Codeium. Of course, the main benefit of llama.vim is being able to generate completions locally, meaning that no private code is accidentally transferred to external servers. While there are already many Vim plugins available for local AI completion, llama.vim's main advantage is its ease of use through directly integrating with llama.cpp—no configuration is required, and a single command is used to start the completion server. I also like the use of VimL over Lua, since a lot of new plugins are being written solely for Neovim instead of also supporting Vim.
