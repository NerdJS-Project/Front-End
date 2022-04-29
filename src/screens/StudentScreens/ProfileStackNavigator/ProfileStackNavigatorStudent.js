import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthContext } from '../../../store/AuthContext'
import IconButton from '../../../component/ui/IconButton'
import Profile from './StudentProfile'
import StudentEditProfile from '../../UserProfile/EditProfile';
const Stack = createNativeStackNavigator()


export default function ProfileStackNavigatorStudent()  {

  const authCtx = useContext(AuthContext);


  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="Profile" component={Profile}  options={{
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
        
        <Stack.Screen name="Edit Profile" component={StudentEditProfile} options={{headerShown:true}}/>

    </Stack.Navigator>
  )
}

