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

export default function InstructorProfile({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const [classData, setClassData] = useState([]);
    const apiConnection = new APIConnection();


    const [newName, setNewName] = useState('');

    useLayoutEffect(() => {
        if (isFocused) {
            apiConnection.getUserForProfilePage().then((json) => {
                setData(json);
            });
        }
    }, [isFocused]);




    //check to see if there are any changes and pass it on to edit the account 
    async function onSubmit(){
        alert("Saving data...");
        await apiConnection.editUserProfile(newName, data.user_type);
        navigation.navigate('Profile', {Screen: 'Profile'});
    };

    return (
        <View style={styles.container}>
            {/*Avatar Icon change*/}
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity onPress={() => {}}>
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
                {data.user_name || "<user_name>"}</Text>
            </View>
        
            <View style={styles.edit}>
                <Icon name="user" size={40}/>
                <TextInput
                    placeholder={data.user_name}
                    autoCorrect={false}
                    style={styles.textInput}
                    onChangeText={newText => setNewName(newText)}    
                />
            </View>

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
                    <Icon name="lock" size={41}/>
                    <TextInput
                        placeholder={'*******'}
                        autoCorrect={false}
                        secureTextEntry={true}
                        editable={false}
                        style={styles.textInput}
                    />
                </View>
            </TouchableOpacity>

            <View style={styles.edit}>
                <Icon name="filetext1" size={40} style={{alignItems:'center'}}/>
                <TextInput
                    placeholder={data.user_bio || "About Me"}
                    autoCorrect={false}
                    multiline={true}
                    style={[styles.textInput, {
                        height: 150,
                        borderWidth: 2,
                        borderColor: '#C0C0C0',
                        borderRadius: 10
                    }]}
                />
            </View>
            
            <TouchableOpacity style={styles.submitButtom} onPress={() => onSubmit()}>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>

        </View>
        
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
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
        paddingLeft: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 60,
        borderWidth:2,
        borderColor:'#C0C0C0'
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