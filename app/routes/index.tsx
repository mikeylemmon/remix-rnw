import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { AppRegistry, View } from "react-native-web";

export default function Index() {
  const diffStyles = {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    padding: "1rem",
    background: "#ccc",
    maxWidth: "45%",
    overflowX: "scroll",
  } as CSSProperties;

  const [styleMarkup, setStyleMarkup] = useState({ client: "", server: "" });
  useEffect(() => {
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("App");
    const clientStyleMarkup = renderToStaticMarkup(getStyleElement());
    const serverStyleMarkup =
      document.getElementById("react-native-stylesheet")?.outerHTML ?? "";
    setStyleMarkup({ client: clientStyleMarkup, server: serverStyleMarkup });
  }, []);

  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        lineHeight: "1.4",
        padding: "1rem",
      }}
    >
      <h1>Welcome to Remix</h1>
      <View />
      <p>
        This branch is very similar to the{" "}
        <a
          target="_blank"
          href="https://github.com/mikeylemmon/remix-rnw/tree/horus-styles"
          rel="noreferrer"
        >
          horus-styles
        </a>{" "}
        branch, but uses{" "}
        <a
          target="_blank"
          href="https://github.com/tyrauber/remix-expo/tree/main/apps/remix/app"
          rel="noreferrer"
        >
          Ty Rauber's code
        </a>{" "}
        for server-side RNW styles instead of Horus Lugo's (
        <a
          target="_blank"
          href="https://github.com/mikeylemmon/remix-rnw/compare/horus-styles...tyrauber-styles"
          rel="noreferrer"
        >
          diff
        </a>
        ). The hydration errors are the same.
      </p>
      <h3>Description from horus-lugo branch</h3>
      <p>
        This branch follows the process outlined by Horus Lugo{" "}
        <a
          target="_blank"
          href="https://horus.dev/blog/react-native-web-remix-setup#:~:text=2.%20React%20Native%20Web%20Styles"
          rel="noreferrer"
        >
          here
        </a>{" "}
        to try to get SSR for react-native-web styles working properly.
      </p>
      <p>
        Following Horus's process results in the hydration error outlined by
        Horus in{" "}
        <a
          target="_blank"
          href="https://github.com/necolas/react-native-web/issues/2326"
          rel="noreferrer"
        >
          necolas/react-native-web#2326
        </a>
        . See the console logs for this page to observe the hydration error
        caused by RNW styles mismatch: (
        <span style={{ color: "red" }}>
          {
            'Warning: Prop `dangerouslySetInnerHTML` did not match. Server: "[stylesheet-group="0"]{}..." Client: "[stylesheet-group="0"] { }...'
          }
        </span>
        ).
      </p>
      <p>
        Note that the RNW maintainer's response in closing the issue suggests
        that Horus was incorrectly using server APIs on the client — in fact,
        the server API `renderToStaticMarkup`{" "}
        <a
          target="_blank"
          href="https://github.com/HorusGoul/rnw-css-hydration-bug-error-repro/blob/main/app/entry.client.tsx#L22"
          rel="noreferrer"
        >
          in Horus's client code
        </a>{" "}
        was being used solely for debug logging purposes to demonstrate the
        difference between client- and server-rendered styles, and is unrelated
        to the client's hydration, which relies solely on client-side APIs. A
        similar approach is used to display the client/server markup differences
        here. The hydration issues remain even when use of
        `renderToStaticMarkup` is removed from this page.
      </p>
      <p>
        Unlike Horus's example, this branch does not use `pnpm`. It also omits
        some style normalization and makes no attempt to alias `react-native` to
        the `react-native-web` package — `react-native-web` is always used
        directly.
      </p>
      <p>
        It is unclear if the hydration issue results from a problem in
        react-native-web, remix, Hugo's implementation of RNW SSR styling (which
        is copied here), or some combination the three. It is also unclear
        whether this issue is related-to or completely-different-from the
        hydration issue that occurs when using react-native-web without
        attempting SSR styling (see "main" and "mod-remix-resolve-configs"
        branches of this repo).
      </p>
      <h3>Links</h3>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/remix-run/remix/discussions/1578"
            rel="noreferrer"
          >
            Remix + RNW Github Discussion
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/necolas/react-native-web/issues/2326"
            rel="noreferrer"
          >
            necolas/react-native-web#2326 (CSS markup mismatch between server
            and client, provokes hydration error)
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://horus.dev/blog/react-native-web-remix-setup"
            rel="noreferrer"
          >
            Horus Lugo: How to Setup React Native Web in a Remix project
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/mikeylemmon/remix-rnw"
            rel="noreferrer"
          >
            mikeylemmon/remix-rnw (this repo)
          </a>
        </li>
      </ul>
      <h2 style={{ marginTop: "2rem" }}>Observed client/server RNW styles:</h2>
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "stretch" }}
      >
        <div style={{ ...diffStyles, marginRight: "2rem" }}>
          <h3>Client</h3>
          <pre>{styleMarkup.client}</pre>
        </div>
        <div style={diffStyles}>
          <h3>Server</h3>
          <pre>{styleMarkup.server}</pre>
        </div>
      </div>
    </div>
  );
}
