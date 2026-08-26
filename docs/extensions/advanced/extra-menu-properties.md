---
title: Extra Menu Properties
slug: /extensions/advanced/extra-menu-properties
---

import {ExtensionCode} from '../utils.js';

There are some extra properties that you can add to dropdowns that change how they behave or look.

<ExtensionCode title="extra-menu-properties">{require('!raw-loader!@site/static/example-extensions/extra-menu-properties.js')}</ExtensionCode>

## Separators

Dropdowns can include separators to visually group related options. Add
the string `'---'` wherever you want a horizontal line:

```js
menus: {
    food: {
        items: [
            'water',
            'juice',
            '---',
            'salad',
            'soup'
        ]
    }
}
```

Separators work in both static menus and arrays returned by dynamic menu
functions. They are visual only and cannot be selected or used as an argument
value. A menu must still contain at least one selectable item.

## acceptText

Menus normally show a fixed dropdown of items. By setting `acceptText: true` on a menu, the dropdown becomes a *text dropdown*, which allows users to either pick one of the listed items or type an arbitrary value of their own:

```js
menus: {
    colors: {
        items: [
            'red',
            'green',
            'blue'
        ],
        acceptText: true
    }
}
```

:::note
`acceptText` and `acceptReporters` are **not** mutually exclusive. `acceptReporters` allows the user to insert reporters, while `acceptText` lets the user type their own value. You can either set none, one of them, or both at the same time.
:::