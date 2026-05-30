---
title: Switches
slug: /extensions/switches
---

import {ExtensionCode} from './utils.js';

Switches are a quality-of-life feature that lets users quickly swap between related blocks using the block context menu. For example, right-clicking `change x by ()` reveals options like `set x to ()`, `set y to ()`, and `change y by ()`.

It's highly recommended to add switches to your extension's blocks where it makes sense. Here's a full example to get you started:

<ExtensionCode title="switches">{require('!raw-loader!@site/static/example-extensions/switches.js')}</ExtensionCode>

Notice the `switches` property being used on the block definition.

## Switches Property

The `switches` property accepts an array of items, where each item describes a block the user can switch to. Each item can be either a **string** or an **object**:

- Use a **string** when you just want to point to another block with no input remapping.
- Use an **object** when you need more control, such as remapping or dropping inputs.

### String Form

Simply provide the opcode of the target block as a string:

```js
switches: ["otherblock", "alsoanotherblock"];
```

### Object Form

| Property        | Description                                                                                                                                                                                                 | Example        |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| `id` (required) | The opcode of the block to switch to.                                                                                                                                                                       | `'otherblock'` |
| `inputs`        | A list of input remappings. Each entry is a `[from, to]` pair, renaming an input from the current block to match the target block.                                                                          | `[['X', 'Y']]` |
| `splitInputs`   | A list of input names to drop when switching to this block. Useful when the target block has fewer inputs than the current one.                                                                             | `['SECS']`     |
| `rawId`         | By default, your extension's ID is prepended to `id` to resolve the target block. Set this to `true` to use the opcode as-is (necessary when switching to built-in blocks or blocks from other extensions.) | `true` / `false`         |

### Examples

**Remapping inputs**: use `inputs` when the target block has the same data but under a different input name:

```js
switches: [
  { id: "motion_changexby", inputs: [["X", "DX"]] },
  { id: "motion_sety", inputs: [["X", "Y"]] },
  { id: "motion_changeyby", inputs: [["X", "DY"]] }
]
```

**Dropping inputs**: use `splitInputs` when switching to a block that doesn't accept all of the current block's inputs:

```js
switches: [
  { id: "looks_say", splitInputs: ["SECS"] },
  { id: "looks_think", splitInputs: ["SECS"] }
]
```

In this example, `SECS` is an input on the current block (e.g. `say () for () seconds`) that doesn't exist on the target block (`say ()`), so it gets discarded on switch.
