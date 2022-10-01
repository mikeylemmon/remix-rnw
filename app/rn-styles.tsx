// See https://horus.dev/blog/react-native-web-remix-setup#:~:text=import%20%7B%20createContext%2C%20useContext%20%7D%20from%20%22react%22%3B
import { createContext, useContext } from "react";

export const ReactNativeStylesContext =
  createContext<React.ReactElement<unknown> | null>(null);

export function useReactNativeStyles() {
  return useContext(ReactNativeStylesContext) ?? ReplaceWithStylesSSRTag;
}

export const ReplaceWithStylesSSRTag = <meta name="REPLACE_WITH_STYLES" />;
