import React, { createContext, Fragment, useContext } from "react";
import { AppRegistry, StyleSheet } from "react-native-web";

type RNWStylesOpts = {
  isClient?: boolean;
};
type RNWStylesContextValue = RNWStylesOpts & {
  getStyleElement: () => React.ReactElement<unknown>;
};
type RootElement = React.ReactElement<unknown>;

export const RNWStylesContext = createContext<RNWStylesContextValue>({
  getStyleElement: () => <Fragment />,
});

export const registerApp = (rootElement: RootElement) => {
  AppRegistry.registerComponent("main", () => () => rootElement);
  return rootElement;
};

export const withRNWStyles = (
  rootElement: RootElement,
  options: RNWStylesOpts = {}
) => {
  if (!options.isClient) {
    registerApp(rootElement);
  }
  // @ts-ignore
  const { getStyleElement } = AppRegistry.getApplication("main");
  return (
    <RNWStylesContext.Provider value={{ getStyleElement, ...options }}>
      {rootElement}
    </RNWStylesContext.Provider>
  );
};

/* Alias for withRNWStyles(rootElement, { isClient: true }) */
export const withRNWStylesClient = (rootElement: RootElement) =>
  withRNWStyles(rootElement, { isClient: true });

export function useRNWStyles() {
  const { isClient, getStyleElement } = useContext(RNWStylesContext);
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    minHeight: "100vh",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
export const rootStyles = styles.root;
