import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StudentDashboard from './StudentDashboard'


const Stack = createNativeStackNavigator()


export default function DashBoardStackNavigatorStudent(navigation) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="Student Dashboard" component={StudentDashboard} options={{ headerShown: false }}/>

      

    </Stack.Navigator>
  )
}

