import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  user_id: null,
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [authUserid, setAuthUserid] = useState();


  //these functions are part of the auth context
  //what happens when users logged in successfully
  function authenticate(token, userid) {
    setAuthToken(token);
    setAuthUserid(userid);
    AsyncStorage.setItem('token', token);
    AsyncStorage.setItem('user_id', userid);

  }

  function logout() {
    setAuthToken(null);
    setAuthUserid(null);
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('user_id');

  }

  //these values are what gonna be availble to context users
  //!! convert authToken to boolean (true if exist, false if not exist)
  const value = {
    token: authToken,
    user_id: authUserid,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
