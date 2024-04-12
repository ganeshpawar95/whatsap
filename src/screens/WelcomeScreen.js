import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import { TitleTop, BoxButton } from "../compoments";

import LOGO from "../assets/images/welcome.jpeg";

import { useNavigation } from "@react-navigation/native";

export default function WelComeScreen() {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.main}>
      {/* top title */}
      <View style={styles.box} />
      <TitleTop title={"Welcome to WhatsApp"} />
      {/* icon */}

      <Image source={LOGO} style={styles.logo} />

      {/* Privacy Policy */}
      <View style={styles.box} />

      <Text style={styles.policy}>
        Read our<Text style={styles.PrivacySpan}> Privacy Policy</Text>. Tap
        “Agree and continue” to accept the{" "}
        <Text style={styles.PrivacySpan}>Teams of Service.</Text>
      </Text>
      {/*   AGREE AND CONTINUE */}
      <View style={styles.box} />
      <View style={styles.box} />

      <BoxButton
        title={"AGREE AND CONTINUE"}
        onPress={() => navigation.navigate("register")}
      />

      {/* meta */}
      <View style={styles.footerStyle}>
        <Text
          style={{
            fontSize: 15,
            color: "gray",
            fontWeight: "600",
            textAlign: "center",
          }}
        >
          From
        </Text>
        <Text
          style={{
            fontWeight: "500",
            fontSize: 18,
            textAlign: "center",
            color: "#000000",
          }}
        >
          FACEBOOK
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 20,
  },
  box: {
    height: 30,
  },
  logo: {
    height: 250,
    width: 250,
    marginTop: 30,
    resizeMode: "cover",
    alignSelf: "center",
  },
  policy: {
    fontSize: 13,
    marginHorizontal: 16,
    textAlign: "center",
  },
  PrivacySpan: {
    color: "#0C42CC",
  },
  footerStyle: {
    marginTop: "25%",
  },
});
