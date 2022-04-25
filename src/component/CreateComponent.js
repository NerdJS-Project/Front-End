import React, { Children,useState,useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { View,Pressable,Modal,Text,ScrollView, Alert, StyleSheet, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';
import { AuthContext } from '../store/AuthContext';
import { Button } from 'react-native-paper';





const Content = (props) => {
        
    return (
        

        

        <View style={styles.container}>
     

     
    
            <Text selectable={true} style={styles.textStyle}>
           {props.text}
            </Text>




        




        </View>



    );


}

const styles = StyleSheet.create({
    container: {
      //  flex:1,
       // alignItems:'stretch',
    
        //margin:5,
       //borderWidth:1,
       borderColor: '#C0C0C0',
      
    
    
      },
      textStyle: {
        //  flex:1,
        fontSize: 16,
        fontWeight: "bold",
        marginHorizontal:5,
        marginBottom:10,

        
    
      },
      textHolder: {
        flex:1,
        fontSize: 16,
        fontWeight: "bold",
        minWidth: Dimensions.get('window').width -20,
        //paddingBottom:100,
        //maxHeight: 800,

      

  
 
       
        //minWidth:Dimensions.get('window').width-15,
      
  

      
    
      },




});


export default Content;
