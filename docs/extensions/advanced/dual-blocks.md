---
title: Dual Blocks
slug: /extensions/advanced/dual-blocks
---

import {ExtensionCode} from '../utils.js';

Dual blocks can be used as both command blocks and reporters. They behave like normal command blocks when placed in a script and change to their reporter shape when placed in an input.

Define a dual block with `blockType: Scratch.BlockType.COMMAND`, then set `dualType` to its reporter type:

```js
{
  opcode: "changeCounter",
  blockType: Scratch.BlockType.COMMAND,
  dualType: Scratch.BlockType.REPORTER,
  text: "change counter by [AMOUNT]"
}
```

The same function implements both forms. Its return value is used when the block is a reporter. When the block is in a script, it runs like any other command block.

## Reporter types

`dualType` supports these values:

| Value | Reporter shape and value |
| --- | --- |
| `Scratch.BlockType.REPORTER` | Round string or number reporter |
| `Scratch.BlockType.BOOLEAN` | Hexagonal Boolean reporter |
| `Scratch.BlockType.OBJECT` | Object reporter |
| `Scratch.BlockType.ARRAY` | Array reporter |

`dualType` is only valid when `blockType` is `Scratch.BlockType.COMMAND`.

## Example

This counter extension uses a dual block for an operation that is useful in both positions. As a command, `change counter by (1)` updates the counter and continues the script. As a reporter, it updates the counter and reports the new value, so it can be used directly in another block.

<ExtensionCode title="dual-blocks">{require('!raw-loader!@site/static/example-extensions/dual-blocks.js')}</ExtensionCode>
