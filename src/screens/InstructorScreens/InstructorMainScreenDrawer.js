import React, { useState, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Authentication from "../../utility/Authentication";
import { AuthContext } from '../../store/AuthContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import CourseEditScreen from './DashBoardStackNavigator/CourseEditScreen';
import InstructorMainScreenTabs from './InstructorMainScreenTabs';

const API_URL = Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';
//const API_URL =  'http://localhost:3001/api/user';



const Drawer = createDrawerNavigator();

export default function InstructorMainScreenDrawer({ navigation }) {
    return (
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            sceneContainerStyle: { backgroundColor: '#3f2f25' },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerInactiveTintColor: 'white',
            drawerActiveTintColor: '#351401',
            drawerActiveBackgroundColor: '#e4baa1',
          }}
        >
          <Drawer.Screen
            name="Home"
            component={InstructorMainScreenTabs}
            options={{
              title: 'All Categories',
              drawerIcon: ({ color, size }) => (
                <Ionicons name="list" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="Subscription"
            component={CourseEditScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="star" color={color} size={size} />
              ),
            }}
          />,
          <Drawer.Screen
            name="About"
            component={CourseEditScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="star" color={color} size={size} />
              ),
            }}
          />,
          <Drawer.Screen
            name="Logout"
            component={CourseEditScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="star" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      );
    
}