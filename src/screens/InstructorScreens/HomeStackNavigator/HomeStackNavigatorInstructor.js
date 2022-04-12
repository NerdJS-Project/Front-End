import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorHome from './InstructorHome'
import ClassSearchScreenTest from './SearchScreenTest'

const Stack = createNativeStackNavigator()


export default function HomeStackNavigatorInstructor()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="SearchScreen" component={ClassSearchScreenTest} />
    </Stack.Navigator>
  )
}

