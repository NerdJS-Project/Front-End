import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Authentication from "../../utility/Authentication";
import { AuthContext } from '../../store/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import CourseEditScreen from './DashBoardStackNavigator/CourseEditScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackNavigatorInstructor from './HomeStackNavigator/HomeStackNavigatorInstructor';
import DashBoardStackNavigatorInstructor from './DashBoardStackNavigator/DashBoardStackNavigatorInstructor';
import ProfileStackNavigatorInstructor from './ProfileStackNavigator/ProfileStackNavigatorInstructor';
import SettingStackNavigatorInstructor from './SettingsStackNavigator/SettingStackNavigatorInstructor';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL =  'http://localhost:3001/api/user';


const Tab = createBottomTabNavigator()


export default function InstructorMainScreenTabs({ navigation }) {
    return (
      (
        <Tab.Navigator screenOptions={{
          headerShown: false,
        }}>
               <Tab.Screen name="Home" component={HomeStackNavigatorInstructor} />
 
          <Tab.Screen name="Dashboard" component={DashBoardStackNavigatorInstructor} />
          <Tab.Screen name="Profile" component={ProfileStackNavigatorInstructor} />
          <Tab.Screen name="Settings" component={SettingStackNavigatorInstructor} />

        </Tab.Navigator>
      )
      );
    
}