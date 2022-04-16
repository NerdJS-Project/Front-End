import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorHome from './StudentHome'
import StudentHome from './StudentHome'

const Stack = createNativeStackNavigator()


export default function HomeStackNavigatorStudent()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Student Home" component={StudentHome} />
    </Stack.Navigator>
  )
}

