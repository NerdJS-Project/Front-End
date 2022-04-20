import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashBoardStackNavigatorStudent from "./DashBoardStackNavigator/DashBoardStackNavigatorStudent";
import HomeStackNavigatorStudent from "./HomeStackNavigator/HomeStackNavigatorStudent";
import ProfileStackNavigatorStudent from "./ProfileStackNavigator/ProfileStackNavigatorInstructor";
import SettingStackNavigatorStudent from "./SettingsStackNavigator/SettingStackNavigatorStudent";
import React, { useState, useContext } from 'react';

const Tab = createBottomTabNavigator()


export default function StudentMainScreenTabs({ navigation }) {
    return (
      (
        <Tab.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Tab.Screen name="Home" component={HomeStackNavigatorStudent} />
          <Tab.Screen name="Dashboard" component={DashBoardStackNavigatorStudent} />
          <Tab.Screen name="Profile" component={ProfileStackNavigatorStudent} />
          <Tab.Screen name="Settings" component={SettingStackNavigatorStudent} />

        </Tab.Navigator>
      )
      );
    
}