import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentSetting from './StudentSetting'
import ChangePassword from './ChangePassword'
import ChangeEmail from './changeEmail'

const Stack = createNativeStackNavigator()


export default function SettingStackNavigatorStudent()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Setting" component={StudentSetting} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
      <Stack.Screen name="Change Email" component={ChangeEmail} />
    </Stack.Navigator>
  )
}

