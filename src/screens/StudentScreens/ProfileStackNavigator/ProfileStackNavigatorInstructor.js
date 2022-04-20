import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InstructorProfile from './StudentProfile'
import { AuthContext } from '../../../store/AuthContext'
import IconButton from '../../../component/ui/IconButton'
import StudentProfile from './StudentProfile'

const Stack = createNativeStackNavigator()


export default function ProfileStackNavigatorStudent()  {

  const authCtx = useContext(AuthContext);


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Student Profile" component={StudentProfile}  options={{
        headerShown: true,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }} />
    </Stack.Navigator>
  )
}

