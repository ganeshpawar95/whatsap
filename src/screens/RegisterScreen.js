import { ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";
import { BoxButton, TitleTop } from "../compoments";

export default function RegisterScreen() {
  return (
    <ScrollView style={styles.main}>
      {/* Enter your phone number */}
      <View style={styles.box} />
      <TitleTop title="Enter your phone number" />

      <View style={styles.box} />

      {/* WhatsApp will need to verify your phone number. What’s    my number? */}

      <Text style={styles.policy}>
        WhatsApp will need to verify your phone number.
        <Text style={styles.PrivacySpan}>What’s my number?.</Text>
      </Text>

      {/* select country input */}

      {/* enter phone number box */}

      <BoxButton title={"Next"} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    margin: 20,
    height: Dimensions.get("screen").height,
  },
  box: {
    height: 50,
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
