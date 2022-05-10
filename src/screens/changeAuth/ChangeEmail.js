import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { TextInput, Button} from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import APIConnection from "../../utility/APIConnection";
import Authentication from "../../utility/Authentication"

export default function ChangeEmail({navigation}) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const [currPW, getCurrPW] = useState('');
    const [newEmail, getNewEmail] = useState('');
    const [isSecureEntry, setSecureEntry] = useState(true);    

    const apiConnection = new APIConnection();
    const auth = new Authentication();

    useLayoutEffect(() => {
        if (isFocused) {
        apiConnection.getUserForProfilePage().then((json) => {
            setData(json);
        });
        }
    }, [isFocused]);


    const checkEmail = (newEmail) => {
        if(newEmail.match(mailFormat)){
            return true;
        } else {
            return false;
        }
    }

    async function onSubmit(){

        if(currPW === ''){
            alert('need password to verify');
            return; 
        }

        var emailCheck = checkEmail(newEmail);
        
        if(emailCheck != true){
            alert('Email is not valid. Try again.');
            return; 
        }
        

        //check to see if type password matches with current
        auth.signIn(data.user_email, currPW).then(() => {
            //if matches, authorize and allow the user to change the email
            AsyncStorage.getItem('@user_info').then((data) => {
                const user = JSON.parse(data);
                if (user && user.token) {
                  apiConnection.changeEmail(newEmail, currPW).then(navigation.goBack());
                }
                else {
                  alert("Incorrect Password");
                  AsyncStorage.clear();
                }
              }).catch((reason) => {
                console.log(reason);
              })
        });



    }

    return (
        <View style={styles.container}>
             <Text style={styles.title}>Change Email</Text>
            <View style={styles.form}>
                <TextInput 
                        style={styles.inputField}
                        value={data.user_email} 
                        mode={'outlined'}     
                        label={'Email'}
                        left={<TextInput.Icon name='email'/>}
                        onChangeText={newText => getNewEmail(newText)}
                    />
                <TextInput            
                        style={styles.inputField}
                        mode={'outlined'}   
                        secureTextEntry={isSecureEntry}
                        label={'Password'}
                        left={<TextInput.Icon name='lock'/>}
                        right={  
                            <TextInput.Icon name="eye"
                                onPress={() => setSecureEntry(prev => !prev)}
                            />}
                        onChangeText={newText => getCurrPW(newText)}
                    />
            </View>

            <View style={{marginTop: 45}}>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => onSubmit()}
                >Submit</Button>

                <Button
                    mode="contained"
                    style={[styles.button, {
                        backgroundColor: '#e03a3a'
                    }]}
                    onPress={() => navigation.goBack()}
                >Cancel</Button>
           
            </View>
            
        </View>
    
        
    );

}

const styles = StyleSheet.create ({
    
    
    container: {
        flex: 1,
        backgroundColor: "#E8EAED"
    },

    title: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: "#4970FA",
        marginTop: 15,
        marginLeft: 15
    },

    form: { 
        marginTop: 20,
    },

    inputField: {
        marginTop: 20,
        marginLeft:35,
        marginRight:35,
        backgroundColor:"#fff"
    },
    button: {
        backgroundColor: '#4970FA',
        marginTop: 35,
        marginLeft: 35,
        marginRight:35,
    },

  
});