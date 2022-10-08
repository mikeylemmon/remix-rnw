import { registerApp, withRNWStylesClient } from "@remix-rnw/styles";
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

const App = registerApp(<RemixBrowser />);

hydrateRoot(document, withRNWStylesClient(App));
