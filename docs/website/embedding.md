---
title: Embedding
slug: /website/embedding
---

You can embed a NitroBolt project in your website using an `<iframe>`. For the best experience, use this template:

```html
<iframe src="https://nitrobolt.org/embed?project_url=<link to project>" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="" style="color-scheme: auto"></iframe>
```

You should change these attributes appropriately:
- Replace `<link to project>` with an exact URL to an `sb3` file. You can also embed projects directly from Scratch by replacing `?project_url=<link to project>` with a `#` followed by the Scratch project ID.
- `width="482" height="412"` defines the size of the embed. The player will automatically resize to whatever you specify here, so you can change the numbers. The border around the stage takes two pixels of width and height, and the controls take an extra 50 pixels of height. Thus, to get a 480x360 stage, you would use 482 and 412.
- Optionally, you may want to add `loading="lazy"` to the attributes. This lets the browser wait to load the `<iframe>` until the user scrolls closer to it. This can improve performance if the embed is pretty far down the page and doesn't need to be loaded right away.

The rest of the attributes should not be changed. Here's what they do if you were curious:
- `allowtransparency="true"` allows the embed to have a transparent background, so any color or images you have behind the embed can still be seen.
- `frameborder="0"` removes an ugly border around the iframe.
- `scrolling="no"` ensures that there won't be any unexpected scrollbars in the iframe.
- `allowfullscreen=""` allows the fullscreen button to work. If this attribute is removed or if the device does not support fullscreen, the button will not show up.
- `style="color-scheme: auto"` ensures that the embed's transparent background works if your page uses the dark color-scheme. This attribute doesn't let you control how the stuff inside the embed appears. It just fixes the transparency.

Here is a live example of an embed:

<iframe src="https://nitrobolt.org/embed#96708228" width="482" height="412" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen="" style={{
  colorScheme: "auto"
}}></iframe>

## URL Parameters
All [standard URL parameters](./url-parameters.md) are still available. You can use these to control usernames and other things. Additionally, there also some special parameters only available in embeds:

### `autoplay`
Embeds support the `autoplay` parameter, which will automatically start the project as soon as it loads. Note that sound blocks may not work until the user interacts with the project.

### `settings-button`
You can optionally enable a settings button in embeds that opens a menu similar to the "Advanced Settings" menu found in the editor.

### `fullscreen-background`
Outside of fullscreen mode, the embed is transparent so you can style the parent element if you want to change the background color. In fullscreen mode, the embed will either use a white or an almost black color depending on whether the user's computer is configured to dark mode or not. To override this behavior, set the fullscreen-background parameter to a CSS color value like `black` or `rgb(50,90,100)`.

### `addons`
By default, embeds have no addons enabled. This can be overridden with the `addons` parameter, which is a comma separated list of addon IDs to enable. For example: https://nitrobolt.org/embed?addons=editor-buttons-reverse-order,gamepad#96708228
