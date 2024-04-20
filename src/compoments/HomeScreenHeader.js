import { View, Text, StyleSheet } from "react-native";

import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";

export default function HomeScreenHeader() {
  return (
    <View style={styles.main}>
      <Text style={styles.textStyle}>WhatsApp</Text>
      <View style={styles.rightStyle}>
        <Feather name="search" size={25} color={"white"} />
        <Entypo name="dots-three-vertical" size={25} color={"white"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#008069",
    height: 50,
    padding: 10,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: {
    fontSize: 20,
    color: "#ffff",
    // marginTop: 14,
    fontWeight: "bold",
  },
  rightStyle: {
    flexDirection: "row",
    width: 60,
    justifyContent: "space-between",
  },
});
