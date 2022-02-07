import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LogInScreen from "../screens/LogInScreen";
import SignUpScreen from "../screens/SignUpScreen";


const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"LogIn"}
          component={LogInScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name={"SignUp"}
          component={SignUpScreen}
          options={{
            title: "Sign Up"
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
