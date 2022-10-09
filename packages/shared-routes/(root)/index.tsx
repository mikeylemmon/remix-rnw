import { Text, View } from "react-native";
import {
  Link,
  stylesLinkButton,
  stylesLinkButtonText,
  stylesScreen,
} from "@shared/ui";

export default function Home() {
  return (
    <View style={stylesScreen}>
      <Text style={{ fontWeight: "bold" }}>Home Screen</Text>
      <Text style={{ marginTop: 15 }}>
        {"packages/shared-routes/(root)/Home.tsx"}
      </Text>
      <Link href="/details" style={stylesLinkButton}>
        <Text style={stylesLinkButtonText}>Go to Details</Text>
      </Link>
    </View>
  );
}
