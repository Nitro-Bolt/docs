---
title: Slider Inputs
slug: /extensions/advanced/slider-inputs
---

import {ExtensionCode} from '../utils.js';

Slider inputs are numeric inputs that let users choose a value by typing or by dragging a slider. Use `Scratch.ArgumentType.SLIDER` and configure the range on the argument itself.

<ExtensionCode title="slider-inputs">{require('!raw-loader!@site/static/example-extensions/slider-inputs.js')}</ExtensionCode>

```js
AMOUNT: {
  type: Scratch.ArgumentType.SLIDER,
  defaultValue: 50,
  min: 0,
  max: 100,
  precision: 1
}
```

| Property | Description | Default |
| --- | --- | --- |
| `defaultValue` | The slider's initial value. | `0` |
| `min` | The lowest selectable value. | `0` |
| `max` | The highest selectable value. | `100` |
| `precision` | The step between selectable values. Decimals are supported. | `1` |

Each slider argument has its own settings. For example, one block can use a range of `0` to `100`, while another uses `-1` to `1` with a precision of `0.01`.

Slider inputs remain normal rounded numeric inputs, so users can replace them with reporter blocks or type a value precisely.
