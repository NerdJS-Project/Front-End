import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InstructorSetting from './InstructorSetting'
import CreateContent from '../DashBoardStackNavigator/CreateContentScreen'

const Stack = createNativeStackNavigator()


export default function SettingStackNavigatorInstructor()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Create Content" component={CreateContent} />
      <Stack.Screen name="Setting" component={InstructorSetting} />


    </Stack.Navigator>
  )
}

