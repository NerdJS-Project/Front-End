import React, { useState, useContext, useEffect } from 'react';

import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import CourseGridCard from '../../../component/CourseGridCard';
import { AuthContext } from '../../../store/AuthContext';



export default function InstructorDashboard({navigation}) {

    const authCtx = useContext(AuthContext);
    const token = authCtx.token;



    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getClasses = async () => {
        try {
         const response = await fetch('http://localhost:3001/api/class/findByUser/'+2, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'token': token,
            },
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
        getClasses();
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