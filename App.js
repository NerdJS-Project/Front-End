import * as React from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthContextProvider, { AuthContext } from "./src/store/AuthContext";
import { useContext, useEffect, useState } from "react";
import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import InstructorMainScreenTabs from "./src/screens/InstructorScreens/InstructorMainScreenTabs";

import CreateContent from "./src/screens/InstructorScreens/DashBoardStackNavigator/CreateContentScreen";

import StudentMainScreenTabs from "./src/screens/StudentScreens/StudentMainScreenTabs";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4970FA'},
        headerTintColor: "white",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen
        name="LogIn"
        component={LogInScreen}
        options={{ headerShown: false  }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ title: "Sign Up",color: '#4970FA', headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  const authCtx = useContext(AuthContext);

  if(authCtx.user_type == 'student')
  {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="StudentMainScreen"
          component={StudentMainScreenTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
  else if (authCtx.user_type == 'instructor')
  {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="InstructorMainScreen"
          component={InstructorMainScreenTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }

  else {return (
    <Stack.Navigator>
      <Stack.Screen
        name="InstructorMainScreen"
        component={InstructorMainScreenTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );}


}

function Navigation() {
  const authCtx = useContext(AuthContext);
  //check isAuthenticated using authcontext
  //if is authenticated, allow access to authenticated stack, otherwise, authstack
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
    </NavigationContainer>
  );
}

function Root() {
  const [isTryingLogin, setIsTryingLogin] = useState(true);

  const authCtx = useContext(AuthContext);

  //the first thing to do inroot is to check for token from async
  //if there is a token, then set authcontext to appropriate values

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const storedUserID = await AsyncStorage.getItem("user_id");

      const storedUserType = await AsyncStorage.getItem("user_type");

      // console.log("Hi");
      if (storedToken && storedUserID && storedUserType) {
        authCtx.authenticate(storedToken, storedUserID, storedUserType );
      }

      setIsTryingLogin(false);
      //  await AsyncStorage.setItem('token', "bstoken");

    }

    fetchToken();
     // authCtx.logout();


  }, []);

  //the loading icon 
  if (isTryingLogin) {
    return <AppLoading />;
  }
  return <Navigation />;
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Root />
      </AuthContextProvider>
    </>
  );
}
