---
title: String Inputs
slug: /extensions/string-inputs
---

import {ExtensionCode} from './utils.js';

String arguments use `Scratch.ArgumentType.STRING`. They can accept reporter blocks, display multiple lines, or behave as a text-only field that cannot be replaced by a reporter.

## Properties

| Property | Description | Default |
| --- | --- | --- |
| `type` | Use `Scratch.ArgumentType.STRING` to create a string input. | Required |
| `defaultValue` | Text initially displayed in the input. Newlines can be written as `\n`. | `''` |
| `acceptReporters` | Set to `false` to make the argument a fixed text field that cannot accept reporter blocks. | `true` |
| `canMultiline` | Set to `true` to allow newlines. The input and its block grow vertically to display every line without a scrollbar. | `false` |
| `menu` | Replaces the plain text input with the named extension menu. | None |
| `shadow` | Replaces the normal text shadow with one of the extension's reporter blocks. | Normal text shadow |

`canMultiline` only applies to string arguments. It does not change number, Boolean, menu, or other argument types.

## Normal string input

A normal string input accepts reporter blocks:

```js
TEXT: {
  type: Scratch.ArgumentType.STRING,
  defaultValue: 'hello'
}
```

Users can type into the input or replace its text shadow with a reporter.

## Multiline string input

Set `canMultiline` to `true` to let the user enter multiple lines:

```js
TEXT: {
  type: Scratch.ArgumentType.STRING,
  defaultValue: 'first line\nsecond line',
  canMultiline: true
}
```

This remains a normal reporter-accepting string input. Its multiline text shadow can still be replaced by another reporter block.

## Multiline input without reporters

Combine `canMultiline: true` with `acceptReporters: false` for an editable text field that cannot be replaced by a reporter:

```js
TEXT: {
  type: Scratch.ArgumentType.STRING,
  defaultValue: 'first line\nsecond line',
  canMultiline: true,
  acceptReporters: false
}
```

This is useful for templates, source text, configuration, or other inputs where a literal string is required.

## Complete example

The following extension includes a normal string input, a multiline reporter-accepting input, and a multiline input that does not accept reporters:

<ExtensionCode title="string-inputs">{require('!raw-loader!@site/static/example-extensions/string-inputs.js')}</ExtensionCode>

Each block receives its argument as a normal JavaScript string. Newline characters are preserved, so methods such as `split('\n')` work as expected.

## Property interactions

- `acceptReporters: false` changes the argument into a direct field on the extension block.
- `canMultiline: true` changes the editor and rendering, but not the value passed to the extension function.
- A custom `shadow` overrides the default multiline text shadow on reporter-accepting inputs. The custom reporter controls its own editor and appearance.
- Arguments with `menu` use the menu's input behavior. `canMultiline` does not make a menu multiline.
- Projects save multiline values as ordinary strings containing newline characters.
