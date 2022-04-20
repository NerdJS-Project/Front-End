import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet,TextInput,KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import { ButtonGroup, CheckBox } from 'react-native-elements';


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



    const payload = {
        user_name,
        user_email,
        user_password,
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
                alert("Account created!");
                navigation.navigate('LogIn');
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
      <Text style ={styles.title}>Register</Text>
      <Text style ={[styles.title, {
        fontSize:14,
        fontWeight: 'normal',
        color: '#000',
        marginVertical: 10
      }]}>Enter the following information to create an account.</Text>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={form.account} > 
        <TextInput style={form.input}placeholder={'Name'} onChangeText={newText => setName(newText)}/>
        <TextInput style={form.input}placeholder={'Email'} onChangeText={newText => setEmail(newText)}/>
        <TextInput 
          secureTextEntry={true} 
          type={passwordEye === false ? "password" : "text"}
          style={form.input}placeholder={'Password'} 
          onChangeText={newText => setPassword(newText)}
        />
        <TextInput secureTextEntry={true} style={form.input} placeholder={'Confirm Password'}/>
      </KeyboardAvoidingView>
          

     <View style={button.container}>
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
          containerStyle={button.selector}
      />
     </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          center
          checked={check1}
          onPress={() => setCheck1(!check1)}
          style={styles.checkbox}
        />
        <Text style={styles.boxLabel}>By checking, you Agree to our Terms of Use and understand our privacy policy. You may recieve notifications via email.</Text>
      </View>

      <TouchableOpacity disabled={!check1}  onPress={onSubmitHandler}>
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
  },


  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4970FA",
    marginLeft: 15
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
    alignItems: 'left',
    marginTop:25
  },
  
  input: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:30,
    borderWidth: 1,
    borderRadius: 20,
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
    alignItems: 'center'
  },
  
  selector: {
    textAlign:'center',
    borderRadius:80,
    width: 400,

  }
})

const register = StyleSheet.create ({
  container: {
    marginTop: 10
  },
  registerButton: {

    paddingVertical: 15, 
    paddingHorizontal: 15, 
    borderRadius: 10,
    backgroundColor: '#4970FA',
    color: 'white',
    alignItems:'center',
  },

  registerText: {
    color: 'white', 
    fontWeight: "bold"
  }
})

