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

Custom types are available only to unsandboxed extensions. Register each type before the extension calls `Scratch.extensions.register`, so the type is available when the VM processes `getInfo()`.

## Requirements

Your class can implement the following methods and properties to control how the runtime handles its values:

| Method                            | Required | Description                                                                                                                                              |
| --------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `constructor(value)`              | Yes      | Initializes an object from a raw value. The runtime uses it when `cast` or `fromJSON` is not defined.                                                     |
| `static cast(value)`              | No       | Converts a block argument to your type. If omitted, the runtime uses `new YourClass(value)`. Return existing instances unchanged when implementing this. |
| `toString()`                      | No       | Provides a string representation for Scratch operations.                                                                                                 |
| `valueOf()`                       | No       | Provides a primitive number or string for standard Scratch operations and reporter bubbles.                                                              |
| `toJSON()`                        | No       | Converts an instance to JSON-compatible data. If omitted, the runtime serializes the instance's enumerable properties.                                   |
| `static fromJSON(value)`          | No       | Restores an instance from serialized data. If omitted, the runtime uses `new YourClass(value)`.                                                           |
| `static get shape()`              | No       | Provides a built-in shape such as `Scratch.BlockShape.SQUARE` or the name of a registered custom shape such as `"nbArrow"`.                              |
| `static visualReport(instance)`   | No       | Returns an HTML string shown when a user clicks the reporter block.                                                                                       |
| `static monitorContent(instance)` | No       | Returns an HTML string shown in the block's monitor.                                                                                                      |

:::info
If `visualReport` is defined and `monitorContent` isn't, then `visualReport` will be used for the monitor content, and vice versa.
:::

## Usage

Once registered, you can use your custom type string as the type or `outputType` in your block definitions:

```js
{
  opcode: "myBlock",
  blockType: Scratch.BlockType.REPORTER,
  text: "hello [ARG]",
  outputType: "counter", // Your registered type name
  arguments: {
    ARG: { type: "counter" } // Your registered type name
  }
}
```

## Example

<ExtensionCode title="custom-types">{require('!raw-loader!@site/static/example-extensions/custom-types.js')}</ExtensionCode>
