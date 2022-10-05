// See https://github.com/tyrauber/remix-expo/blob/main/apps/remix/app/entry.client.tsx
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { AppRegistry } from "react-native-web";
import { ReactNativeStylesContext } from "./rn-styles";

const App = () => <RemixBrowser />;

AppRegistry.registerComponent("App", () => App);

// @ts-ignore
const { getStyleElement } = AppRegistry.getApplication("App");

hydrateRoot(
  document,
  <ReactNativeStylesContext.Provider
    value={{ isClient: true, getStyleElement }}
  >
    <App />
  </ReactNativeStylesContext.Provider>
);
