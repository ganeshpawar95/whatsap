import { Card, Text } from "native-base";
import { StyleSheet, View, Image } from "react-native";

import { Avatar } from "native-base";
import Image1 from "../assets/images/imge1.jpg";
import TitleTop from "./TitleTop";

export default function ChatCard() {
  return (
    <View style={styles.mainStyle}>
      {/* <Text>tesss</Text> */}

      {/* add icon */}
      <Image source={Image1} style={styles.IconStyle} resizeMode="stretch" />
      <View style={styles.mdpartStyle}>
        {/* add name */}
        <Text style={styles.NameStyle}>Golu</Text>
        {/* add last message */}
        <Text style={styles.lastMessageStyle}>Lorem ipsum dolor sit</Text>
      </View>

      {/* time */}
      <Text style={styles.messageTimeStyle}>5:27 am</Text>

      {/* count message */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainStyle: {
    flexDirection: "row",
    // marginHorizontal: 5,
    marginVertical: 10,
  },
  IconStyle: {
    height: 60,
    width: 60,
    // height/2
    borderRadius: 30,
  },
  mdpartStyle: {
    marginLeft: 12,
    alignSelf: "center",
  },
  NameStyle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  lastMessageStyle: {
    color: "#889095",
    fontSize: 16,
  },
  messageTimeStyle: {
    color: "#026500",
    fontSize: 16,
  },
});
