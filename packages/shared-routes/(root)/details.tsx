import { View, Text } from "react-native";
import {
  Link,
  stylesLinkButton,
  stylesLinkButtonText,
  stylesScreen,
} from "@shared/ui";

export default function Details() {
  return (
    <View style={[stylesScreen, { backgroundColor: "#d8f0ff" }]}>
      <Text style={{ fontWeight: "bold" }}>Details Screen</Text>
      <Text style={{ marginTop: 15 }}>
        {"packages/shared-routes/(root)/details.tsx"}
      </Text>
      <Link href="/" style={stylesLinkButton}>
        <Text style={stylesLinkButtonText}>Go to Home</Text>
      </Link>
    </View>
  );
}
