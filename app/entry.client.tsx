// See https://horus.dev/blog/react-native-web-remix-setup#:~:text=import%20%7B%20RemixBrowser%20%7D%20from%20%22%40remix%2Drun/react%22%22%3B
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
  <ReactNativeStylesContext.Provider value={getStyleElement()}>
    <App />
  </ReactNativeStylesContext.Provider>
);
