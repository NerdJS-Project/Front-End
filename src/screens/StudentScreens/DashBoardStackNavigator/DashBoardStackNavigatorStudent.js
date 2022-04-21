import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CourseDescription from './studentCourseDescription'
import StudentDashboard from './StudentDashboard'
import GeomClass from "./classes"
import StudentCourseView from './studentCourseView'
const Stack = createNativeStackNavigator()


export default function DashBoardStackNavigatorStudent(navigation) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>

     <Stack.Screen name="Geometry Class" component={GeomClass}/>
      <Stack.Screen name="Course Description" component={CourseDescription}/>
     <Stack.Screen name="CourseView" component={StudentCourseView}/>
      <Stack.Screen name="Student Dashboard" component={StudentDashboard} options={{ headerShown: false }}/>
      

    </Stack.Navigator>
  )
}

