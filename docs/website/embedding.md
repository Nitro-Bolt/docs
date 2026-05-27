---
title: Embedding
slug: /website/embedding
---

You can embed a NitroBolt project in your website using an `<iframe>`. For the best experience, use this template:

```html
<iframe src="https://nitrobolt.org/embed?project_url=<link to project>" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="" style="color-scheme: auto"></iframe>
```

Replace `<link to project>` with an exact URL to an `sb3` file.

Optionally, you may want to add `loading="lazy"` to the attributes. This lets the browser wait to load the `<iframe>` until the user scrolls closer to it. This can improve performance if the embed is pretty far down the page and doesn't need to be loaded right away.
