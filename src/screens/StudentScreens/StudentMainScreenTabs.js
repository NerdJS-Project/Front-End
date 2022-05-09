import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoardStackNavigatorStudent from "./DashBoardStackNavigator/DashBoardStackNavigatorStudent";
import HomeStackNavigatorStudent from "./HomeStackNavigator/HomeStackNavigatorStudent";
import ProfileStackNavigatorStudent from "./ProfileStackNavigator/ProfileStackNavigatorStudent";
import SettingStackNavigatorStudent from "./SettingsStackNavigator/SettingStackNavigatorStudent";
import React, { useState, useContext } from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WelcomeStackNavigatorStudent from "./WelcomeStudentStack.js/WelcomeStackNavigationInstructor";

const Tab = createBottomTabNavigator()


export default function StudentMainScreenTabs({ navigation }) {
    return (
      (
        <Tab.Navigator screenOptions={{
          headerShown: false,
        }}>
           <Tab.Screen 
            name="welcome" 
            component={WelcomeStackNavigatorStudent} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name='asterisk' color={'#000'} size={20}/>
              ),
            }}

          />

          <Tab.Screen 
            name="Dashboard" 
            component={DashBoardStackNavigatorStudent} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name='view-dashboard' color={'#000'} size={20}/>
              ),
            }}

          />

          <Tab.Screen 
            name="Search" 
            component={HomeStackNavigatorStudent} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name='magnify' color={'#000'} size={20}/>
              ),
            }}
          />
        
          <Tab.Screen 
            name="Profile" 
            component={ProfileStackNavigatorStudent} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name='account-circle-outline' color={'#000'} size={20}/>
              ),
            }}
          />
          <Tab.Screen 
            name="Settings" 
            component={SettingStackNavigatorStudent} 
            options={{
              tabBarIcon: ({focused}) => (
                <MaterialCommunityIcons name='cog-outline' color={'#000'} size={20}/>
              ),
            }}
          />

        </Tab.Navigator>
      )
      );
    
}