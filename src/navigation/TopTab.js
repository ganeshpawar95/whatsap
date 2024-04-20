import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatScreen from "../screens/Tabs/ChatScreen";
import StatusScreen from "../screens/Tabs/StatusScreen";
import CallsScreen from "../screens/Tabs/CallsScreen";
import CameraScreen from "../screens/Tabs/CameraScreen";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="chats"
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },

        tabBarItemStyle: { width: 100 },

        tabBarStyle: { backgroundColor: "#008069" },

        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",

        tabBarIndicatorStyle: {
          backgroundColor: "#ffff",
          opacity: 2,
        },
      }}
    >
      <Tab.Screen
        name="camera"
        component={CameraScreen}
        options={{
          tabBarContentContainerStyle: {
            width: 10,
          },
          tabBarLabelStyle: {
            width: 10,
            margin: 0,
          },
          tabBarItemStyle: {
            width: 80,
          },
          tabBarShowIcon: true,
          tabBarLabel: () => (
            <FontAwesome5 name="camera" color={"white"} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="chats"
        options={{
          tabBarItemStyle: {
            width: 80,
          },
        }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="status"
        options={{
          tabBarItemStyle: {
            width: 80,
          },
        }}
        component={StatusScreen}
      />
      <Tab.Screen
        name="calls"
        options={{
          tabBarItemStyle: {
            width: 80,
          },
        }}
        component={CallsScreen}
      />
    </Tab.Navigator>
  );
}
