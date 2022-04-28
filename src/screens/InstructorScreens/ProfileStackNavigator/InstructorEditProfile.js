import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {TextInput, Avatar, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import APIConnection from "../../../utility//APIConnection";

export default function InstructorProfile({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const apiConnection = new APIConnection();


    useLayoutEffect(() => {
        if (isFocused) {
            apiConnection.getUserForProfilePage().then((json) => {
                setData(json);
            });
        }
    }, [isFocused]);
    

    const [newName, setNewName] = useState('');
    const [newBio, setNewBio] = useState('');


    //check to see if there are any changes and pass it on to edit the account 
    async function onSubmit(){
        if(newName.length === 0 && newBio.length != 0){
            await apiConnection.editUserProfile(data.user_name, data.user_type, newBio, data.user_pp).then(
                navigation.navigate('Profile', {screen: 'InstructorProfile'}))
            alert("New Bio..." + newBio)
        }
        else if(newBio.length === 0 && newName.length != 0){
            await apiConnection.editUserProfile(newName, data.user_type, data.user_bio, data.user_pp).then(
                navigation.navigate('Profile', {screen: 'InstructorProfile'}))
        }
        else if(newBio.length != 0 && newName.length != 0){
            await apiConnection.editUserProfile(newName, data.user_type, newBio, data.user_pp).then(
                navigation.navigate('Profile', {screen: 'InstructorProfile'}))
        }
        else if(newBio.length === 0 && newName.length === 0){
            alert("Nothing has changed...");
        }    
    };

    return (
        <View style={styles.container}>
            {/*Avatar Icon change*/}
            <View style={{alignItems: 'center', marginTop: 15}}>
                <Avatar.Image 
                    size={80} 
                    source={data.user_pp || require('./icons/defaultAvatar.png')} 
                    style={{backgroundColor: '#fff'}}
                />
                
                
                <Button 
                    icon="account-circle-outline" 
                    mode="contained" 
                    style={styles.avatarButton}
                    onPress={() => console.log('hello') }
                >Change Avatar</Button>
                {/*<TouchableOpacity onPress={() => {}}>
                    <View style={styles.profileIcon}>
                        <ImageBackground
                            source={data.user_img || require('./icons/defaultAvatar.png')}
                            style={{height:80, width:80}}
                            imageStyle={{borderRadius:15}}
                        >
                            <View style={{
                                flex: 1, 
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icon name="camera" size ={35} color="#fff" style={{
                                    opacity: 0.7,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderWidth: 1,
                                    borderColor: '#fff',
                                    borderRadius: 10,
                                }}/>
                            </View>
                        </ImageBackground>
                    </View>
                            </TouchableOpacity>



                <Text
                    style={{
                        marginTop: 5,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >
                {data.user_name || "<user_name>"}</Text>*/}
            </View>
        
            <View style={styles.edit}>
                <Icon name="user" size={30} style={{marginTop:20}}/>
                <TextInput
                    setData={data.user_name}
                    style={styles.textInput}
                    label={'Username'}
                    mode={'outlined'}
                    value={data.user_name}
                    onChangeText={newText => setNewName(newText)}
                />
            </View>
            {/*
            <View style={styles.edit}>
                <Icon name="mail" size={40}/>
                <TextInput
                    placeholder={data.user_email}
                    autoCorrect={false}
                    style={styles.textInput}
                />
                </View>


            <TouchableOpacity onPress={() => navigation.navigate('Edit Password', {screen: 'EditPassword'})}>
                <View style={styles.edit}>
                    <Icon name="lock" size={31} style={{marginTop:20}}/>
                    <TextInput
                        placeholder={'*******'}
                        autoCorrect={false}
                        secureTextEntry={true}
                        editable={false}
                        label={'Password'}
                        style={styles.textInput}
                    />
                </View>
            </TouchableOpacity>*/}

            <View style={styles.edit}>
                <Icon name="filetext1" size={30} style={{marginTop: 30}}/>
                <TextInput
                    autoCorrect={false}
                    multiline={true}
                    label={'About Me'}
                    mode={'outlined'}
                    value={data.user_bio}
                    onChangeText={newText => setNewBio(newText)}
                    editable={true}
                    style={[styles.textInput, {
                        height: 150,
                    }]}
                />
            </View>
            
            <TouchableOpacity style={styles.submitButtom} onPress={() => onSubmit()}>
                <Text style={styles.submitText}>Save</Text>
            </TouchableOpacity>

        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1
    },

    profileIcon: {
        height: 100,
        width: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },

    edit: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight:10,
        padding: 20,
        
    },

    textInput: {
        flex: 1,
        backgroundColor:'#fff',
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
    },

    avatarButton: {
        marginTop: 15,
        marginLeft: 45,
        marginRight:45,
        backgroundColor: "#4970FA"
    }
    
});