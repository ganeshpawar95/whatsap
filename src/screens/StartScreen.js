import {
  View,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

import WPBG2 from "../assets/images/stage2bg.jpeg";

import WPBG from "../assets/images/startScree.jpeg";
import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

function StartScreensStage2(props) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      props.set_is_stage("stage3");
    }, 4000);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <ImageBackground source={WPBG2} style={styles.bgStyle1}>
      <View style={styles.dev1Style}>
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
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>FACEBOOK</Text>
      </View>
    </ImageBackground>
  );
}

function StartScreensStage3(props) {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // props.set_is_stage("stage3");
      navigation.navigate("welcome");
    }, 3000);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ImageBackground source={WPBG2} style={styles.bgStyle1}>
      <View style={styles.dev1Style}>
        <ActivityIndicator size="large" color="#00A884" />

        <Text style={{ fontWeight: "bold", fontSize: 25, color: "#00A884" }}>
          Loading...
        </Text>
      </View>
    </ImageBackground>
  );
}

function StartScreenStage1() {
  return <ImageBackground source={WPBG} style={styles.bgStyle} />;
}

export default function StartScreen() {
  const [is_stage, set_is_stage] = useState("stage1");
  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      set_is_stage("stage2");
    }, 2000);
    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View>
      {is_stage == "stage1" && <StartScreenStage1 />}
      {is_stage == "stage2" && (
        <StartScreensStage2 set_is_stage={(v) => set_is_stage(v)} />
      )}

      {is_stage == "stage3" && <StartScreensStage3 />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },

  logo: {
    width: 66,
    height: 58,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  bgStyle: {
    width: "100%",
    height: "100%",
  },
  bgStyle1: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
  },

  dev1Style: {
    marginTop: "70%",
    alignSelf: "center",
  },
});
