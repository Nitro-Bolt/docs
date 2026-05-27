---
title: Virtual Machine
slug: /api/vm
---

# VM API Reference

The NitroBolt Virtual Machine is the core project execution engine.

## Accessing
The VM API is accessible via two methods. You can get it from `window`:
```js
const vm = window.vm;
```
...or from a React Redux store:
```js
import { useSelector } from "react-redux";
const vm = useSelector(s => s.scratchGui.vm);
```

## Properties and Methods

### `enableDebug()`
- Returns: `"enabled debug mode"`

Enables debug mode, which logs compiled scripts before execution.
```js
vm.enableDebug();
```

### `greenFlag()`
Starts all scripts with "when green flag clicked" hat blocks. Functionally equivalent to pressing the green flag button. No error will be thrown if this is run with an uninitialized runtime.
```js
vm.greenFlag();
```

### `loadProject(input)`
- `input`: `ArrayBufferView | ArrayBuffer | string | object`

Loads a project from a buffer or from a JSON string.
```js
const data = await file.arrayBuffer();
await vm.loadProject(data);

const projectJSON = { /* project data */ };
await vm.loadProject(JSON.stringify(projectJSON));
```

### `runtime`
- Type: [`Runtime`](./runtime.md)

### `start()`
Initializes the VM runtime. Must be called before project execution can occur.
```js
vm.start();
```

### `stop()`
Stops the VM runtime.
```js
vm.stop();
```

### `stopAll()`
Stops execution of all scripts and sounds. Functionally equivalent to pressing the stop button.

:::info
Timers will still run and text-to-speech will continue to play.
:::

```js
vm.stopAll();
```
