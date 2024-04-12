import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StartScreen from "../screens/StartScreen";
import WelComeScreen from "../screens/WelcomeScreen";
import RegisterScreen from "../screens/RegisterScreen";
const Stack = createStackNavigator();

export default function MainRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start_screen">
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
