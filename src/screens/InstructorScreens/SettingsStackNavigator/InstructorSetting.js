import React, { useState, useContext } from 'react';

import { ScrollView, View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";


export default function InstructorSetting({}) {
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.account}>
                <Text style={styles.title}>Edit Account</Text>
                
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffffff',
        flex: 1
     
    },

    title: { 
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 15,
        marginLeft: 15
    },

    account: {
        marginTop: 10
    }



    
})