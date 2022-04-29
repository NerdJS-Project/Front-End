import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorSetting from './InstructorSetting'
import ChangePassword from '../../changeAuth/ChangePassword'
import ChangeEmail from '../../changeAuth/ChangeEmail'

const Stack = createNativeStackNavigator()


export default function SettingStackNavigatorInstructor()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Setting" component={InstructorSetting} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
      <Stack.Screen name="Change Email" component={ChangeEmail} />
    </Stack.Navigator>
  )
}

