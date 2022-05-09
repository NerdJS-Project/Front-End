import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../../../component/Welcome'

const Stack = createNativeStackNavigator()


export default function WelcomeStackNavigatorInstructor()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="WelcomeInstructor" component={Welcome} />
          </Stack.Navigator>
  )
}