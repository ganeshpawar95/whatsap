import { View, Text, StyleSheet } from "react-native";

export default function HomeScreenHeader() {
  return (
    <View style={styles.main}>
      <Text style={styles.textStyle}>WhatsApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#008069",
    height: 70,
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
    color: "#ffff",
    marginTop: 14,
    fontWeight: "bold",
  },
});
