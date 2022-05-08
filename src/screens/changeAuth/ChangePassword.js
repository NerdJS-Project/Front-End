import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import APIConnection from "../../utility/APIConnection";
import Authentication from "../../utility/Authentication"

export default function ChangePassword({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const [currentPW, getCurrentPW] = useState('');
    const [newPW, getNewPW] = useState('');
    const [confirmPW, getConfirmPW] = useState(''); 

    const [isSecureEntry, setSecureEntry] = useState(true);
    const [isSecureEntry2, setSecureEntry2] = useState(true);
    const [isSecureEntry3, setSecureEntry3] = useState(true);

    const apiConnection = new APIConnection();
    const auth = new Authentication();

    useLayoutEffect(() => {
        if (isFocused) {
        apiConnection.getUserForProfilePage().then((json) => {
            setData(json);
        });
        }
    }, [isFocused]);

    const passwordHelper = () => {
        return (newPW.length < 8); 
      }

    function confirmPasswords(){
        if(confirmPW.match(newPW)){
            return true;
        } else{
            return false; 
        }
        
    }

    async function onSubmit() { 
        if(currentPW === ''){
            alert('need current password to verify');
            return; 
        }
        else if(newPW === ''){
            alert('need new password input to make changes');
            return; 
        }
        
        const currentEmail = data.user_email; 

        if(!confirmPasswords()){
            alert('Passwords do not match. Try again.')
            return; 
        }

        
        //check to see if type password matches with current
        auth.signIn(currentEmail , currentPW).then(() => {
            //if matches, authorize and allow the user to change the email
            AsyncStorage.getItem('@user_info').then((data) => {
                const user = JSON.parse(data);
                if (user && user.token) {
                  apiConnection.changePassword(currentEmail , newPW).then(navigation.goBack());
                }
                else {
                  alert("Incorrect Password. Try again.");
                  AsyncStorage.clear();
                }
              }).catch((reason) => {
                console.log(reason);
              })
        });


    }
    


    return (
        <View style={styles.container}>

            <Text style={styles.title}>Change Password</Text>
            <View style={styles.form}>
                <TextInput 
                        style={styles.inputField}
                        secureTextEntry={isSecureEntry3}
                        mode={'outlined'}     
                        label={'Current Password'}
                        left={<TextInput.Icon name='lock'/>}
                        right={  
                            <TextInput.Icon name="eye"
                            onPress={() => setSecureEntry3(prev => !prev)}
                            />
                        }
                        onChangeText={newText =>getCurrentPW(newText)}
                    />

                <TextInput            
                    style={styles.inputField}
                    mode={'outlined'}   
                    secureTextEntry={isSecureEntry}
                    label={'New Password'}
                    left={<TextInput.Icon name='lock'/>}
                    right={  
                        <TextInput.Icon name="eye"
                          onPress={() => setSecureEntry(prev => !prev)}
                        />
                    }
                    onChangeText={newText =>getNewPW(newText)}
                    />
                <HelperText type='info' visible={passwordHelper()} style={{color:'#000', marginLeft:20}}>
                    Password needs to be at least 8 characters long.
                </HelperText>


                <TextInput            
                    style={styles.inputField}
                    mode={'outlined'}   
                    secureTextEntry={isSecureEntry2}
                    label={'Confirm New Password'}
                    left={<TextInput.Icon name='lock'/>}
                    right={ <TextInput.Icon 
                        name="eye"
                        onPress={() => setSecureEntry2(prev => !prev)}
                      />}
                    onChanged={newText => getConfirmPW(newText)}
                    />
            </View>

            <View style={{marginTop:65}}>
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
        backgroundColor: "#E8EAED",
    },

    form: { 
        marginTop: 20,
    },

    title: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: "#4970FA",
        marginTop: 15,
        marginLeft: 15
    },
    inputField: {
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#fff'
    },

    button: {
        backgroundColor: '#4970FA',
        marginTop: 15,
        marginLeft: 35,
        marginRight:35,
    },

    submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }


});