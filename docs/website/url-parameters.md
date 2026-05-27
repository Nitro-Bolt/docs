---
title: URL Parameters
slug: /website/url-parameters
---

:::note
Only "hidden" URL parameters are listed here. Project settings like `fps` and `hqpen` will not be found here.
:::

## `cloud_host`
Lets you change the cloud variable server that NitroBolt will connect to.

https://nitrobolt.org/12785898?cloud_host=wss://clouddata.turbowarp.org

Inclusion of `ws://` or `wss://` is optional but recommended. Insecure `ws://` servers may not work because TurboWarp uses HTTPS.

## `extension`
Loads a custom extension from a URL.

## `nocompile`
Turns the NitroBolt compiler off and uses the slower interpreter.

https://nitrobolt.org/?nocompile

## `project_url`
Tells NitroBolt to download project data from an arbitrary URL.

`https://` is implied if you don't include a protocol. `http://` URLs generally will not work for security reasons. Note that the URL needs to be a direct download and must support CORS (`Access-Control-Allow-Origin: *`). [GitHub Pages](https://pages.github.com) will do this automatically and is known to work well.

## `username`
Controls the value of the username block. Can be overridden by setting a username in Editor Settings.

https://nitrobolt.org/443603478?username=ExampleUsername
