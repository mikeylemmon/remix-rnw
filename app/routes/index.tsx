import { View } from "react-native-web";
export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <View />
      <p>
        See console logs for hydration error caused by inclusion of RNW View
        component: (
        <span
          style={{ color: "red" }}
        >{`"Warning: Expected server HTML to contain a matching <meta> in <head>.`}</span>
        )
      </p>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://github.com/remix-run/remix/discussions/1578"
            rel="noreferrer"
          >
            Remix + RNW Github Discussion
          </a>
        </li>
      </ul>
    </div>
  );
}
