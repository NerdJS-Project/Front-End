import React, { useState, useEffect, Component, useContext } from "react";
import { View, Text,Alert, StyleSheet ,Button,TextInput, KeyboardAvoidingView, Platform, TouchableOpacity,ScrollView, StatusBar, TouchableWithoutFeedback, Keyboard,} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Picker} from '@react-native-picker/picker';
import { Input, Icon, ButtonGroup, Divider } from 'react-native-elements';
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from "../../../utility/APIConnection";

export default function CreateCourse({navigation})  {


  const apiConnection = new APIConnection();


  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const categoryData = ["Mathematic", "Physics", "English", "Computer Science"];
    const [selectedValue, setSelectedValue] = useState('');

    const [selectedCourseTypeIndex, setSelectedCourseTypeIndex] = useState(0);
    const [courseText, setCourseText] = useState(null);
  
    const authCtx = useContext(AuthContext);
    const token = authCtx.token;
    
    function onSaved(courseName, courseDesc) {
      apiConnection.postClass(courseName, courseDesc).then(() => delay(300)).then(json => {
        navigation.push('Instructor Dashboard');
      })
      
      
      
      

  }
  
  function getCategoryPickerItems() {
    let result = []
    for (let i = 0; i < categoryData.length; i++) {
            result.push(
                <Picker.Item key={i}label={categoryData[i]} value={categoryData[i]} />
            )
        }
        return result
      }

    return (
    <View style={styles.container}>
        <Text style={styles.title}> Create Course </Text>
        <Text style={addClass.placeholderText}>Course Name</Text>
        
        <TextInput style={addClass.courseName} value={courseText} onChangeText={(courseText) => setCourseText(courseText)}/>
        
        <ButtonGroup
            containerStyle={{width:300, borderRadius: 15, marginTop:20}}
            selectedButtonStyle={{backgroundColor:'#4970FA'}}
                buttons={['Open', 'Closed']}
                selectedIndex={selectedCourseTypeIndex}
                onPress={(value) => {
                    setSelectedCourseTypeIndex(value);
                }}
            />

    <Text style={addClass.placeholderText}>Category</Text>   
        <Picker
        selectedValue={selectedValue}
        numberOfLines ={1}
        style={{ height: 40, width: 250, marginTop:5}}    
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {getCategoryPickerItems()}
      </Picker>
        
        <View style ={styles.bottomContainer}>

            <TouchableOpacity onPress={() => onSaved(courseText, "this is description")}>

                <View style={addClass.addBttn}>
                    <Text style ={addClass.addText}>Save</Text>
                </View> 
            </TouchableOpacity>
        </View>   
    </View>
  

  
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center", // ignore this - we'll come back to it
      //justifyContent: 'space-around',
     // flexDirection:'column',
      backgroundColor: '#E8EAED',
  
    },
  
    content: {
        flex: 2,
        //alignItems: "center", 
        //justifyContent: "center", 
        flexDirection: "column"
    
  
    },

    bottomContainer: {
        flex: 3,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
        

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
  
    }
  
  
  
  
  });
  
  const addClass = StyleSheet.create({

    courseName: {
        position:'relative',
        justifyContent: 'center',
        //alignItems: 'center',
        paddingHorizontal:10,   //inner text spacing
        backgroundColor: 'white',
        borderColor: '#C0C0C0',
     
        borderWidth: 1,
        borderRadius: 10,
        width: 250,
        height: 40,
        //marginTop:100
      
  
      },
  
    addBttn: {
    alignSelf: 'center',

    justifyContent: 'center',
    alignItems: 'center',

    paddingBottom:5,
    position: "absolute",
    height: 50,
    width: 200,

    borderRadius: 50,
    backgroundColor: '#4970FA',
    color: 'white',
    bottom:50,
    margin:1
  
  
    },
  
    addText: {
 
      color: 'white',
      fontSize: 15,
      fontWeight: "bold",
  
    },

    placeholderText: {
        position:'relative',
        color: 'black',
        fontSize: 15,
        fontWeight: "bold",
        marginBottom:1,
        marginRight:140,
        marginTop:10
        

    }

  });
  
  

