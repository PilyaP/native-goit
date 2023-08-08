import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RegistrationScreen } from "./Screens/RegistrationScreen/RegistrationScreen";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";
import { MapScreen } from "./Screens/MapScreen/MapScreen";
import Home from "./Screens/Home/Home";
import { CommentsScreen } from "./Screens/CommentsScreen/CommentsScreen";

const MainStack = createStackNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <NavigationContainer>
        <MainStack.Navigator>
          {/* Аналог Routes */}
          <MainStack.Screen
            name="Register"
            options={{
              title: "Registration",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 20,
              },
              headerTitleAlign: "center",
            }}
            component={RegistrationScreen}
          />
          <MainStack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={LoginScreen}
          />
          <MainStack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={Home}
          />
          {/* Аналог Route */}

          <MainStack.Screen
            name="Comments"
            component={CommentsScreen}
            options={{ headerShown: true, headerTitleAlign: "center" }}
          />
          <MainStack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: true, headerTitleAlign: "center" }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
};
