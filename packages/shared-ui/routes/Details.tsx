import React, { View, Text } from "react-native";
import { Link } from "../core/Link";
import { linkButton, linkButtonText, screen } from "../core/styles";

export function Details() {
  return (
    <View style={[screen, { backgroundColor: "#d8f0ff" }]}>
      <Text>Details Screen</Text>
      <Text style={{ marginTop: 15 }}>
        packages/shared-ui/routes/Details.tsx
      </Text>
      <Link href="/" style={linkButton}>
        <Text style={linkButtonText}>Go to Home</Text>
      </Link>
    </View>
  );
}
