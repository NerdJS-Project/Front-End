import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet,TextInput,KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Authentication from "../utility/Authentication";
import { ButtonGroup, CheckBox } from 'react-native-elements';
import { AuthContext } from '../store/AuthContext';


const API_URL =  'http://localhost:3001/api/user/create';

export default function SignUpScreen({navigation}) {

  const [selectedIndex, setSelectedIndex] = useState();
  const [check1, setCheck1] = useState(false);


  //pasword eye
  const [passwordEye, setPasswordEye] = useState(false);


  //TODO: Add proper set state on text input in order to recieve and update as user types their info
  const [user_email, setEmail] = useState('');
  const [user_name, setName] = useState('');
  const [user_password, setPassword] = useState('');
  const [user_type, setUserType] = useState('string');
  const [message, setMessage] = useState('');
  




  const onSubmitHandler = () => {
    console.log("email and pass and name: ",user_email, user_password, user_name, user_type);

    if(!check1){
      alert("You need to agree to the terms and conditions.");
    }


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
      <TextInput style={form.nameHolder}placeholder={'Name'} onChangeText={newText => setName(newText)}/>
      <TextInput style={form.emailHolder}placeholder={'Email'} onChangeText={newText => setEmail(newText)}/>
      <TextInput 
        secureTextEntry={true} 
        type={passwordEye === false ? "password" : "text"}
        style={form.pwHolder}placeholder={'Password'} 
        onChangeText={newText => setPassword(newText)}
      />
      <TextInput secureTextEntry={true} style={form.confirmPwHolder} placeholder={'Confirm Password'}/>
    </KeyboardAvoidingView>
        

    <Text style={form.status}>Are you a:</Text>
    <ButtonGroup
      buttons={['Student', 'Educator']}
      selectedIndex={selectedIndex}
      onPress={(value) => {
        setSelectedIndex(value);
        if(value == 0){
          setUserType('student');
        } else if(value == 1 ){
          setUserType('instructor');
        }
      }}
      containerStyle={button.container}
    />

    <View style={styles.checkboxContainer}>
      <CheckBox
        center
        checked={check1}
        onPress={() => setCheck1(!check1)}
        style={styles.checkbox}
      />
      <Text style={styles.boxLabel}>By checking, you Agree to our Terms of Use and understand our privacy policy. You may recieve notifications via email.</Text>
    </View>

    <TouchableOpacity style = {register.container} onPress={onSubmitHandler}>
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
    justifyContent: "center"
  },


  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4970FA",
  },

  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  checkbox:{
    alignSelf: 'center'
  },
  boxLabel:{
    margin: 8
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


const button = StyleSheet.create({
  container: {
    textAlign:'center',
    borderRadius:80,
    width: 400,
    underlayColor: "#4970FA"
  }
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

