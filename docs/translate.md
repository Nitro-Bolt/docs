---
title: Help Translate NitroBolt
slug: /translate
---

# Help Translate NitroBolt

NitroBolt is translated by volunteers through Transifex. You can help make the editor and its extensions available to more people by translating them into a language you know well.

## Requirements

- You should be fluent in English so you can understand the source text.
- You should be a native speaker of the language you want to translate, or fluent enough to use that language every day.
- You need an email address and a Transifex account.

Do not submit machine translations as your own work. Automated translations often miss context, especially for block labels and technical terms.

## Join the translation team

1. Open the [NitroBolt open-source translator signup](https://app.transifex.com/signup/open-source/?join_org=nitrobolt&join_project=nitrobolt).
2. Continue with GitHub to create or sign in to your Transifex account using GitHub SSO.
3. Select the language you want to translate.
4. Submit your request and wait for it to be accepted.

If your language is not available, request it through Transifex. A team manager will review the request before adding it.

## Translate NitroBolt

After joining the team, open the NitroBolt project and select a resource:

- `interface` contains text from the editor interface.
- `blocks` contains block text added by NitroBolt.
- `extensions` contains text from built-in extensions added by NitroBolt.
- `paint-editor` contains text added to the paint editor.
- `extension-runtime` contains block text from NitroBolt's extension gallery.
- `extension-metadata` contains extension names and descriptions from the extension gallery.

Translate the meaning of each string naturally instead of translating each word literally. Preserve placeholders such as `{name}`, `%1`, `[TEXT]`, and `[VALUE]` exactly. Developer comments provide context when a string could have more than one meaning.

## Reviews and updates

Trusted contributors can be assigned as reviewers for a language. The main NitroBolt editor only imports reviewed translations, so new editor translations must be approved before they appear in NitroBolt. Extension gallery translations are imported once they have been translated.

Translation updates are synchronized automatically every Monday at 00:00 UTC. A translation may take until the next successful sync and deployment to appear in NitroBolt.

## Help

If you have a question, [open an issue in the NitroBolt documentation repository](https://github.com/Nitro-Bolt/docs/issues/new).
