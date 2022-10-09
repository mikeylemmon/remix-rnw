// See https://github.com/expo/router/blob/main/docs/docs/troubleshooting.md
import { registerRootComponent } from "expo";
import { ExpoRoot } from "expo-router";

// Must be exported or Fast Refresh won't update the context
export function App() {
  // Use shared-ui for the routing root
  const ctx = require.context("../../packages/shared-routes");
  return <ExpoRoot context={ctx} />;
}

registerRootComponent(App);
