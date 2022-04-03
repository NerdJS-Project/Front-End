import React, { useState, useContext, useEffect } from 'react';

import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import CourseGridCard from '../../../component/CourseGridCard';
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';



export default function InstructorDashboard({navigation}) {

    const [data, setData] = useState([]);

    const apiConnection = new APIConnection();


     useEffect(() => {
       apiConnection.getClasses().then(json => {
        setData(json);

       })


      }, []);


    function classCardComponent(itemData) {
        function pressHandler() {
            console.log("item data debug:", itemData)
          navigation.navigate('EditCourseAndModule', {
            courseID: itemData.item.class_id,
            courseName: itemData.item.class_name
          });
        }
    
        return (
          <CourseGridCard
            title={itemData.item.class_name}
            color={"#534789"}
            onPress={pressHandler}
          />
        );
      }
     
      return (
        <FlatList
          data={data}
          keyExtractor={(item) => item.class_id}
          renderItem={classCardComponent}
          numColumns={2}
        />
      );



}