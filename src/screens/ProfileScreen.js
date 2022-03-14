import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Dash (navigation) {

    return(
        <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>     
            <View
                style = {{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    alignContent: 'center'
                }}
            ></View>
                <Text style={styles.user}>John Doe</Text>
                <Text style={styles.email}>jdoe@gmail.com</Text>
            <View
                style = {{
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    alignContent: 'center'
                }}
            ></View>
                <Text style = {styles.title}>Progression</Text>
                <View style={styles.rectangle}></View>



                <Text style = {styles.title}>About</Text>
                <View style={styles.rectangle}></View>



                <View style={foot.container}>
                    <FontAwesome5 style={foot.settingIcon} size={20} name={'snowflake'} color={'white'}/>
                    <FontAwesome5 style={foot.homeIcon} size={20} name={'home'} color={'white'}/>
                    <FontAwesome5 style={foot.profileIcon} size={20} name={'user'} color={'white'}/>  
                </View>
        </View>             
       
            
       

    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4970FA',
        flex: 1,
        color: 'white'
    },

    title: {
        textAlign:'center',
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    user: {
        alignContent:screenLeft,
        padding: 20,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    email: {
        alignContent:screenLeft,
        padding: 20,
        color: 'white',
        fontSize: 16,
        top:100
    },
    rectangle: {
        height: 200,
        width: 450,
        backgroundColor: '#000',
        alignItems:'center',
        borderRadius: 10,
        margin: 20,
        opacity: 0.2,
        paddingVertical: 15, 
        paddingHorizontal: 15,
    },

    footer:{
        backgroundColor:'#4970FA',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingBottom:10,
        paddingTop:10,
        justifyContent:'space-between',
        alignItems: 'stretch'
    },
    homeIcon:{
        alignSelf:'flex-start',
         
    },
    settingIcon:{
        alignSelf:'center'
    },
    profileIcon:{
        alignSelf:'flex-end'
    }
});

const foot = StyleSheet.create({
    container:{
        backgroundColor:'#4970FA',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingBottom:10,
        paddingTop:10,
        justifyContent:'space-between',
        bottom:10,
        position: 'relative',
        margin:40
    },
    homeIcon:{
        alignSelf:'flex-start',
         
    },
    settingIcon:{
        alignSelf:'center'
    },
    profileIcon:{
        alignSelf:'flex-end'
    }
});