---
title: Branches
slug: /extensions/branches
---

import {ExtensionCode} from './utils.js';

Branches allow you to easily create C-shaped blocks like conditionals and loops. For example, a `forever {}` block or a `repeat (10) {}` block.

To use branches in your extension, you can use the `branchCount` property.

:::note
`branchCount` can only be used in blocks with their block type set to `LOOP`, `CONDITIONAL` or `REPORTER`.
`LOOP` is recommended for blocks meant to be loops, as an icon will be added to indicate that it's mean to be a loop.
:::

Here is an example:

<ExtensionCode title="branches">{require('!raw-loader!@site/static/example-extensions/branches.js')}</ExtensionCode>

