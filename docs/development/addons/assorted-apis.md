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
addon.tab.traps.vm; // The current VM instance
addon.tab.traps.redux; // The current ReduxStore

await addon.tab.traps.getBlockly(); // Returns the current Blockly instance
await addon.tab.traps.getWorkspace(); // Returns the current Blockly workspace
await addon.tab.traps.getPaper(); // Returns the current paper instance, if active.
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
addon.self.disabled; // Whether the addon is currently disabled

// Runs when the addon is re-enabled
addon.self.addEventListener('reenabled', () => alert('enabled!'));

// Runs when the addon is disabled
addon.self.addEventListener('disabled', () => alert('disabled!'));

addon.tab.editorDirection; // Either 'ltr' or 'rtl'
addon.tab.editorMode; // Either 'embed', 'fullscreen', 'projectpage, or 'editor'

// Returns a data: URI of a file in the addon if it exists
addon.self.getResource('img.png');

// Resolves when an element with a certain selector exists
// Or resolves instantly if it already exists
await addon.tab.waitForElement('.myElement');

// Modals
// Note: you can also put HTML for the message
addon.tab.createModal('Cool title');
await addon.tab.confirm('Are you cool?');
await addon.tab.prompt('Enter the password', 'optional default value');
```