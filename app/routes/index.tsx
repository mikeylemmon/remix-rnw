import CompA from "~/components/CompA";
import CompB from "~/components/CompB";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix (+ RNW)</h1>
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

      <p style={{ marginTop: "2rem" }}>
        This branch (
        <a
          target="_blank"
          href="https://github.com/mikeylemmon/remix-rnw/tree/mod-remix-resolve-configs"
          rel="noreferrer"
        >
          mod-remix-resolve-configs
        </a>
        ) uses{" "}
        <a
          target="_blank"
          href="https://github.com/mikeylemmon/remix/commit/b0e79b90def5cce23f2978ed12ba4555ff8bcba2"
          rel="noreferrer"
        >
          a mod of @remix-run/dev
        </a>{" "}
        to enable compatibility with many packages in the react-native(-web)
        ecosystem by...
      </p>
      <ul>
        <li>
          prioritizing resolving files with a {`".web.<ext>" `}
          over files with just {`".<ext>"`}
        </li>
        <li>
          aliasing {`"react-native" `}
          to {`"react-native-web"`}.
        </li>
      </ul>

      <h3 style={{ marginTop: "2rem" }}>
        import CompA from '~/app/components/CompA'
      </h3>
      <CompA />

      <h3 style={{ marginTop: "2rem" }}>
        import CompB from '~/app/components/CompB'
      </h3>
      <CompB />

      <h3
        style={{ marginTop: "2rem" }}
      >{`import { LinearGradient } from 'expo-linear-gradient'`}</h3>
      <LinearGradient colors={["purple", "blue"]} style={{ padding: "5rem" }} />
    </div>
  );
}
