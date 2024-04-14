import { ScrollView, StyleSheet, View, Text, Dimensions } from "react-native";
import { BoxButton, SelectBox, TitleTop } from "../compoments";
import { useState } from "react";

import { Box, Input } from "native-base";
import { useNavigation } from "@react-navigation/native";

export default function RegisterScreen() {
  const navigation = useNavigation();
  const [country, set_country] = useState(null);
  const [phone_code, set_phone_code] = useState("+91");

  const select_item = ["India", "Pakistan", "Sherilanka"];
  const phone_code_select_item = ["+91", "+92", "+32"];

  const [phone_number, set_phone_number] = useState(null);

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
      <View style={styles.box} />

      <SelectBox
        country={country}
        set_country={set_country}
        select_item={select_item}
        // minWidth={"200"}
        placeholder={"Choose country"}
        accessibilityLabel={"Choose country"}
      />

      <View style={styles.input_group}>
        <SelectBox
          country={phone_code}
          set_country={set_phone_code}
          select_item={phone_code_select_item}
          placeholder={"Choose phone code"}
          minWidth={20}
          accessibilityLabel={"Choose phone code"}
        />
        <Input
          variant="underlined"
          placeholder="Enter phone number"
          value={phone_number}
          onChangeText={(va) => set_phone_number(va)}
          keyboardType="number-pad"
          minWidth={200}
          borderColor={"#00A884"}
          marginLeft={5}
          fontWeight={"extrabold"}
          height={33}
        />
      </View>

      <View style={styles.box} />

      <View style={styles.box} />

      <View style={styles.box} />

      {/* enter phone number box */}
      <BoxButton
        title={"Next"}
        onPress={() => navigation.navigate("otp-verify")}
      />
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
  input_group: {
    flexDirection: "row",
    width: "100%",
    marginTop: 15,
  },
});
