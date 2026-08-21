---
title: Dependent Dropdowns
slug: /extensions/advanced/dependent-dropdowns
---

import {ExtensionCode} from '../utils.js';

Dependent dropdowns change their options based on the selected value of another dropdown on the same block. They are useful when the valid choices belong to a category, such as choosing a breed after choosing an animal.

<ExtensionCode title="dependent-dropdowns">{require('!raw-loader!@site/static/example-extensions/dependent-dropdowns.js')}</ExtensionCode>

## Defining a Dependent Dropdown

Define the parent as a regular menu. On the dependent menu, replace `items` with `parentName` and `optionMapping`:

```js
menus: {
  ANIMAL_MENU: {
    items: ["cat", "dog"]
  },
  BREED_MENU: {
    parentName: "ANIMAL",
    optionMapping: {
      cat: ["Siamese", "Tabby"],
      dog: ["Beagle", "Poodle"]
    },
    defaultOptions: ["unknown"]
  }
}
```

| Property | Description |
| --- | --- |
| `parentName` | The argument name of the dropdown this menu depends on. |
| `optionMapping` | An object mapping each parent value to the dependent dropdown's menu items. |
| `defaultOptions` | Optional menu items to use when the parent's value is not in `optionMapping`. |

Menu items use the same format as regular menus. Each item can be a string or an object with separate `text` and `value` properties:

```js
cat: [
  "Tabby",
  {text: "Siamese cat", value: "siamese"}
]
```

When the parent changes, NitroBolt keeps the dependent dropdown's current value if it is still valid. Otherwise, it selects the first option from the new list.

:::caution
The parent argument must appear before the dependent argument in the block's `text`. Dependent dropdowns do not support `acceptText` or `acceptReporters`.
:::

## Chaining Dependent Dropdowns

A dependent dropdown can be the parent of another dependent dropdown. The second block in the full extension above uses this chain:

```text
ANIMAL → BREED → COAT
```

`BREED_MENU` depends on `ANIMAL`, then `COAT_MENU` depends on `BREED`:

```js
COAT_MENU: {
  parentName: "BREED",
  optionMapping: {
    Siamese: ["short"],
    Tabby: ["short", "long"],
    Beagle: ["smooth", "rough"],
    Poodle: ["curly", "corded"]
  },
  defaultOptions: ["unknown"]
}
```

Changing `ANIMAL` updates `BREED`. If that changes the selected breed, `COAT` updates too. Each parent must appear before its child, so the block text and arguments in this example are ordered `ANIMAL`, `BREED`, then `COAT`.
