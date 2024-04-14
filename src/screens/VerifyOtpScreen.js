import { Box } from "native-base";
import { useState } from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

import OTPTextView from "react-native-otp-textinput";
import { BoxButton, LoadingModal } from "../compoments";
import { useNavigation } from "@react-navigation/native";
export default function VerifyOtpScreen() {
  const [opt, set_otp] = useState("");
  const [loading, set_loading] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.main}>
      {/* Code has been send to +91 11******44 */}
      <Box height={100} />
      <Text style={styles.title}>Code has been send to +91 7060892531</Text>

      {/* enter otp input box */}
      <Box height={5} />

      <OTPTextView
        inputCount={4}
        defaultValue={opt}
        textInputStyle={styles.optInputStyle}
        handleTextChange={(text) => set_otp(text)}
        tintColor={"#000000"}
        offTintColor={"#000000"}
      />
      <Box height={10} />

      {/* Resend Code in 56 s */}
      <Text style={styles.title}>Resend Code in 56 s</Text>

      {/* Verify button */}
      <Box height={100} />

      <BoxButton
        title={"Verify"}
        onPress={() =>
          // navigation.navigate("register")
          set_loading(true)
        }
        styles={styles.buttonStyle}
        tileStyle={styles.tileStyle}
      />
      <LoadingModal open={loading} set_loading={set_loading} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 15,
    color: "#000000",
  },
  main: {
    margin: 10,
  },
  optInputStyle: {
    borderWidth: 1,
    borderRadius: 14,
    borderBottomWidth: 1,
    // borderColor: "#000000",
  },

  buttonStyle: {
    backgroundColor: "#000000",
    borderRadius: 20,
  },
  tileStyle: {
    color: "white",
  },
});
