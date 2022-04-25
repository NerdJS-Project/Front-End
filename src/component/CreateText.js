import React, { Children,useState,useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { View,Pressable,Modal,Text,ScrollView, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';
import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';
import { AuthContext } from '../store/AuthContext';




const TextContent = (props) => {
    
    //const [height, setHeight] = useState(42);

 

   
    
    return (
        

        

        <View style={styles.container}>
     

     


            <Text style={styles.textStyle}>
        {props.TextInput}
         </Text>



        </View>



    );


}

const styles = StyleSheet.create({
    container: {
       // flex:1,
        alignItems:'stretch',
       // marginBottom:5,
       // margin:5
       //borderWidth:1,
       borderColor: '#C0C0C0',
      
    
    
      },
      textStyle: {
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal:5,
        marginTop:25,
        
    
      },
      textHolder: {
        flex:2,
        fontSize: 16,
        fontWeight: "bold",
        minWidth: Dimensions.get('window').width -20,

   
        
        //paddingBottom:100,
        //maxHeight: 800,

      

  
 
       
        //minWidth:Dimensions.get('window').width-15,
      
  

      
    
      }



});


export default TextContent;
