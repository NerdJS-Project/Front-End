import React, { useState, useContext } from "react";
import { useIsFocused,useFocusEffect,  } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
} from "react-native";
import Authentication from "../../utility/Authentication";
import { AuthContext } from "../../store/AuthContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import CourseEditScreen from "./DashBoardStackNavigator/CourseEditScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackNavigatorInstructor from "./HomeStackNavigator/HomeStackNavigatorInstructor";
import DashBoardStackNavigatorInstructor from "./DashBoardStackNavigator/DashBoardStackNavigatorInstructor";
import ProfileStackNavigatorInstructor from "./ProfileStackNavigator/ProfileStackNavigatorInstructor";
import SettingStackNavigatorInstructor from "./SettingsStackNavigator/SettingStackNavigatorInstructor";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import WelcomeStackNavigatorInstructor from "./WelcomeStackNavigation.js/WelcomeStackNavigationInstructor";

const API_URL =
  Platform.OS === "ios" ? "http://localhost:5000" : "http://10.0.2.2:5000";
//const API_URL =  'http://localhost:3001/api/user';

const Tab = createBottomTabNavigator();

export default function InstructorMainScreenTabs({ navigation }) {
  const isFocused = useIsFocused();
 
  return (
    <Tab.Navigator



    initialRouteName="Welcome"
    
    
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4970FA",

   
        
        
      }}

    
      
    >
      <Tab.Screen 
            name="Welcome" 
            component={WelcomeStackNavigatorInstructor} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name='asterisk' color={'#4970FA'} size={20}/>
              ),
            }}
          />

   
      <Tab.Screen
        name="Dashboard"
        component={DashBoardStackNavigatorInstructor}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons name="home" color={"#4970FA"} size={20} />
          ),
        }}
      />


      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigatorInstructor}
       
        options={{
          tabBarIcon: ({ focused }) => (
            
          
            <MaterialCommunityIcons
              name="account-circle-outline"
              color={"#4970FA"}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStackNavigatorInstructor}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={"#4970FA"}
              size={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
