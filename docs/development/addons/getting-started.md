---
title: Getting started
slug: /addons/getting-started
---

To get started, first create an empty zip file somewhere on your computer. This will contain scripts that your addon will run, as well as various other resources. All files in here will be packaged into your addon.

Then, create a `manifest.json` file inside of your zip. This will contain metadata about your addon, such as its ID, userscripts, stylesheets, and more.

An example of one could look like:
```json
{
    "id": "myAddon",
    "name": "My Addon",
    "description": "Logs 'Hello World!' to the console.",
    "tags": ["hello"],
    "credits": [
        {
            "name": "Cubester",
            "link": "https://github.com/CubesterYT"
        }
    ],
    "userscripts": [
        {
            "url": "userscript.js"
        }
    ],
    "settings": [
        {
            "dynamic": false,
            "name": "Test setting",
            "id": "test_setting",
            "type": "boolean",
            "default": false
        }
    ]
}
```

Next, create a `userscript.js` file inside of the zip. This will contain the code for the addon, which will be run when the addon is loaded.

```js
// This will be run when the addon is loaded
console.log("Hello world!");
```