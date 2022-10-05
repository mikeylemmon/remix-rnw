import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { AppRegistry } from "react-native-web";
import { renderToPipeableStream } from "react-dom/server";
import { ReactNativeStylesContext } from "./rn-styles";

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    const App = () => <RemixServer context={remixContext} url={request.url} />;
    AppRegistry.registerComponent("App", () => App);
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication("App", {});
    const page = (
      <ReactNativeStylesContext.Provider value={{ getStyleElement }}>
        <App />
      </ReactNativeStylesContext.Provider>
    );

    let didError = false;

    const { pipe, abort } = renderToPipeableStream(page, {
      onShellReady: () => {
        const body = new PassThrough();

        responseHeaders.set("Content-Type", "text/html");

        resolve(
          new Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode,
          })
        );

        pipe(body);
      },
      onShellError: (err) => {
        reject(err);
      },
      onError: (error) => {
        didError = true;

        console.error(error);
      },
    });

    setTimeout(abort, ABORT_DELAY);
  });
}
