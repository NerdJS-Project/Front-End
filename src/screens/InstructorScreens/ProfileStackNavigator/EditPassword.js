import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import APIConnection from "../../../utility/APIConnection";

export default function EditPassword({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const [classData, setClassData] = useState([]);
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
        paddingVertical: 15,
        paddingHorizontal:15,
        backgroundColor: 'white',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        borderRadius: 60,
        width: 250,
        margin: 10
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