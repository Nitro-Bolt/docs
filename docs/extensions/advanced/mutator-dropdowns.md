---
title: Mutator Dropdowns
slug: /extensions/advanced/mutator-dropdowns
---

import {ExtensionCode} from '../utils.js';

Mutator dropdowns change the structure of the block containing them. Each menu
option describes the block's output with `Scratch.BlockType` and its inputs
with the same `Scratch.ArgumentType` metadata used by ordinary extension
blocks.

<ExtensionCode title="mutator-dropdowns">{require('!raw-loader!@site/static/example-extensions/mutator-dropdowns.js')}</ExtensionCode>

## Defining a Mutator Dropdown

Add a `mutator` object to a static menu. Each key must match a menu item value:

```js
menus: {
  MODE_MENU: {
    items: [
      {text: "split", value: "SPLIT"},
      {text: "join", value: "JOIN"}
    ],
    mutator: {
      SPLIT: {
        output: Scratch.BlockType.ARRAY,
        arguments: {
          INPUT: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "a,b,c"
          }
        }
      },
      JOIN: {
        output: Scratch.BlockType.REPORTER,
        arguments: {
          INPUT: {
            type: Scratch.ArgumentType.ARRAY
          }
        }
      }
    }
  }
}
```

The argument using the menu is defined normally:

```js
MODE: {
  type: Scratch.ArgumentType.STRING,
  menu: "MODE_MENU",
  defaultValue: "SPLIT"
}
```

The selected value is the source of truth. NitroBolt reapplies its state when
the menu changes and when the workspace is loaded, undone, or redone.

## State Properties

| Property | Description |
| --- | --- |
| `output` | The reporter type, such as `Scratch.BlockType.REPORTER`, `ARRAY`, `OBJECT`, or `BOOLEAN`. |
| `arguments` | Input definitions keyed by argument name, using normal properties such as `type`, `defaultValue`, and `shadow`. |
| `previousStatement` | Adds or removes the connection above a command block. |
| `nextStatement` | Adds or removes the connection below a command block. |
| `inputsInline` | Controls whether inputs are displayed inline. |

Only arguments included in a state are transformed. When the user selects a
different state, those inputs are disconnected before their type and default
shadow change. Workspace loading reapplies the structure without performing
that disconnection step, preserving restored inputs.

Mutator menus must be static direct dropdowns. They do not support
`acceptText`, `acceptReporters`, or dynamic menu functions.

:::caution
Removing a previous or next statement connection while another block is still
attached is not supported. Only offer such an option while the connection is
empty, as Scratch's stop block does.
:::
