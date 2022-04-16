import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StudentSetting from './StudentSetting'

const Stack = createNativeStackNavigator()


export default function SettingStackNavigatorStudent()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Setting" component={StudentSetting} />
    </Stack.Navigator>
  )
}

