---
title: Menu Accept Text
slug: /extensions/advanced/menu-accept-text
---

import {ExtensionCode} from '../utils.js';

Menus normally show a fixed dropdown of items. By setting `acceptText: true` on a menu, the dropdown becomes a *text dropdown*, which allows users to either pick one of the listed items or type an arbitrary value of their own.

:::note
`acceptText` and `acceptReporters` are **not** mutually exclusive. `acceptReporters` allows the user to insert reporters, while `acceptText` lets the user type their own value. You can either set none, one of them, or both at the same time.
:::

<ExtensionCode title="menu-accept-text">{require('!raw-loader!@site/static/example-extensions/menu-accept-text.js')}</ExtensionCode>
