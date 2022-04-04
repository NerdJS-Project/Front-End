import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorHome from './InstructorHome'

const Stack = createNativeStackNavigator()


export default function HomeStackNavigatorInstructor()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Home" component={InstructorHome} />
    </Stack.Navigator>
  )
}

