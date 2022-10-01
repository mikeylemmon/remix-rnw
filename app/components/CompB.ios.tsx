// This component uses an iOS-only component and won't work on the web
import { useEffect } from "react";
import { ActionSheetIOS, Text } from "react-native";

export default function CompB() {
  useEffect(() => {
    ActionSheetIOS.showActionSheetWithOptions(
      { options: ["Cancel"], cancelButtonIndex: 0 },
      () => {
        console.log("ActionSheet dismissed");
      }
    );
  }, []);
  return <Text>Resolved to ~/app/components/CompB.ios.tsx</Text>;
}
