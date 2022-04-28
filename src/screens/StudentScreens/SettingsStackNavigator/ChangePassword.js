import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import APIConnection from "../../../utility/APIConnection";

export default function ChangePassword({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);

    const [currentPW, getCurrentPW] = useState('');
    const [newPW, getNewPW] = useState('');

    const apiConnection = new APIConnection();

    useLayoutEffect(() => {
        if (isFocused) {
        apiConnection.getUserForProfilePage().then((json) => {
            setData(json);
        });
        }
    }, [isFocused]);


    return (
        <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.form}>
            <TextInput 
                style={styles.inputField}
                value={data.user_email} 
                secureTextEntry={true}
                mode={'outlined'}     
                label={'Current Password'}
            />
     
            <TextInput            
                style={styles.inputField}
                mode={'outlined'}   
                secureTextEntry={true}
                label={'New Password'}
                 />

            <TextInput            
                style={styles.inputField}
                mode={'outlined'}   
                secureTextEntry={true}
                label={'Confirm New Password'}
                 />
        </View>


        <Button
            mode="contained"
            style={styles.button}
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
        marginLeft:30,
        marginRight:30
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