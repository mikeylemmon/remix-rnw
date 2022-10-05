// See https://horus.dev/blog/react-native-web-remix-setup#:~:text=import%20%7B%20useReactNativeStyles%20%7D%20from%20%22./rn%2Dstyles%22%3B
// Also https://github.com/tyrauber/remix-expo/blob/main/apps/remix/app/root.tsx
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useReactNativeStyles } from "./rn-styles";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const stylesElement = useReactNativeStyles();

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {stylesElement}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
