import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";

import { StyleSheet, Text, View } from "react-native";
import StartScreens from "./src/screens/StartScreen";
import MainRoute from "./src/navigation/MainRoute";

export default function App() {
  return <MainRoute />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
