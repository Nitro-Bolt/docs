---
title: Compiler
slug: /extensions/compiler
---

import {ExtensionCode} from '../utils.js';

Extensions can provide a `compiler` function for a block to generate JavaScript directly. This avoids the compatibility layer and removes overhead.

:::warning
Compiler functions generate trusted JavaScript and are only available to unsandboxed extensions.
:::

<ExtensionCode title="compiler">{require('!raw-loader!@site/static/example-extensions/compiler.js')}</ExtensionCode>

## Compiler function

Add `compiler` to a block's information. It receives `args` and `util`, then returns JavaScript source code:

```js
blockCompiler(args, util) {
  return `console.log(${args.VALUE});\n`;
}
```

Values in `args` are JavaScript source strings, not the values themselves. Inputs and fields use the same names defined by the block. Insert them into the generated source without adding quotes around them.

The normal opcode function is still required. NitroBolt uses it when the project is running without the compiler.

## Branches

Use `util.compileBranch(branchNumber, isLoop)` to compile a branch into a source string. Branch numbers start at 1.

```js
return `
  if (${args.CONDITION}) {
    ${util.compileBranch(1, false)}
  }
`;
```

Set `isLoop` to `true` only when the generated code repeatedly runs that branch. This lets blocks inside the branch generate the correct loop behavior.

## Utilities

The `util` object contains information and helpers from the JavaScript generator:
| Property | Description |
| --- | --- |
| `target` | The sprite or stage that owns the script being compiled. |
| `runtime` | The NitroBolt runtime compiling the script. |
| `localVariables` | A variable pool. Call `localVariables.next()` to get a unique variable name for generated code. |
| `isProcedure` | Whether the current script is a custom block procedure. |
| `isWarp` | Whether the current script runs without screen refresh. |
| `warpTimer` | Whether the warp timer is enabled. |
| `debug` | Whether compiler debugging is enabled. |
| `isInHat` | Whether the generator is currently compiling a hat block. |
| `compileBranch(branchNumber, isLoop)` | Compiles a branch and returns its JavaScript source. Branch numbers start at 1. Set `isLoop` to `true` when the generated code repeatedly runs the branch. |
| ⚠️ `_frames` | The generator's stack frames. Unsupported API. |
| ⚠️ `_currentFrame` | The generator's current stack frame. Unsupported API. |
| ⚠️ `_source` | The JavaScript source generated so far. Unsupported API. |
| ⚠️ `_ir` | The complete intermediate representation being compiled. Unsupported API. |
| ⚠️ `_script` | The current intermediate script. Unsupported API. |

Properties beginning with `_` are unsupported compiler internals. Accessing one prints a warning, and they may change or be removed without notice.
