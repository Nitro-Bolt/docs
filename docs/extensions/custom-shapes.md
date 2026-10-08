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

Custom shapes are available only to unsandboxed extensions. Register each shape before the extension calls `Scratch.extensions.register`, so the shape is available when the VM processes `getInfo()`.

## Requirements

The registration object uses the following methods to calculate the visual path of the block. Only `leftEdge` is required:

| Method                                  | Required | Description                                                                                                                       |
| --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `leftEdge(steps, width, halfStraight)`  | Yes      | Adds SVG path commands for the left edge to `steps`.                                                                              |
| `rightEdge(steps, width, halfStraight)` | No       | Adds SVG path commands for the right edge. If omitted, a mirrored version of `leftEdge` is used.                                  |
| `edgeWidth(totalHeight)`                | No       | Returns the edge width for the block's total height. If omitted, the default is half the block height.                       |
| `padding(innerShape)`                   | No       | Returns the space between this shape and an inner shape. It can return one number or an object such as `{ left: 10, right: 20 }`. |

### The parameters

- `steps` is an array you add SVG path commands to with `steps.push(...)`.
- `width` is the edge width, which comes from `edgeWidth(totalHeight)`.
- `halfStraight` is half of the straight vertical section between the two corners of the edge. It is `0` when the edge width is exactly half the block height.

The block's total height is always `2 × width + 2 × halfStraight`. Your edge steps must add up to that height, or the shape won't line up with the block.

## How the path works

Each edge is written with **relative** SVG commands, so every step is measured from the end of the previous one:

- **Left edge:** starts at the bottom-left corner of the block and goes up to the top-left corner. Its vertical steps add up to `-(2 × width + 2 × halfStraight)`.
- **Right edge:** starts at the top-right corner and goes down to the bottom-right corner. Its vertical steps add up to `+(2 × width + 2 × halfStraight)`.

Use `l` for a line to a point, `h` for a horizontal line, and `v` for a vertical line. The example in this guide only uses `l` and `v`.

## Create The Shape

Now that you know the methods needed, we need to create the actual block shape. For this step, you will need to use an online SVG path editor.

### The edges

In this tutorial, we will be using [SvgPathEditor](https://yqnn.github.io/svg-path-editor/), but you can use any other similar app. Once you are in the editor, click the button with an **X** on it, and insert `m 0 0 l -3 -3 l 3 -3` into the Path input. The result should be something like this:

![SVG Path Editor](/images/custom-shapes-one.png)

This path draws a small left-pointing arrow.

Custom block shapes are created this way: we start from the top-left corner of the block, draw the left "edge", go to the bottom-right corner of the block, then draw the right "edge". You will be only creating the left and right edges.

You can clear this out and draw your own edge by adding new lines with the blue **+** button. Start the path at `(0, 0)` and make sure the total vertical distance is the block height. Keep the path inside the block's left side: negative x moves out of the block to the left, and positive x moves into it.

### Register your shape

To add the edge to the registry, click the **Convert to relative** button and copy it, then remove the `m 0 0` part at the start. For example, `m 0 0 l -3 -3 l 3 -3` becomes `l -3 -3 l 3 -3`.

Define the `leftEdge(steps, width, halfStraight)` function and add a `steps.push(...)` call inside:

```js
Scratch.BlockShapes.register("shapeName", {
  leftEdge(steps, width, halfStraight) {
    steps.push(`l -3 -3 l 3 -3`);
  }
});
```

Add the `padding()` and `edgeWidth(totalHeight)` functions as well:

```js
Scratch.BlockShapes.register("shapeName", {
  edgeWidth(totalHeight) {
    return Math.min(totalHeight / 2, 32);
  },
  leftEdge(steps, width, halfStraight) {
    steps.push(`l -3 -3 l 3 -3`);
  },
  padding() {
    return 15;
  }
});
```

### Correctly Scaling

If you try the previous example, you might get a result like this:

![Not correctly scaled custom shape](/images/custom-shapes-scale-broken.png)

This is because we hardcoded the shape's size, and blocks are dynamically sized.

To fix this, replace the numbers with `width` and `halfStraight`:

- Horizontal numbers become `width`, keeping their signs. `-3` becomes `${-width}` and `3` becomes `${width}`.
- The vertical distance has to cover the whole height, so the middle step uses `halfStraight` to stretch the straight part.

```js
leftEdge(steps, width, halfStraight) {
  steps.push(`l ${-width} ${-width}`);
  steps.push(`v ${-2 * halfStraight}`);
  steps.push(`l ${width} ${-width}`);
},
```

The vertical steps add up to `-width - 2 * halfStraight - width`, which is exactly `-(2 * width + 2 * halfStraight)`, the block height. The shape now fits any block size.

## Right edge

Use `rightEdge` when you want a different right side. The right edge is the same as the left edge, but all the horizontal movements are positive instead of negative.

For example, this right edge makes a notch that points *into* the block:

```js
rightEdge(steps, width, halfStraight) {
  steps.push(`h ${width}`);
  steps.push(`l ${-width} ${width}`);
  steps.push(`v ${2 * halfStraight}`);
  steps.push(`l ${width} ${width}`);
},
```

## Edge width and padding

`edgeWidth(totalHeight)` sets how far the edges stick out. By default it's half the block height. Use `Math.min` to cap it, as the example does, so tall blocks don't get huge points.

`padding(innerShape)` sets the space between the edge and the block's contents. Return one number for both sides, or an object for different left and right values:

```js
padding() {
  return { left: 15, right: 50 };
}
```

## Usage

Once registered, you can use your custom shape with the `blockShape` property on a block definition.

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
