---
title: Extension Storage
slug: /extensions/advanced/extension-storage
---

import {ExtensionCode} from '../utils.js';

`extensionStorage` is a per-project and per-extension JSON storage area. Extensions can use it to persist small amounts of configuration or state that survive project save or load.

<ExtensionCode title="extension-storage">{require('!raw-loader!@site/static/example-extensions/extension-storage.js')}</ExtensionCode>

## Access

The storage lives in two places:

| Location                          | Scope      | Description                                                      |
| --------------------------------- | ---------- | ---------------------------------------------------------------- |
| `runtime.extensionStorage`        | Global     | A shared object persisted in the project, keyed by extension ID. |
| `runtime.target.extensionStorage` | Per-target | A per-sprite/stage object, keyed by extension ID.                |

Both are plain JavaScript objects. Store your extension's data under your extension ID:

```js
const storage = Scratch.vm.runtime.extensionStorage;
storage["myextensionid"] = {
  data: "hello"
};
```

And read it back:

```js
const entry = Scratch.vm.runtime.extensionStorage["myextensionid"];
return entry ? entry.data : "";
```

## Persistence

`extensionStorage` is serialized into the project file and restored when the project loads.

- Global storage (`runtime.extensionStorage`) is saved in the project's top-level `extensionStorage` field.
- Per-target storage (`target.extensionStorage`) is saved in each target's `extensionStorage` field.

Only JSON-serializable values survive. Values are filtered to the extensions actually used by the project.

### Clearing

To remove your extension's data, delete the key:

```js
delete Scratch.vm.runtime.extensionStorage["myextensionid"];
```
