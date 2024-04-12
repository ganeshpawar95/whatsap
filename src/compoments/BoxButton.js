import { Button, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function BoxButton(props) {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={props.onPress}>
      <Text style={styles.buttonTextStyle}> {props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    backgroundColor: "#00A884",
    borderRadius: 4,
    // alignSelf: "center",
    justifyContent: "center",
  },
  buttonTextStyle: {
    textAlign: "center",
    fontWeight: "bold",
  },
});
