import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import InstructorSetting from './InstructorSetting'

const Stack = createNativeStackNavigator()


export default function SettingStackNavigatorInstructor()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Setting" component={InstructorSetting} />
    </Stack.Navigator>
  )
}
