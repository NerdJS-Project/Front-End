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
    <Text style ={styles.title}>Create an Account</Text>

    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={form.account} > 
      <TextInput style={form.nameHolder}placeholder={'Name'} onChangedText={setName}/>
      <TextInput style={form.emailHolder}placeholder={'Email'}onChangedText={setEmail}/>
      <TextInput secureTextEntry={true} style={form.pwHolder}placeholder={'Password'}onChangedText={setPassword}/>
      <TextInput secureTextEntry={true} style={form.confirmPwHolder}placeholder={'Confirm Password'}/>
    </KeyboardAvoidingView>
        

    <Text style={form.status}>Are you a:</Text>
    <label>
      <input type="radio" value="Student"/>
      <span>Student</span>
    </label>
    <label>
      <input type="radio" value="Teacher/Educator"/>
      <span>Teacher/Educator</span>
    </label>

    <TouchableOpacity style = {register.container}>
        <View style={register.registerButton}>
          <Text style ={register.registerText}>Sign Up</Text>
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
    paddingTop:10
  },


  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4970FA"
  }

});



const form = StyleSheet.create({
  account: {
    top: 20,
    bottom: 120,
    alignItems: 'center',
    margin: 70
  },
  
  nameHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:30,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    margin: 10
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
    width: 250,
    margin: 10

  },

  pwHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:30,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    margin: 10
  },

  confirmPwHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:30,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    margin: 10
  },

  status: {
    fontWeight:"bold",
    textAlign:"center",
    bottom: 550
  },

  
})

const register = StyleSheet.create ({
  container: {
    margin: 50
  },
  registerButton: {
    width: 250,
    paddingVertical: 15, 
    paddingHorizontal: 15, 
    borderRadius: 60,
    backgroundColor: '#4970FA',
    color: 'white',
    alignItems:'center',
    margin: 50
  },

  registerText: {
    color: 'white', 
    fontWeight: "bold"
  }
})



