import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorDashboard from './InstructorDashboard'
import EditCourseAndModuleTabScreen from './EditCourseAndModuleTabScreen'
import CreateCourseAndModuleTabScreen from './CreateCourseAndModuleTabScreen'
import CreateCourse from './CreateCourse'
import InstructorCourseView from './InstructorCourseScreen'
import LessonCreation from './LessonCreationScreen'

const Stack = createNativeStackNavigator()


export default function DashBoardStackNavigatorInstructor(navigation) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>
      <Stack.Screen name="LessonCreation" component={LessonCreation}/>
      <Stack.Screen name="Instructor Dashboard" component={InstructorDashboard} options={{ headerShown: false }}/>

      <Stack.Screen name="Instructor CourseView" component={InstructorCourseView} options={{ headerShown: true }}/>

      <Stack.Screen name="EditCourseAndModule" component={EditCourseAndModuleTabScreen} options={{ headerShown: true }}/>
      <Stack.Screen name="Create Course" component={CreateCourse} options={{ headerShown: true, title: 'Create Course' }}/>



    </Stack.Navigator>
  )
}

