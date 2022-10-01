# Remix + React Native Web

Experiments integrating React Native Web (RNW) into a Remix app.

Discussion: [Usage with React Native (+ Web)](https://github.com/remix-run/remix/discussions/1578)

## Current branch: tyrauber-styles [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mikeylemmon/remix-rnw/blob/tyrauber-styles/app/routes/index.tsx)

This branch is very similar to the
[horus-styles](https://github.com/mikeylemmon/remix-rnw/tree/horus-styles)
branch, but uses
[Ty Rauber's code](https://github.com/tyrauber/remix-expo/tree/main/apps/remix/app)
for server-side RNW styles instead of Horus Lugo's
([diff](https://github.com/mikeylemmon/remix-rnw/compare/horus-styles...tyrauber-styles)).
The hydration errors are the same.

### Description from horus-styles branch

This branch follows the process outlined by Horus Lugo (@HorusGoul)
[here](https://horus.dev/blog/react-native-web-remix-setup#:~:text=2.%20React%20Native%20Web%20Styles)
to try to get SSR for react-native-web styles working properly.

Following that process results in the hydration error outlined by Horus in
[necolas/react-native-web#2326](https://github.com/necolas/react-native-web/issues/2326).

Note that the RNW maintainer's response in closing the issue suggests
that Horus was incorrectly using server APIs on the client — in fact,
the server API `renderToStaticMarkup`
[in Horus's client code](https://github.com/HorusGoul/rnw-css-hydration-bug-error-repro/blob/main/app/entry.client.tsx#L22)
was being used solely for debug logging purposes to demonstrate the
difference between client- and server-rendered styles, and is unrelated
to the client's hydration, which relies solely on client-side APIs. A
similar approach is used to display the client/server markup differences
on this branch. The hydration issues remain even when use of `renderToStaticMarkup`
is removed from the page.

Unlike Horus's example, this branch does not use `pnpm`. It also omits
some style normalization and makes no attempt to alias `react-native` to
the `react-native-web` package — `react-native-web` is always used
directly.

It is unclear if the hydration issue results from a problem in
react-native-web, remix, Hugo's implementation of RNW SSR styling (which
is copied here), or some combination the three. It is also unclear
whether this issue is related-to or completely-different-from the
hydration issue that occurs when using react-native-web without
attempting SSR styling (see "main" and "mod-remix-resolve-configs"
branches of this repo).

### Versions

- @remix-run/\*: ^1.7.2
- react: ^18.2.0
- react-native-web: ^0.18.9

## Branches

- [main](https://github.com/mikeylemmon/remix-rnw/tree/main)
  - A "Just the basics" Remix app with the sole addition of a single
    react-native-web `View`.
  - Encounters a hydration error ("Expected... matching &lt;meta&gt; in &lt;head&gt;")
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mikeylemmon/remix-rnw/blob/main/app/routes/index.tsx)
- [mod-remix-resolve-configs](https://github.com/mikeylemmon/remix-rnw/tree/mod-remix-resolve-configs)
  - Uses a [modded version of @remix-run/dev](https://github.com/remix-run/remix/compare/main...mikeylemmon:remix:config-add-resolve-opts)
    to enable compatibility with community packages that utilize react-native-web
  - Encounters the same hydration error as the main branch
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mikeylemmon/remix-rnw/blob/mod-remix-resolve-configs/app/routes/index.tsx)
- [horus-styles](https://github.com/mikeylemmon/remix-rnw/tree/horus-styles)
  - Attempt to get react-native-web SSR styles working by roughly following
    sections 2. and 3. of Horus Lugo's blog post
    [How to Setup React Native Web in a Remix project](https://horus.dev/blog/react-native-web-remix-setup)
  - Encounters a different hydration error, reported by Horus:
    [necolas/react-native-web#2326](https://github.com/necolas/react-native-web/issues/2326)
    - That issue was closed based on a misreading of Horus's code, but it
      remains unclear if the source of the issue is in react-native-web, on
      on the remix side, or is related to the specific way that SSR is
      implemented in Horus's example.
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mikeylemmon/remix-rnw/blob/horus-styles/app/routes/index.tsx)
- [tyrauber-styles](https://github.com/mikeylemmon/remix-rnw/tree/tyrauber-styles)
  - This branch is very similar to the
    [horus-styles](https://github.com/mikeylemmon/remix-rnw/tree/horus-styles)
    branch, but uses
    [Ty Rauber's code](https://github.com/tyrauber/remix-expo/tree/main/apps/remix/app
    for server-side RNW styles instead of Horus Lugo's
    ([diff](https://github.com/mikeylemmon/remix-rnw/compare/horus-styles...tyrauber-styles)).
    The hydration errors are the same.
  - [![Open in CodeSandbox](https://img.shields.io/badge/Open%20in-CodeSandbox-blue?style=flat-square&logo=codesandbox)](https://githubbox.com/mikeylemmon/remix-rnw/blob/tyrauber-styles/app/routes/index.tsx)

---

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
