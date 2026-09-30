---
title: Custom Shapes
slug: /extensions/custom-shapes
---

import {ExtensionCode} from './utils.js';

Custom Shapes define the visual geometry of your blocks. By registering a new shape, you can create custom tab configurations, arrow shapes, or specific padding requirements for your custom types.

Use the `Scratch.BlockShapes` API to register a new shape definition:

```js
Scratch.BlockShapes.register("shapeName", {
  // ... shape definition
});
```

## Requirements

The registration object requires methods to calculate the visual path of the block:

| Method                                                    | Description                                                                                                                         |
| --------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `edgeWidth(totalHeight)`                                  | A function that returns the width of the shape based on the total height of the block (usually `Math.min(totalHeight / 2, 32)`).    |
| `leftEdge(steps, width, halfStraight)` / `rightEdge(...)` | These functions manipulate the steps array using SVG path commands.                                                                 |
| `padding()`                                               | Returns the required padding for the block content. You can return a single number or an object: `{ left: number, right: number }`. |

## Usage

Once registered, you can use your custom shape using the `blockShape` property on your block definitions:

```js
{
  opcode: "myBlock",
  blockType: Scratch.BlockType.REPORTER,
  text: "hello world",
  blockShape: "nbArrow" // The name of your custom shape
}
```

## Example

<ExtensionCode title="custom-shapes">{require('!raw-loader!@site/static/example-extensions/custom-shapes.js')}</ExtensionCode>
