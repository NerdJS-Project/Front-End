import * as React from "react";
import { View, Text,Alert, StyleSheet ,Button,TextInput,TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import ClassSearchScreen from "./src/screens/ClassSearchScreen";
import Dash from "./src/screens/dashboard";
import Profile from  "./src/screens/ProfileScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CourseEditScreen from "./src/screens/CourseEditScreen";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>{
      <Stack.Navigator>
        
        
        <Stack.Screen name="LogIn" component={LogInScreen}   options={{ title: 'LogIn' }}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}   options={{ title: 'Sign Up' }}/>
        <Stack.Screen name="ClassSearchScreen" component={ClassSearchScreen} options={{title: 'ClassSearchScreen', headerShown: false}}/>
        <Stack.Screen name="dashboard" component={Dash}/>
        <Stack.Screen name="Profile" component={Profile}   options={{ title: 'Profile' }}/>
        <Stack.Screen name="CourseEdit" component={CourseEditScreen}   options={{ title: 'Course Edit' }}/>

      </Stack.Navigator>
      
      
      
      }</NavigationContainer>

  );

}









