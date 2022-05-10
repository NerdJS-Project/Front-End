import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from '../../../store/AuthContext'
import IconButton from '../../../component/ui/IconButton'
import EditProfile from '../../UserProfile/EditProfile'
const Stack = createNativeStackNavigator()
import InstructorProfile from '../../InstructorScreens/ProfileStackNavigator/InstructorProfile.js'


export default function ProfileStackNavigatorInstructor()  {

  const authCtx = useContext(AuthContext);


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
     <Stack.Screen name="My Profile" component={InstructorProfile} options={{
        headerShown: false,
          headerRight: ({ tintColor }) => (
            <IconButton
              icon="exit"
              color={tintColor}
              size={24}
              onPress={authCtx.logout}
            />
          ),
      }}/>

        <Stack.Screen name="Edit Profile" component={EditProfile} options={{headerShown:true}}/>


    </Stack.Navigator>
  )
}

