import React, { useState } from 'react';

import { View, Text,Alert, StyleSheet ,Button,TextInput,TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";


const API_URL =  'http://localhost:3001/api/user';

export default function SignUpScreen({navigation}) {


  const [user_email, setEmail] = useState('');
  const [user_name, setName] = useState('');
  const [user_password, setPassword] = useState('');
  const [user_type, setUserType] = useState('string');

  const [message, setMessage] = useState('');
  

  const onSubmitHandler = () => {
    const payload = {
        user_name,
        user_password,
        user_email,
        user_type
    };
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
    .then(async res => { 
        try {
            const jsonRes = await res.json();
            if (res.status !== 201) {
                setMessage(jsonRes.message);
            } else {
                setMessage(jsonRes.message);
            }
        } catch (err) {
            console.log(err);
        };
    })
    .catch(err => {
        console.log(err);
    });
};


  return (


    
    <View style = {styles.container}>
      <View style = {top.blueWave}>

      
  

      <View style={top.logoShape}>
      <Text style={styles.title}> Brain Breeze </Text>
      </View>


      </View>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={login.email} >  

        <TextInput style={login.emailHolder}placeholder={'UserName'} onChangeText={setName}/>    

        <TextInput style={login.emailHolder}placeholder={'Email'} onChangeText={setEmail}/>
        <TextInput style={login.pwHolder}placeholder={'Password'} onChangeText={setPassword}/>    
        

        <Text >{message ? message : null}</Text>

        <TouchableOpacity
        
        onPress={onSubmitHandler}
        >
          <View style={login.loginBttn}>
            <Text style ={login.loginText}>Sign Up</Text>
          </View> 
        </TouchableOpacity>

      </KeyboardAvoidingView>




      <View style= {signup.divider}>
      <Text style ={signup.divider}>-or-</Text>
        </View>

        <TouchableOpacity 
        style ={signup.container}
        onPress ={() => navigation.navigate('LogIn')}

        >
          <View style={signup.firstSgnUpBttn}>
            <Text style ={signup.signupText}>Log In</Text>
          </View> 
        </TouchableOpacity>


        <TouchableOpacity>
          <View style= {forgotPsswrd.forgotText}>
        <Text style ={forgotPsswrd.forgotText}>Forgot password?</Text>
        </View>


        </TouchableOpacity>


        

      

      




      

      

    </View>



  );
}
const styles = StyleSheet.create({
  container: {
    //alignSelf: 'stretch',
    flex: 1,

    backgroundColor: '#E8EAED',
    alignItems: 'center',
    paddingTop:0

  },


  title: {
    //paddingHorizontal:11,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: '#4970FA'
    


  },




});

const top = StyleSheet.create({


  blueWave: {

    alignSelf: 'stretch',
    
    flex: 1,
    backgroundColor: '#4970FA',
    borderBottomEndRadius: 200,
    borderBottomStartRadius:200,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', 
    marginBottom: 300
    
  },


  logoShape: {
    position: 'relative',
    //paddingHorizontal:100,
    //borderRadius:40,
    

    justifyContent: 'center',
    //alignContent:'center',
    backgroundColor:'#E8EAED',
    width: 110,
    height:110,
    borderRadius: 15//'15%'

}


});

const login= StyleSheet.create({
  email: {
    position: 'absolute',
    bottom: 140,
    //width: '100%'
    width: 100,
    //flexDirection: 'row'
    alignItems: 'center'

  },

  emailHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:30,
    borderWidth: 1,
    borderRadius: 60,
    width: 250


  },

  pwHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    bottom:25,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    borderRadius: 60,
    marginTop: 10,
    width: 250
    
    

  },

  loginBttn: {
    width:250,
    position: "relative",
    //height: 60,
    paddingVertical: 15,
    paddingHorizontal:15,
    borderRadius: 60,
    backgroundColor: '#4970FA',
    //marginTop: 10,
   //top: 10,
    //textAlign: 'center',
    color: 'white',
    //color: 'white',
    alignItems:'center'

  },

  loginText: {
    color: 'white',
    //fontSize: 22,
    fontWeight: "bold",

  }


  
});

const signup= StyleSheet.create({
  container: {
    bottom: 40
  },
  divider: {
    bottom: 25,
    fontWeight: "bold",
    color:'#6B6B6B',
    position: "relative",


  },

  firstSgnUpBttn: {
   width:250,

   position: "relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    borderRadius: 60,
    backgroundColor: '#4970FA',
    //marginTOP:0,

    
  
    //textAlign: 'center',
    color: 'white',
    //color: 'white',
    alignItems:'center'

  },
  signupText: {
    color: 'white',
    fontWeight: "bold",

  }

});

const forgotPsswrd= StyleSheet.create({


  forgotText: {
    position: "relative",
    color: '#6B6B6B',
    fontWeight: "bold",

    bottom:10,
    textDecorationLine: 'underline',
   

  }

})


