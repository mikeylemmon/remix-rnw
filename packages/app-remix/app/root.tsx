import { rootStyles, useRNWStyles } from "@remix-rnw/styles";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const rnwStylesheet = useRNWStyles();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {rnwStylesheet}
      </head>
      <body style={rootStyles}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
