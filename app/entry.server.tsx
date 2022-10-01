// See https://github.com/tyrauber/remix-expo/blob/main/apps/remix/app/entry.server.tsx
import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";
import { AppRegistry } from "react-native-web";
import { ReactNativeStylesContext } from "./rn-styles";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const App = () => <RemixServer context={remixContext} url={request.url} />;

  AppRegistry.registerComponent("App", () => App);

  // @ts-ignore
  const { getStyleElement } = AppRegistry.getApplication("App", {});

  const page = (
    <ReactNativeStylesContext.Provider value={getStyleElement()}>
      <App />
    </ReactNativeStylesContext.Provider>
  );

  const markup = renderToString(page);

  responseHeaders.set("Content-Type", "text/html");

  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
