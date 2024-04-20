import { View, Text, StatusBar, Box } from "native-base";
import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";
import { Fragment, useState } from "react";
import Homebg from "../../assets/images/home_bg.jpeg";
import HomeCentericon from "../../assets/images/home_center_icon.jpeg";
import { BoxButton, ChatCard, TitleTop } from "../../compoments";
export default function ChatScreen() {
  const [is_chat, set_is_chat] = useState(false);
  const [data, set_data] = useState([
    1, 2, 3, 4, 5, 6, 2, 3, 3, 3, 33, 3, 3, 3, 3,
  ]);
  return (
    <Fragment>
      {is_chat ? (
        <ScrollView style={styles.main}>
          <StatusBar backgroundColor={"#008069"} />
          {data.map((master) => (
            <ChatCard />
          ))}
        </ScrollView>
      ) : (
        <ImageBackground source={Homebg} style={styles.bgStyle}>
          <Image source={HomeCentericon} style={styles.cIconStyle} />
          <Box h="5" />

          <TitleTop title="You haven’t chat yet" />
          <Box h={"16"} />
          <BoxButton
            title="Start Chatting"
            styles={styles.buttonStyle}
            tileStyle={styles.tileStyle}
            onPress={() => set_is_chat(true)}
          />
        </ImageBackground>
      )}
    </Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "white",
    padding: 10,
  },
  bgStyle: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cIconStyle: {
    height: 100,
    width: 100,
  },

  buttonStyle: {
    backgroundColor: "#0CCC83",
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  tileStyle: {
    fontSize: 16,
    // fontWeight: "800",
    marginHorizontal: 10,
    color: "white",
  },
});
