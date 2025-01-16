# ChordPro Editor

Coded in Svelte

[Online](https://mnezerka.github.io/svelte-chordpro-editor/)

## Get started

Install the dependencies...

```bash
npm install
```

...then start [Vite](https://vite.dev) in development mode:

```bash
npm run dev
```

Navigate to URL listed in console output to see running app instance.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

## Development

### the public dir

If you have assets that are:

* Never referenced in source code (e.g. robots.txt)
* Must retain the exact same file name (without hashing)
* ...or you simply don't want to have to import an asset first just to get its
  URL

Then you can place the asset in a special public directory under your project
root. Assets in this directory will be served at root path / during dev, and
copied to the root of the dist directory as-is.

The directory defaults to /public in root dir of the repo, but can be
configured via the `publicDir` option.

Note: you should always reference public assets using root absolute path - for
example, public/icon.png should be referenced in source code as /icon.png.
