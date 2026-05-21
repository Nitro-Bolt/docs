---
title: Assorted APIs
slug: /addons/assorted-apis
---

Now that you understand the basic outline of custom addons, here are some common APIs that will come in handy when developing addons.

:::warning
Because NitroBolt is under active development, many APIs may change and potentially break addons.
:::

## Traps
```js
addon.traps.vm; // The current VM instance
addon.traps.redux; // The current ReduxStore

await addon.traps.getBlockly(); // Returns the current Blockly instance
await addon.traps.getWorkspace(); // Returns the current Blockly workspace
await addon.traps.getPaper(); // Returns the current paper instance, if active.
```

## Settings
```js
// Returns the value of a specific setting in the addon
addon.settings.get('hello');

// Runs when the addon's settings are changed
addon.settings.addEventListener('change', () => {
    alert('settings changed');
});
```

## Other
```js
// Addons should take advantage of these
addon.disabled; // Whether the addon is currently disabled
addon.onEnabled = () => alert('enabled!'); // Runs when the addon is enabled
addon.onDisabled = () => alert('disabled!'); // Runs when the addon is disabled

addon.editorDirection; // Either 'ltr' or 'rtl'
addon.editorMode; // Either 'embed', 'fullscreen', 'projectpage, or 'editor'

// Returns a data: URI of a file in the addon if it exists
addon.getResource('img.png');

// Resolves when an element with a certain selector exists
// Or resolves instantly if it already exists
await addon.waitForElement('.myElement');

// Modals
// Note: you can also put HTML for the message
addon.createModal('Cool title');
await addon.confirm('Are you cool?');
await addon.prompt('Enter the password', 'optional default value');
```