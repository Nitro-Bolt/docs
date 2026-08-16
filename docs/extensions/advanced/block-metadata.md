---
title: Block Metadata
slug: /extensions/advanced/block-metadata
---

import {ExtensionCode} from '../utils.js';

In addition to the standard properties (`opcode`, `blockType`, `text`, `arguments`, etc.), NitroBolt lets you override how an individual block looks and behaves. These are set on the block object returned from `getInfo()`.

<ExtensionCode title="block-metadata">{require('!raw-loader!@site/static/example-extensions/block-metadata.js')}</ExtensionCode>

## Colors

Each block defaults to its extension's colors, but you can override them per-block with `color1`, `color2`, and `color3`:

```js
{
  opcode: "purple",
  blockType: Scratch.BlockType.REPORTER,
  text: "purple reporter",
  color1: "#8b5cf6",
  color2: "#3a82ed",
  color3: "#28d9a4"
}
```

## Tooltip

Set `tooltip` to show custom help text when hovering over the block:

```js
{
  opcode: "purple",
  blockType: Scratch.BlockType.REPORTER,
  text: "purple reporter",
  tooltip: "This block is purple!"
}
```

## allowDropAnywhere

By default, a reporter can only be dropped into an input slot that expects a number or string. Set `allowDropAnywhere: true` to allow the block to be dropped anywhere:

```js
{
  opcode: "purple",
  blockType: Scratch.BlockType.REPORTER,
  text: "purple reporter",
  allowDropAnywhere: true
}
```

## blockShape

Override the shape of a block with `blockShape`. This will only affect the shape, not the output type:

| Value | Shape      |
| ----- | ---------- |
| `1`   | Hexagonal  |
| `2`   | Round      |
| `3`   | Square     |
| `4`   | Object     |

For example, a hexagonal reporter:

```js
{
  opcode: "hexagonal",
  blockType: Scratch.BlockType.REPORTER,
  text: "hexagonal reporter",
  blockShape: 1
}
```

:::note
`blockShape` applies to the output shape of the block. It overrides whatever shape the block type would normally produce (e.g. a `REPORTER` would normally be round).
:::

## branchIconURI

For loop and branch blocks, set `branchIconURI` to replace the loop icon in the bottom-right corner with your own image URI:

```js
{
  opcode: "loop",
  blockType: Scratch.BlockType.LOOP,
  text: "custom loop",
  branchCount: 1,
  branchIconURI: "data:image/svg+xml;base64,..."
}
```

If omitted, `LOOP` blocks use the built-in repeat icon.
