// via https://github.com/tyrauber/remix-expo/blob/main/apps/remix/app/rn-styles.tsx
import { createContext, Fragment, useContext } from "react";

export const ReactNativeStylesContext = createContext<
  React.ReactElement<unknown>
>(<Fragment />);

export function useReactNativeStyles() {
  return useContext(ReactNativeStylesContext);
}
