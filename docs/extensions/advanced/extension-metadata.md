---
title: Extension Metadata
slug: /extensions/advanced/extension-metadata
---

import {ExtensionCode} from '../utils.js';

In addition to the standard `id`, `name`, `blocks`, and `menus`, NitroBolt extensions can use a few extra properties in `getInfo()`.

<ExtensionCode title="extension-metadata">{require('!raw-loader!@site/static/example-extensions/extension-metadata.js')}</ExtensionCode>

## requiredExtensions

`requiredExtensions` is an array of extension IDs that must be loaded before or alongside your extension. When the VM registers your extension, it will attempt to load each listed extension first:

```js
{
  id: "myextension",
  name: "My Extension",
  requiredExtensions: ["text2speech", "music"]
}
```

If an extension can't be loaded (e.g. the security manager rejects it), a warning is logged but registration continues.

:::note
`requiredExtensions` are loaded by ID, so the extension must be loadable by the extension manager (core, built-in, or allowed by the security manager).
:::

## showStatusButton

Set `showStatusButton: true` to display a status button next to your extension's category in the block palette:

```js
{
  id: "myextension",
  name: "My Extension",
  showStatusButton: true
}
```

The status button is often used to indicate connection state (e.g. for extensions that talk to hardware or a server).
