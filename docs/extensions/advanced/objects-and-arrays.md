---
title: Objects & Arrays
slug: /extensions/advanced/objects-and-arrays
---

import {ExtensionCode} from '../utils.js';

NitroBolt lets extensions work with pure JavaScript objects and arrays. There are two sides to this:

- **Argument types** (`Scratch.ArgumentType.OBJECT`, `Scratch.ArgumentType.ARRAY`) which make an input slot only accept object/array-shaped reporters.
- **Block types** (`Scratch.BlockType.OBJECT`, `Scratch.BlockType.ARRAY`) which let a block return a pure object or array, with a distinct block shape so users can tell them apart.

Here's a full example:

<ExtensionCode title="object-array">{require('!raw-loader!@site/static/example-extensions/object-array.js')}</ExtensionCode>
