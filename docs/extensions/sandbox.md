---
title: The Sandbox
slug: /extensions/sandbox
---

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
