import React, { Children,useState,useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { View,Pressable,Modal,Text,ScrollView, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';
import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';




const Content = (props) => {


   
    
    return (
        

        <View style={styles.container}>
            <Text>
           {props.text}
            </Text>


        </View>



    );


}

const styles = StyleSheet.create({
    container: {
       // marginBottom:5,
       // margin:5
      
    
    
      },



});


export default Content;