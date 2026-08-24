---
title: Menu separators
slug: /extensions/advanced/menu-separators
---

import {ExtensionCode} from '../utils.js';

Dropdown menus can include separators to visually group related options. Add
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

<ExtensionCode title="menu-separators">{require('!raw-loader!@site/static/example-extensions/menu-separators.js')}</ExtensionCode>
