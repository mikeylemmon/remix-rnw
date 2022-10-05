# Remix + React Native Web

Experiments integrating React Native Web (RNW) into a Remix app.

Related discussion: [Usage with React Native (+ Web)](https://github.com/remix-run/remix/discussions/1578)

## Branches

- **[with-modded-remix](https://github.com/mikeylemmon/remix-rnw/tree/with-modded-remix)**
  ([open in CodeSandbox](https://githubbox.com/mikeylemmon/remix-rnw/blob/with-modded-remix/app/routes/index.tsx))
  - Uses a [modded version of @remix-run/dev](https://github.com/remix-run/remix/compare/main...mikeylemmon:remix:config-add-resolve-opts)
    to enable compatibility with community packages that utilize react-native-web
- **[no-modded-remix](https://github.com/mikeylemmon/remix-rnw/tree/no-modded-remix)**
  ([open in CodeSandbox](https://githubbox.com/mikeylemmon/remix-rnw/blob/no-modded-remix/app/routes/index.tsx))
  - Can use react-native-web, but unable to use most other packages in the
    react-native ecosystem

### Branches encountering hydration errors

These branches were created to investigate mysterious hydration errors
encountered when trying to use react-native-web in a Remix app.

Investigation has seemed to isolate all of these issues to the [`StyleSheet`
implementation in `react-native-web`](https://github.com/necolas/react-native-web/tree/0.18.9/packages/react-native-web/src/exports/StyleSheet),
but it is unclear what in that implementation would cause errors specifically
just in Remix apps. See https://github.com/mikeylemmon/cra-rnw-ssr for an
express-based app that does not encounter the errors.

More discussion here: [Usage with React Native (+ Web) [comment #3777340]](https://github.com/remix-run/remix/discussions/1578#discussioncomment-3777340)

- [hydr8-err-minimal](https://github.com/mikeylemmon/remix-rnw/tree/hydr8-err-minimal)
  ([open in CodeSandbox](https://githubbox.com/mikeylemmon/remix-rnw/blob/hydr8-err-minimal/app/routes/index.tsx))
  - A "Just the basics" Remix app with the sole addition of a single
    react-native-web `View`.
  - Encounters a hydration error ("Expected... matching &lt;meta&gt; in &lt;head&gt;")
- [hydr8-err-mod-remix](https://github.com/mikeylemmon/remix-rnw/tree/hydr8-err-mod-remix) ([open in CodeSandbox](https://githubbox.com/mikeylemmon/remix-rnw/blob/hydr8-err-mod-remix/app/routes/index.tsx))
  - Uses a [modded version of @remix-run/dev](https://github.com/remix-run/remix/compare/main...mikeylemmon:remix:config-add-resolve-opts)
    to enable compatibility with community packages that utilize react-native-web
  - Encounters the same hydration error as the hydr8-err-minimal branch
- [hydr8-err-horus](https://github.com/mikeylemmon/remix-rnw/tree/hydr8-err-horus)
  ([open in CodeSandbox](https://githubbox.com/mikeylemmon/remix-rnw/blob/hydr8-err-horus/app/routes/index.tsx))
  - Attempt to get react-native-web SSR styles working by roughly following
    sections 2. and 3. of Horus Lugo's blog post
    [How to Setup React Native Web in a Remix project](https://horus.dev/blog/react-native-web-remix-setup)
  - Encounters a different hydration error, reported by Horus:
    [necolas/react-native-web#2326](https://github.com/necolas/react-native-web/issues/2326)
    - It appears that issue was closed based on a misreading of Horus's code
- [hydr8-err-tyrauber](https://github.com/mikeylemmon/remix-rnw/tree/hydr8-err-tyrauber)
  ([open in CodeSandbox](https://githubbox.com/mikeylemmon/remix-rnw/blob/hydr8-err-tyrauber/app/routes/index.tsx))
  - This branch is very similar to the
    [hydr8-err-horus](https://github.com/mikeylemmon/remix-rnw/tree/hydr8-err-horus)
    branch, but uses
    [Ty Rauber's code](https://github.com/tyrauber/remix-expo/tree/main/apps/remix/app)
    for server-side RNW styles instead of Horus Lugo's
    ([diff](https://github.com/mikeylemmon/remix-rnw/compare/hydr8-err-horus...hydr8-err-tyrauber)).
    The hydration errors are the same.

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
