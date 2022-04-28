import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button} from "react-native-paper";
import APIConnection from "../../../utility/APIConnection";

export default function ChangeEmail({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);

    const [currPW, getCurrPW] = useState('');
    const [newEmail, getNewEmail] = useState('');

    const apiConnection = new APIConnection();

    useLayoutEffect(() => {
        if (isFocused) {
        apiConnection.getUserForProfilePage().then((json) => {
            setData(json);
        });
        }
    }, [isFocused]);

    async function onSubmit(){
        let accessGranted = false; 



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
                    onChangeText={newText => getNewEmail(newText)}
                />
         
                <TextInput            
                    style={styles.inputField}
                    mode={'outlined'}   
                    secureTextEntry={true}
                    label={'Password'}
                    onChangeText={newText => getCurrPW(newText)}
                     />
            </View>


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
    
        
    );

}

const styles = StyleSheet.create ({
    
    
    container: {
        flex: 1,
        backgroundColor: "#fff"
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
        flex: 1,
        marginTop: 30,
        marginLeft:35,
        marginRight:35
    },

    formText: {
        fontWeight: 'bold',
        fontSize: 18
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