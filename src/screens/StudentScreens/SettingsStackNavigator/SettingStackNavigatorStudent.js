import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StudentSetting from './StudentSetting';
import ChangePassword from '../../changeAuth/ChangePassword';
import ChangeEmail from '../../changeAuth/ChangeEmail';
import TestAnim from './TestAnimation';

const Stack = createNativeStackNavigator()


export default function SettingStackNavigatorStudent()  {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
            <Stack.Screen name="Test anim" component={TestAnim} />

      <Stack.Screen name="Setting" component={StudentSetting} />
      <Stack.Screen name="Change Password" component={ChangePassword} />
      <Stack.Screen name="Change Email" component={ChangeEmail} />
    </Stack.Navigator>
  )
}

