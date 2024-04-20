import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import WelComeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
import VerifyOtpScreen from "../screens/VerifyOtpScreen";
import TopTabs from "./TopTab";
import HomeScreenHeader from "../compoments/HomeScreenHeader";
const Stack = createStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="start_screen"
          component={StartScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="welcome"
          options={{
            headerShown: false,
          }}
          component={WelComeScreen}
        />

        <Stack.Screen
          name="register"
          options={{
            headerShown: false,
          }}
          component={RegisterScreen}
        />

        <Stack.Screen
          name="otp-verify"
          options={{
            title: "Enter OTP Code",
            headerShown: true,
            headerBackTitleStyle: {
              fontWeight: "bold",
            },
          }}
          component={VerifyOtpScreen}
        />

        <Stack.Screen
          name="home"
          options={{
            title: "Enter OTP Code",
            headerShown: true,
            header: () => <HomeScreenHeader />,
          }}
          component={TopTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
