import { createContext, Fragment, useContext } from "react";

export const ReactNativeStylesContext = createContext<{
  isClient?: boolean;
  getStyleElement: () => React.ReactElement<unknown>;
}>({ getStyleElement: () => <Fragment /> });

export function useReactNativeStyles() {
  const { isClient, getStyleElement } = useContext(ReactNativeStylesContext);
  if (!isClient) {
    return getStyleElement();
  }

  // Use server-generated stylesheet if it exists (it always should)
  const serverSheet = document.getElementById("react-native-stylesheet");
  if (serverSheet) {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: serverSheet.innerHTML,
        }}
        id="react-native-stylesheet"
      />
    );
  }

  // Fallback to client-generated stylesheet
  return getStyleElement();
}
