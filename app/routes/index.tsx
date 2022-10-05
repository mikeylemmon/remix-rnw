import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import CompA from "~/components/CompA";
import CompB from "~/components/CompB";

export default function Index() {
  return (
    <View style={{ padding: 15 }}>
      <h1>Welcome to Remix (+ RNW)</h1>
      <p>
        This branch uses a{" "}
        <a href="https://github.com/remix-run/remix/compare/main...mikeylemmon:remix:config-add-resolve-opts">
          modded version of @remix-run/dev
        </a>{" "}
        to enable compatibility with community packages that utilize
        react-native-web.
      </p>

      <h3 style={{ marginTop: "1rem" }}>
        {`import { LinearGradient } from '`}
        <a href="https://docs.expo.dev/versions/latest/sdk/linear-gradient/">
          expo-linear-gradient
        </a>
        {`'`}
      </h3>
      <LinearGradient
        colors={["purple", "teal"]}
        style={{ padding: "5rem", borderRadius: 30 }}
        start={{ x: 0.48, y: 0 }}
        end={{ x: 0.52, y: 1 }}
      />

      <h2 style={{ marginTop: "3rem" }}>RN-style import resolution:</h2>
      <View style={{ backgroundColor: "#ddd", padding: 15 }}>
        <pre
          style={{
            backgroundColor: "#333",
            color: "white",
            padding: 15,
            whiteSpace: "pre",
          }}
        >
          {`$ tree app/components/
           ├── CompA.tsx
           ├── CompA.web.tsx
           ├── CompB.ios.tsx
           └── CompB.tsx`}
        </pre>

        <h3>import CompA from '~/app/components/CompA'</h3>
        <CompA />

        <h3 style={{ marginTop: "2rem" }}>
          import CompB from '~/app/components/CompB'
        </h3>
        <CompB />
      </View>
    </View>
  );
}
