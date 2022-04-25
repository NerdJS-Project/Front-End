import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-paper";
import APIConnection from "../../../utility/APIConnection";

export default function EditPassword({navigation}) {
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
    
            <View style={styles.form}>
                <Text style={styles.formText}>Current Password</Text>
                <TextInput 
                    style={styles.inputField}
                    secureTextEntry={true}
                    placeholder="Current Password" />
         


                <Text style={[styles.formText, {
                    marginTop: 60
                }]}>New Password</Text>
                <TextInput            
                    style={styles.inputField}
                    secureTextEntry={true}
                    placeholder="New Password" />
           

         
                <Text style={styles.formText}>Confirm New Password</Text>
                <TextInput 
                    style={styles.inputField}
                    secureTextEntry={true}
                    placeholder="Confirm New Password" />
            </View>

           <TouchableOpacity style={styles.submitButtom} onPress={() => {}}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity> 
        </View>
    
        
    );

}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    form: { 
        alignItems: 'center',
        marginTop: 20
    },

    inputField: {
  
    },

    formText: {
        fontWeight: 'bold',
        fontSize: 18
    },

    submitButtom: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#4970FA',
        alignItems: 'center',
        marginTop: 10,
        margin: 20
    },

    submitText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});