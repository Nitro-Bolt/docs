---
title: Custom Types
slug: /extensions/custom-types
---

import {ExtensionCode} from './utils.js';

Custom Types allow you to define complex data objects that behave like classes in Scratch. By creating a custom type, you can define how your data is cast, how it appears in the UI, and how it is serialized when a project is saved.

To register a new type in your extension, use the `Scratch.types` API:

```js
class YourClass { /* methods */ }

Scratch.types.register("typeName", YourClass);
```

## Requirements

Your class must implement specific static methods and properties to integrate with the runtime:

| Method                            | Required | Description                                                                                                                |
| --------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| `constructor(value)`              | ✓        | Initializes your object from a raw value.                                                                                  |
| `static cast(value)`              | ✓        | Handles type safety. If the input is already your type, return it; otherwise try converting the value to your custom type. |
| `toString()`                      | ✓        | Converts your custom type to a string representation.                                                                      |
| `valueOf()`                       | ✓        | Converts your custom type to a primitive number or string. Used in standard Scratch operations.                            |
| `toJSON(value)`                   | ✓        | Used for serialization. Converts a custom type to a JSON representation.                                                   |
| `static fromJSON(value)`          | ✓        | Used for serialization. Converts a JSON representation to a custom type.                                                   |
| `static get shape()`              |          | The name of the block shape. (e.g., "nbArrow" or Scratch.BlockShape.SQUARE)                                                |
| `static visualReport(instance)`   |          | Returns a HTML string that will be used when a user clicks on the block.                                                   |
| `static monitorContent(instance)` |          | Returns a HTML string that will be used in the monitor for the block.                                                      |

:::info
If `visualReport` is defined and `monitorContent` isn't, then `visualReport` will be used for the monitor content, and vice versa.
:::

## Usage

Once registered, you can use your custom type string as the type or `outputType` in your block definitions:

```js
{
  opcode: "myBlock",
  blockType: Scratch.BlockType.REPORTER,
  text: "hello [ARG]"
  outputType: "counter", // Your registered type name
  arguments: {
    ARG: { type: "counter" } // Your registered type name
  }
}
```

## Example

<ExtensionCode title="custom-types">{require('!raw-loader!@site/static/example-extensions/custom-types.js')}</ExtensionCode>