import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ChatScreen from "../screens/Tabs/ChatScreen";
import StatusScreen from "../screens/Tabs/StatusScreen";
import CallsScreen from "../screens/Tabs/CallsScreen";
import CameraScreen from "../screens/Tabs/CameraScreen";

const Tab = createMaterialTopTabNavigator();

export default function TopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 12 },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: { backgroundColor: "powderblue" },
      }}
    >
      <Tab.Screen name="camera" component={CameraScreen} />
      <Tab.Screen name="chats" component={ChatScreen} />
      <Tab.Screen name="status" component={StatusScreen} />
      <Tab.Screen name="calls" component={CallsScreen} />
    </Tab.Navigator>
  );
}
