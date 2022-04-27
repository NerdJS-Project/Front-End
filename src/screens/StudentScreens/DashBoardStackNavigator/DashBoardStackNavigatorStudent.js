import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StudentDashboard from './StudentDashboard'
import TabsStudentUnitView from './TabsStudentUnitView'
import StudentLessonView from './StudentLessonView'
import StudentCourseView from './StudentCourseView'
import CourseDescriptionScreen from './StudentCourseDescription'


const Stack = createNativeStackNavigator()


export default function DashBoardStackNavigatorStudent(navigation) {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: true,
    }}>

<Stack.Screen name="Student Dashboard" component={StudentDashboard} options={{ headerShown: false }}/>
 
      <Stack.Screen name="Student Content View Tab" component={TabsStudentUnitView} options={{ headerShown: true }}/>
      <Stack.Screen name="Course Description" component={CourseDescriptionScreen}/>
     <Stack.Screen name="Student Course View" component={StudentCourseView} />
     <Stack.Screen name="Lesson View" component={StudentLessonView}/>
      

      

    </Stack.Navigator>
  )
}

