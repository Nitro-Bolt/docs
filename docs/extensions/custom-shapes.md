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

| Method                                 | Required | Description                                                                                                                                     |
| -------------------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `leftEdge(steps, width, halfStraight)`  | Yes      | Adds SVG path commands for the left edge to `steps`.                                                                                            |
| `rightEdge(steps, width, halfStraight)` | No       | Adds SVG path commands for the right edge. If omitted, Scratch Blocks mirrors `leftEdge`.                                                       |
| `edgeWidth(totalHeight)`               | No       | Returns the edge width for the block's total height. If omitted, Scratch Blocks uses half the block height.                                     |
| `padding(innerShape)`                  | No       | Returns the space between this shape and an inner shape. It can return one number or an object such as `{ left: 10, right: 20 }`.                |

## Create The Shape

Now that you know the methods needed, we need to create the actual block shape. For this step, you will need to use an online SVG path editor.

### The edges

Custom block shapes are created this way: we start from the top-left corner of the block, draw the left "edge", go to the bottom-right corner of the block, then draw the right "edge". You will be only creating the left and right edges.

In this tutorial, we will be using [SvgPathEditor](https://yqnn.github.io/svg-path-editor/), but you can use any other similar apps. Once you are in the editor, click the button with an **X** on it, and insert `m 0 0 l -3 -3 l 3 -3` into the Path input. The result should be something like this:

![SVG Path Editor](/images/custom-shapes-one.png)

You can clear this out and create your own shape by adding new lines using the blue **+** button, but make sure that it starts from the center.

### Register your shape

Now that you probably have a shape for the edge, let's use it. To add it to the registry, click the **Convert to relative** button and copy it, then remove the `m 0 0` part that is at the start of your SVG path. Like this: `m 0 0 l -3 -3 l 3 -3` becomes `l -3 -3 l 3 -3`.

After you've done that, define the `leftEdge(steps, width, halfStraight)` function and add a `steps.push(...)` function inside:

```js
Scratch.BlockShapes.register("shapeName", {
  leftEdge(steps, width, halfStraight) {
    steps.push(`l -3 -3 l 3 -3`);
  }
});
```

We will also need to add the `padding()` and `edgeWidth(totalHeight)` functions. Implement them like this:

```js
Scratch.BlockShapes.register("shapeName", {
  edgeWidth(totalHeight) {
    return Math.min(totalHeight / 2, 32);
  },
  leftEdge(steps, width, halfStraight) {
    steps.push(`l -3 -3 l 3 -3`);
  },
  padding() {
    return 10;
  }
});
```

### Correctly Scaling

If you try the previous example, you might get a result like this:

![Not correctly scaled custom shape](/images/custom-shapes-scale-broken.png)

This is because we hardcoded the shape's size, and blocks are dynamically sized.

To fix this, we have to use the `width` and `halfStraight` parameters.

You have your SVG path like `l -3 -3 l 3 -3`, for every number that shows up, replace them with `width`, and make sure they're the same sign (positive or negative). You'll get a result like this:

```js
leftEdge(steps, width, halfStraight) {
  steps.push(`l ${-width} ${-width} l ${width} ${-width}`);
},
```

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
