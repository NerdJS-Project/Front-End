import React, { Children,useState, useContext, useEffect, useLayoutEffect } from 'react';
import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import CourseGridCard from '../../../component/CourseGridCard';
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";



export default function InstructorDashboard({navigation}) {



    

//--------------Copy This Piece Of Code Here------------

  const isFocused = useIsFocused();

    const [data, setData] = useState([]);

    const apiConnection = new APIConnection();
          useLayoutEffect(() => {
            //your code here
            if(isFocused) {
              apiConnection.getClasses().then(json => {
                setData(json);})
            }
            
         },[isFocused]);

 //------------------------------------------


 function onDelete(courseID)
 {
   apiConnection.deleteClass(courseID);
   navigation.goBack();
 }



    function classCardComponent(itemData) {
        function pressHandler() {
            console.log("item data debug:", itemData)
          // navigation.navigate('EditCourseAndModule', {
          //   courseID: itemData.item.class_id,
          //   courseName: itemData.item.class_name
          // });
          navigation.navigate('Instructor CourseView', {
            courseID: itemData.item.class_id,
            courseName: itemData.item.class_name
          });
        }
    
        return (
          <CourseGridCard
            title={itemData.item.class_name}
            color={"#534789"}
            onPress={pressHandler}
            courseID={itemData.item.class_id}
            onDelete={onDelete}
          />
        );
      }
     
      return (
        
  
        <View style={styles.container}>
        <Text style={styles.title}>Courses</Text>


        <FlatList
          data={data}
          keyExtractor={(item) => item.class_id}
          renderItem={classCardComponent}
          numColumns={2}
        />


        <TouchableOpacity 
        style ={styles.bottomContainer}
        onPress={() =>  navigation.navigate('Create Course', { screen:'CreateCourse'})}>
        <View style={addClass.addBttn} >
          <Text style ={addClass.addText}>+</Text>
        </View> 
      </TouchableOpacity>
      




    </View>






  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },

  content: {
    alignItems: "center",

  },

  bottomContainer: {
      flex: 1,
      justifyContent: 'flex-end',

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

  addBttn: {
  alignSelf: 'flex-end',

  justifyContent: 'center',
  alignItems: 'center',
  width:80,
  height:80,
  paddingBottom:5,
  position: "absolute",
    //height: 60,

  borderRadius: 50,
  backgroundColor: '#4970FA',
  color: 'white',
  right: 20,
  bottom:40

  },

  addText: {

    color: 'white',
    fontSize: 50,
    fontWeight: "bold",

  }
}
        
      );

      

//class id 58b0a1f3-acd6-4893-afe4-10ef88ab161f
//user id 5
//mod id 5

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNjQ4ODcyNzc4LCJleHAiOjE2NDg5NTkxNzh9.O2VDmIrA5ZmvrebfYhlQbWyhzPmGlF7OTpgkRzJSfvA