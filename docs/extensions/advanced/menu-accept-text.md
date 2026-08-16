---
title: Menu Accept Text
slug: /extensions/advanced/menu-accept-text
---

import {ExtensionCode} from '../utils.js';

Menus normally show a fixed dropdown of items. By setting `acceptText: true` on a menu, the dropdown becomes a *text dropdown*, which allows users to either pick one of the listed items or type an arbitrary value of their own.

:::note
`acceptText` and `acceptReporters` are mutually exclusive. `acceptReporters` turns the menu into a round input that accepts reporters, while `acceptText` keeps it a field but lets the user type their own value.
:::

<ExtensionCode title="menu-accept-text">{require('!raw-loader!@site/static/example-extensions/menu-accept-text.js')}</ExtensionCode>
