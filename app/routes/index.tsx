import { StyleSheet, Text, TouchableOpacity, View } from "react-native-web";

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#06a",
    padding: 30,
    margin: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    color: "white",
    fontSize: 30,
  },
});

export default function Index() {
  return (
    <View style={{ padding: 15 }}>
      <h1>Welcome to Remix (+ RNW)</h1>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.txt}>Hello RNW</Text>
      </TouchableOpacity>
    </View>
  );
}
