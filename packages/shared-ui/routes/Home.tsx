import React, { Text, View } from "react-native";
import { Link } from "../core/Link";
import { linkButton, linkButtonText, screen } from "../core/styles";

export function Home() {
  return (
    <View style={screen}>
      <Text>Home Screen</Text>
      <Text style={{ marginTop: 15 }}>packages/shared-ui/routes/Home.tsx</Text>
      <Link href="/details" style={linkButton}>
        <Text style={linkButtonText}>Go to Details</Text>
      </Link>
    </View>
  );
}
