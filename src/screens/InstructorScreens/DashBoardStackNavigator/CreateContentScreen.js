import React, { Children,useState,useCallback, useContext, useEffect, useLayoutEffect } from 'react';
import { View,Linking,Text,ScrollView, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import CourseGridCard from '../../../component/CourseGridCard';
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Video, AVPlaybackStatus } from 'expo-av';
import { WebView } from 'react-native-webview';
import ReactPlayer from "react-player";
import YoutubePlayer from 'react-native-youtube-iframe';










//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQ5OTAwNzczLCJleHAiOjE2NDk5ODcxNzN9.O0Gv4EoiOBSEqf8iBLOgq0DbiIGQrHd9qQvyJyH7IkM

export default function CreateContent() {
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    const [isLoading, setLoading] = useState(true);
    const [text,setText] = useState();
    const [textItems, setTextItems] =useState();
    const [data, setData] = useState([]);

    const video = React.useRef(null);







    const getContent = async () => {
        try {
        const response = await fetch('http://localhost:3001/api/unit/findByLesson/25', {
            headers: {
                'accept': 'application/json'
            }
        });
        const json = await response.json();
        setData(json);

    } catch (error) {
        console.error(error);
        authCtx.logout
   

    } finally {
        setLoading(false);
    }


    }

    useEffect(() => {
        getContent();
    }, []);






    function textInput(){
        if (Platform.OS === 'web') {
            return <div><ReactPlayer
      url="https://youtu.be/cBxyB788_5w"/></div>;
    } else {
        return <WebView
        style={{ maxHeight:360, width:360}}
        javaScriptEnabled={true}
        source={{uri: 'https://www.youtube.com/embed/cBxyB788_5w'}}
/>

    }

    }







      return (

        
        
        <View style={styles.container}>


        <Text style={styles.title}>Create Content</Text>



        <View style={styles.content}>
            {textInput()}
            










  



            

 
            
  
  

            

        </View>


 


        <View style ={styles.bottomContainer}>
        <TouchableOpacity >
        <View style={addClass.addURL} >
          <Text style ={addClass.textStyle}>Add Video</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity >
        <View style={addClass.addText} >
          <Text style ={addClass.textStyle}>Add Text</Text>
        </View> 
      </TouchableOpacity>

      <TouchableOpacity >
        <View style={addClass.addQuiz} >
          <Text style ={addClass.textStyle}>Add Quiz</Text>
        </View> 
      </TouchableOpacity>

      </View>
      




    </View>







  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',


  },

  content: {
    flex:3,
    alignSelf: 'center',
      
    justifyContent: 'center',
    alignItems: 'center',
   
   
    
    


    

  },


  bottomContainer: {
      flex:1,
      //flexDirection:'column',
      justifyContent: 'flex-end',
      //alignItems:'stretch',
 
       // position:'relative',
        //flexWrap:'wrap',

      //marginVertical: 500,
      //marginTop:350,

 
  
      backgroundColor: 'white'

  },

  


  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
    marginTop:50,
    marginBottom: 50

  },

  boxes: {
      marginTop:10,
      backgroundColor: 'white',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      borderRadius: 10,
      width:300,
      height: 200,
      textAlign: "center",
      alignItems: "center"

  },

  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },




});

const addClass = StyleSheet.create({

  addText: {
  alignSelf: 'center',

  justifyContent: 'center',
  alignItems: 'center',
  width:150,
  height:50,
  paddingBottom:5,
  position: "absolute",
    //height: 60,

  borderRadius: 10,
  backgroundColor: '#4970FA',
  color: 'white',
  //right: 20,
  bottom:40

  },
  addURL: {
    alignSelf: 'flex-start',
  
    justifyContent: 'center',
    alignItems: 'center',
    width:150,
    height:50,
    paddingBottom:5,
    position: "absolute",
      //height: 60,
  
    borderRadius: 10,
    backgroundColor: '#4970FA',
    color: 'white',
    //right: 20,
    bottom:40
  
    },

    addQuiz: {
        alignSelf: 'flex-end',
      
        justifyContent: 'center',
        alignItems: 'center',
        width:150,
        height:50,
        paddingBottom:5,
        position: "absolute",
          //height: 60,
      
        borderRadius: 10,
        backgroundColor: '#4970FA',
        color: 'white',
        //right: 20,
        bottom:40
      
        },

        searchHolder: {
            
            
            
            position:'relative',
            paddingVertical: 15,
            paddingHorizontal:15,
            backgroundColor: 'white',
            borderColor: '#C0C0C0',
            //bottom:100,
            borderWidth: 1,
            borderRadius: 60,
            width: 250,
            
            //justifyContent:'space-between'
            marginTop: 25,

            
            //right: 0,
          

            
        
        
          },

  textStyle: {

    color: 'white',
    fontSize: 20,
    fontWeight: "bold",

  }
}
        
      );

      

//class id 58b0a1f3-acd6-4893-afe4-10ef88ab161f
//user id 5
//mod id 5

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQ4ODcyNzc4LCJleHAiOjE2NDg5NTkxNzh9.O2VDmIrA5ZmvrebfYhlQbWyhzPmGlF7OTpgkRzJSfvA