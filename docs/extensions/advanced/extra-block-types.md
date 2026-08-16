---
title: Extra Block Types
slug: /extensions/advanced/extra-block-types
---

import {ExtensionCode} from '../utils.js';

There are some extra `Scratch.BlockType` values that let you place non-block items in your extension's palette: `LABEL`, `BUTTON`, and `XML`.

<ExtensionCode title="extra-block-types">{require('!raw-loader!@site/static/example-extensions/extra-block-types.js')}</ExtensionCode>

## Label

`Scratch.BlockType.LABEL` renders a plain text label in the palette. It doesn't have an `opcode` or a function. Instead, you only set `text`:

```js
{
  blockType: Scratch.BlockType.LABEL,
  text: "My custom label"
}
```

## Button

`Scratch.BlockType.BUTTON` renders a clickable button. It has no `opcode`. Instead, `func` names a method on your extension object that is called when the button is clicked:

```js
{
  blockType: Scratch.BlockType.BUTTON,
  func: "myButton",
  text: "Click me!"
}
```

:::note
When sandboxed, the button's function runs inside the sandboxed worker. Any interaction with the page (like `alert`) requires an unsandboxed extension.
:::

## XML

`Scratch.BlockType.XML` lets you inject arbitrary block XML directly into the palette. It is recommended you obtain the XML by using the Block Inspector. It doesn't have an `opcode` or a function. Instead, you only set `xml`:

```js
{
  blockType: Scratch.BlockType.XML,
  xml: '<block type="text" gap="16"><field name="TEXT">Custom XML block</field></block>'
}
```

:::note
With `XML`, you are responsible for writing valid XML. Incorrect XML may fail to render or log errors in the console.
:::
