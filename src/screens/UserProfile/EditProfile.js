import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {TextInput, Avatar, Button, Dialog, Portal, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import APIConnection from "../../utility/APIConnection";

export default function EditProfile({navigation}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const apiConnection = new APIConnection();


    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

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
                navigation.navigate('Profile', {screen: 'Profile'}))
        }
        else if(newBio.length === 0 && newName.length != 0){
            await apiConnection.editUserProfile(newName, data.user_type, data.user_bio, data.user_pp).then(
                navigation.navigate('Profile', {screen: 'Profile'}))
        }
        else if(newBio.length != 0 && newName.length != 0){
            await apiConnection.editUserProfile(newName, data.user_type, newBio, data.user_pp).then(
                navigation.navigate('Profile', {screen: 'Profile'}))
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
                        onPress={showDialog}
                    >Change Avatar</Button>

        
                    
                </View>
            
                <View style={styles.edit}>
                    <TextInput
                        setData={data.user_name}
                        style={styles.textInput}
                        label={'Username'}
                        mode={'outlined'}
                        value={data.user_name}
                        outlineColor={'#000'}
                        activeOutlineColor={'#4970FA'}
                        selectionColor={"#000"}
                        left={<TextInput.Icon name='account'/>}
                        onChangeText={newText => setNewName(newText)}
                    />
                </View>


                <View style={styles.edit}>
                    <TextInput
                        autoCorrect={false}
                        multiline={true}
                        label={'About Me'}
                        mode={'outlined'}
                        value={data.user_bio}
                        outlineColor={'#000'}
                        activeOutlineColor={'#4970FA'}
                        left={<TextInput.Icon name='file-document'/>}
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

                <Provider>            
                    <Portal>
                    <Dialog 
                        visible={visible} 
                        onDismiss={hideDialog}
                        style={{
                            borderRadius: 25,
                            backgroundColor: '#fff',
                            color:'#000'
                        }}
                    >
                            <Dialog.Title style={{color:'#000'}}>Change Avatar</Dialog.Title>
                            <Dialog.Content>
                                <Button>Choose from Library</Button>
                                <Button>Open Camera</Button>
                            </Dialog.Content>
                            <Dialog.Actions>
                            <Button onPress={hideDialog}>Cancel</Button>
                            </Dialog.Actions>
                        </Dialog>
                    </Portal>
                </Provider>

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
        backgroundColor: "#4970FA",
        color:'white'
    }
    
});