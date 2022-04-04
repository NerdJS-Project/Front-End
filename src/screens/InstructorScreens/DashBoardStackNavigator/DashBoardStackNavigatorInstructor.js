import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorDashboard from './InstructorDashboard'
import EditCourseAndModuleTabScreen from './EditCourseAndModuleTabScreen'

const Stack = createNativeStackNavigator()


export default function DashBoardStackNavigatorInstructor(navigation) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="InstructorDashboard" component={InstructorDashboard} />
      <Stack.Screen name="EditCourseAndModule" component={EditCourseAndModuleTabScreen} options={{ headerShown: true }}
      />


    </Stack.Navigator>
  )
}

