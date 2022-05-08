import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  user_id: null,
  isAuthenticated: false,

  user_type: null,
  authenticate: (token, userid, user_type) => {},

  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [authUserid, setAuthUserid] = useState();
  const [authUserType, setAuthUserType] = useState();


  //these functions are part of the auth context
  //what happens when users logged in successfully

  const authenticate = async(token, userid, user_type)=>{
    try {
     setAuthToken(token);
     setAuthUserid(userid);
     setAuthUserType(user_type);
     await AsyncStorage.setItem('token', token);
    //  await AsyncStorage.setItem('user_id', JSON.stringify(userid));
    //  await AsyncStorage.setItem('user_type', JSON.stringify(user_type))    
    await AsyncStorage.setItem('user_id', userid);
     await AsyncStorage.setItem('user_type', user_type)   
  
     return true;
    
    } catch (exception) {
     return false;
    }
  
   }
  
  
     //AsyncStorage.removeItem('token');
     //AsyncStorage.removeItem('user_id');
     const logout = async() => {
       try {
         await AsyncStorage.removeItem('token');
         await AsyncStorage.removeItem('user_id');
         await AsyncStorage.removeItem('user_type');


         setAuthToken(null);
         setAuthUserid('');
         setAuthUserType('');
        
         return true;
     }
     catch(exception) {
         return false;
     }
 }
 
  //these values are what gonna be availble to context users
  //!! convert authToken to boolean (true if exist, false if not exist)
  const value = {
    token: authToken,
    user_id: authUserid,
    user_type: authUserType,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
