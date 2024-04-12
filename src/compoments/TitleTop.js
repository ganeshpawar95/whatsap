import { Text, StyleSheet } from "react-native";

export default function TitleTop(props) {
  return <Text style={styles.title}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "#000000",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
    lineHeight: 30,
    textAlign: "center",
  },
});
