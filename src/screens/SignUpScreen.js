import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet,KeyboardAvoidingView, Platform, TouchableOpacity} from "react-native";
import { ButtonGroup, CheckBox } from 'react-native-elements';
import { TextInput, Button} from "react-native-paper";

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

      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            label={'Name'} 
            mode={'outlined'}
            outlineColor={'#4970FA'}
            onChangeText={newText => setName(newText)}
          />

        <TextInput 
            style={styles.input}
            label={'Email'} 
            mode={'outlined'}
            outlineColor={'#4970FA'}
            onChangeText={newText => setEmail(newText)}
          />

        <TextInput 
          secureTextEntry={true} 
          type={passwordEye === false ? "password" : "text"}
          style={styles.input}
          label={'Password'} 
          mode={'outlined'}
          outlineColor={'#4970FA'}
          onChangeText={newText => setPassword(newText)}
        />
        <TextInput 
          secureTextEntry={true} 
          type={passwordEye === false ? "password" : "text"}
          style={styles.input}
          label={'Confirm Password'} 
          mode={'outlined'}
          outlineColor={'#4970FA'}
        />
    


      <Text style={styles.status}>Are you a:</Text>
        <ButtonGroup
          buttons={['Student', 'Educator']}
          selectedIndex={selectedIndex}
          buttonContainerStyle={{backgroundColor: '#4970FA'}}
          onPress={(value) => {
            setSelectedIndex(value);
            if(value == 0){
              setUserType('student');
            } else if(value == 1 ){
              setUserType('instructor');
            }
          }}
          containerStyle={styles.selector}
          textStyle={{color:'#fff'}}
      />


        <View style={styles.checkbox}>
          <CheckBox
            color={'#4970FA'}
            checked={check1}
            onPress={() => setCheck1(!check1)}
            style={styles.check}
          />
          <Text style={styles.boxLabel}>By checking, you Agree to our Terms of Use and understand our privacy policy. 
              You may recieve notifications via email.</Text>
        </View>

        <Button 
          mode="contained" 
          onPress={onSubmitHandler} 
          contentStyle={{
            height:50,
          }}
          color={'#4970FA'}
          disabled={!check1}
          style={{
            marginTop:15
          }}
        >
          Create Account
        </Button>
        
        

      </View>
      {/*
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.form}> 

        <TextInput 
          style={styles.input}
          label={'Name'} 
          mode={'outlined'}
          onChangeText={newText => setName(newText)}
        />

        <TextInput 
          style={form.input}
          label={'Email'} 
          mode={'outlined'}
          onChangeText={newText => setEmail(newText)}
        />
      
        
        <TextInput 
          secureTextEntry={true} 
          type={passwordEye === false ? "password" : "text"}
          style={form.input}
          label={'Password'} 
          mode={'outlined'}
          onChangeText={newText => setPassword(newText)}
        />


        <TextInput 
          secureTextEntry={true} 
          style={form.input} 
          mode={'outlined'}
          label={'Confirm Password'}
        />
      </KeyboardAvoidingView>
          

     <View style={button.container}>
      <Text style={styles.status}>Are you a:</Text>
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
        */ }
    </View>



  );
}
const styles = StyleSheet.create({
  container: {
    //alignSelf: 'stretch',
    flex: 1,
    backgroundColor: '#fff',
  },


  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4970FA",
    marginLeft: 15
  },

  form: {
    marginLeft: 20,
    marginRight: 20
  },

  input: {
    marginTop: 20
  },

  status: {
    fontWeight:"bold",
    textAlign:"center",
    marginTop: 20
  },

  selector: {
  
  },
  
  checkbox: {
    flexDirection: 'row',
    marginTop: 10
  },

  check: {

  },

  boxLabel: {
    
  },

  

})

