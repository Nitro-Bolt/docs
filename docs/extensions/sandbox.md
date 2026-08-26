---
title: The Sandbox
slug: /extensions/sandbox
---

import {ExtensionCode} from './utils.js';

There are two types of extensions in NitroBolt:
- Sandboxed extensions
- Unsandboxed extensions

The difference between the two has a significant impact on how they're run and what they can do.

## Sandboxed Extensions

Sandboxed extensions are run in a sandboxed cross-origin `<iframe>` that can't directly access the main page with the editor and the VM; it's stuck in its own isolated world.

For this reason, sandboxed extensions:
- Cannot access NitroBolt internals
- Cannot access any part of the project that was not passed in as an argument, including variables
- Cannot directly interact with sprites at all

They can, however:
- Make requests to the broader internet
- Access some JavaScript Web APIs

Perhaps the biggest limitation of sandboxed extensions is that *every* time a block runs, the script will pause for at least 1 frame, regardless of how simple the script is. It doesn't matter whether "run without screen refresh" or turbo mode is enabled. It will always wait.

This is a very significant limitation and it makes custom extensions almost useless, which is why support was introduced for...

## Unsandboxed Extensions
As the name implies, unsandboxed extensions do not run in an `<iframe>`. They run in the same context as NitroBolt itself as `<script>` tags.

This means that unsandboxed extensions:
- CAN access NitroBolt internals
- CAN access parts of the project that were not passed in as an argument, such as variables
- CAN directly interact with every sprite

And perhaps most importantly, running a block from an unsandboxed extension is actually instantaneous -- no forced 1 frame delay.

## Developing an Unsandboxed Extension
The syntax for unsandboxed extensions is very familiar but has some differences. Technically, if you just copy and paste your old sandboxed extensions as unsandboxed extensions, it will appear to just work. However, this is dangerous and is likely to cause bugs later.

If your sandboxed extension has code like this:
```js
// Old sandboxed extensions (worker or <iframe> sandbox):
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());
```

...then the unsandboxed version would have code like this:
```js
(function(Scratch) {
  'use strict';
  class MyExtension {
    getInfo () {
      return { /* ... */ };
    }
  }
  Scratch.extensions.register(new MyExtension());
})(Scratch);
```

Using this template prevents unsandboxed extensions from interfering with each other when they try to define variables, classes, or functions with the same name. By requiring everything to be defined in an [immediately-invoked-function-expression (IIFE)](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) and enabling [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode), variables are prevented from accidentally leaking to the global scope.

*All* functions and variables defined by the extension must be defined within the IIFE. Additionally, each extension must make sure to use its own personal copy of the `Scratch` API, which this template does automatically.

An interesting thing to note about this template is that it is backward compatible with sandboxed extensions. As long as the extension doesn't use any of the features given to unsandboxed extensions, it will continue to work the same as a sandboxed extension.

Below is an example of a simple unsandboxed extension.

<ExtensionCode title="unsandboxed">{require('!raw-loader!@site/static/example-extensions/unsandboxed.js')}</ExtensionCode>

### Additional Requirements
Before we talk about the new APIs, we want to note that with more power comes more responsibility. Here are some additional requirements for unsandboxed extensions:
- Input and boolean blocks must return a valid value. While sandboxed extensions are free to neglect this, unsandboxed extensions that don't return proper values (string, number, or boolean) can break scripts in unknown ways.
- Blocks must not get stuck in infinite loops. While sandboxed extensions will usually not be able to freeze the entire window if they get stuck in a loop, unsandboxed extensions will. This can result in data loss.

### Accessing NitroBolt Internals
The big thing that unsandboxed extensions can do is directly access NitroBolt internals.
```js
const vm = Scratch.vm;
```

That's full access to the [VM object](https://types.nitrobolt.org/classes/scratch-vm.VM.html). There is a lot you can do with this.

Remember -- every variable declaration must happen inside the IIFE.
```js
// GOOD CODE
(function(Scratch) {
  const vm = Scratch.vm;
  // ...
}(Scratch));

// BAD CODE
const vm = Scratch.vm;
(function(Scratch) {
  // ...
}(Scratch));
```

Here is an example of an extension that uses the VM to toggle turbo mode, similar to the "runtime options" extension:

<ExtensionCode title="turbo-mode">{require('!raw-loader!@site/static/example-extensions/turbo-mode.js')}</ExtensionCode>
