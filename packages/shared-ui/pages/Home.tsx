import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Text, View } from "react-native";

export const Home: FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30,
      }}
    >
      <Text>
        Open up /packages/shared-ui/src/pages/Home.tsx to start working on your
        app
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
Home.displayName = "Home";
