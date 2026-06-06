---
title: Extendables
slug: /extensions/extendables
---

import {ExtensionCode} from './utils.js';

Extendables are special arguments which can have a dynamic amount of inputs. For example, the `join () ()` block is extendable, which means you can join 2 or more stuff at a time, depending on what you need.

To use extendables in your extension, you can use the new `Scratch.ArgumentType.EXTENDABLE` argument type:

<ExtensionCode title="simple-extendable">{require('!raw-loader!@site/static/example-extensions/simple-extendable.js')}</ExtensionCode>

![simple extendable](./assets/simple-extendable.svg)

As you can see, there are some new things extendables implement:

- The `INPUTS` argument has its own text and arguments. The arguments inside the extendable argument represent what inputs appear as you extend or contract the block.
- We use the `util.extendableToArray(args, ...)` function to get the values of the inputs in the extendable.

## Nested Extendables

Since extendables allow normal arguments, they also allow extendables to be inside of them.

![nested extendable](./assets/nested-extendable.png)

This is a nested extendable. Let's take a look at an example:

<ExtensionCode title="nested-extendable">{require('!raw-loader!@site/static/example-extensions/nested-extendable.js')}</ExtensionCode>

### Extendable to Array

The `util.extendableToArray(args, ...)` function automatically goes through different layers in nested blocks and gets their values. You can specify any amount of layers. For example:

- `util.extendableToArray(args, "INPUTS", "ABC")` -> Looks through the `INPUTS` argument (assuming it is an extendable) and gets the values of the `ABC` arguments.
- `util.extendableToArray(args, "LAYER1", "LAYER2", "NUM")` -> Same as the previous example, except it looks through `LAYER1`, then `LAYER2`, and finally gets the values of the `NUM` arguments.

:::note
`util.extendableToArray(args, ...)` can sometimes return an array with arrays on it (especially if it's two or more layers deep.)
:::

## Extendables Properties

These properties can be used inside of an argument with type extendable.

| Property        | Default     | Description                                                                         | Example |
| --------------- | -------- | ----------------------------------------------------------------------------------- | ------- |
| `defaultInputs` | `number` | Defines the default amount of inputs that should be on an extendable.               | `2`     |
| `minInputs`     | `number` | Defines the minimum amount of inputs that the extendable should be allowed to have. | `1`     |
| `maxInputs`     | `number` | Defines the maximum amount of inputs that the extendable should be allowed to have. | `10`    |
| `separator`     | `string` | What the label between expendable inputs should have.                               | `", "`  |
