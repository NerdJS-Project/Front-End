import React, {useContext } from 'react';
import {SafeAreaView, View, Text, StyleSheet} from "react-native";
import {Button, Divider} from "react-native-paper";
import { AuthContext } from '../../../store/AuthContext'

export default function InstructorSetting({navigation}) {

    const authCtx = useContext(AuthContext);


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Settings</Text>
            <View style={styles.actions}>

                <Button icon="email" 
                mode="contained" 
                style={styles.buttons}
                onPress={() => navigation.navigate('Change Email', {screen: 'ChangeEmail'})}
                >Change Email</Button>

                <Button 
                icon="lock" 
                mode="contained" 
                style={styles.buttons}
                onPress={() => navigation.navigate('Change Password', {screen: 'ChangePassword'})}
                >Change Password</Button>

                <Divider style={{
                    marginTop: 50,
                    marginLeft: 35,
                    marginRight: 35
                }}/>

                <Button 
                icon="door" 
                mode="contained" 
                style={[styles.buttons,{
                    backgroundColor: '#cf3a29',
                    marginTop: 60
                }]}
                onPress={authCtx.logout}
                >Log Out</Button>
                
            </View>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#E8EAED',
        flex: 1
     
    },

    title: { 
        fontSize: 30,
        fontWeight: 'bold',
        color: "#4970FA",
        marginTop: 15,
        alignSelf:'center'

    },

    actions: {
        marginTop: 15
    },

    buttons: {
        marginTop: 15,
        marginLeft: 35,
        marginRight:35,
        backgroundColor: "#4970FA"
    }



    
})