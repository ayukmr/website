---
title: Solving the Yield Problem
date: 2025-01-15T22:00:00-08:00
taxonomies:
  tags:
    - chips
    - hacker-news
extra:
  link:
    url: https://cerebras.ai/blog/100x-defect-tolerance-how-cerebras-solved-the-yield-problem
    title: How we solved the yield problem
  via:
    url: https://news.ycombinator.com/item?id=42717165
    title: Hacker News
---

This was a fun read, especially after already having a bit of background knowledge on chip manufacturing. Cerebras and [Groq](https://groq.com) both utilize custom chips to power their ridiculously fast AI inference, but I hadn't previously considered the widely differing order of magnitudes these chips have compared to traditional GPUs. As an example, Cerebras cites their WSE-3 as having _900,000_ cores compared to individual H100s which have only _144_.

Cerebras' method for reducing the impact of defects feels quite straightforward—reducing core sizes and having a surplus of cores means that individual core defects are able to be had at an extremely small scale while having almost no impact on the overall chip. Additionally, Cerebras uses a special routing architecture to ensure that cores are able to route around disabled cores, meaning that disabling cores creates no interference. Through these methods, Cerebras notes the WSE-3 as having a high 93% core utilization, compared to H100s with a 92% utilization.
