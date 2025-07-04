---
draft: true
title: Separation by Concerns
---

Lately, I've noticed a shift in how I organize my code. My brain now follows two simple rules:

- Colocate code that changes often together.
- Large files are okay.

## From kind-based to concern-based

I used to split my code by type:

```
src
├── hooks
│   └── use-search.ts
├── lib
│   └── search.ts
├── tests
│   └── search.test.ts
└── types
    └── search.ts
```

This created a lot of noise and jumping between files. It also made it hard to know where to put ambiguous logic — like a utility used in both `hooks` and `lib`. Everything ended up scattered.

Now I organize by concern instead:

```
src
└── lib
    ├── search.ts
    └── search.test.ts
```

The search.ts file exports hooks, types, utilities… whatever fits — all related to search. If I need to add something for navigation, I just make a file (and a test, if needed) for it.

```diff
src
└── lib
+   ├── navigation.ts
+   ├── navigation.test.ts
    ├── search.ts
    └── search.test.ts
```

If I find shared code between `search.ts` an` `navigation.ts`, I extract it:

```diff
src
└── lib
    ├── search.ts
    ├── search.test.ts
+   ├── utils.ts
+   └── utils.test.ts
```

---

[Things that change together should be located as close as reasonable.](https://kentcdodds.com/blog/colocation#:~:text=Things%20that%20change%20together%20should%20be%20located%20as%20close%20as%20reasonable)

It's not a rule — more like a guideline. An intuition. If colocating makes things worse, I won't force it. But most of the time, it just feels better.
