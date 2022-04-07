import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorDashboard from './InstructorDashboard'
import EditCourseAndModuleTabScreen from './EditCourseAndModuleTabScreen'
import CreateCourseAndModuleTabScreen from './CreateCourseAndModuleTabScreen'
import CreateCourse from './CreateCourse'
import InstructorCourseView from './InstructorCourseScreen'


const Stack = createNativeStackNavigator()


export default function DashBoardStackNavigatorInstructor(navigation) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="Instructor CourseView" component={InstructorCourseView} options={{ headerShown: false }}/>

      <Stack.Screen name="Instructor Dashboard" component={InstructorDashboard} options={{ headerShown: false }}/>
      <Stack.Screen name="EditCourseAndModule" component={EditCourseAndModuleTabScreen} options={{ headerShown: true }}/>
      <Stack.Screen name="Create Course And Module" component={CreateCourseAndModuleTabScreen} options={{ headerShown: true, title: 'Course & Module' }}/>
      <Stack.Screen name="CreateCourseInstructor" component={CreateCourse} options={{ headerShown: true, title: 'Create Course Instructor' }}/>



    </Stack.Navigator>
  )
}

