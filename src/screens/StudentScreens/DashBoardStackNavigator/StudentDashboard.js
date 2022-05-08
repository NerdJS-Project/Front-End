import React, { useState,  useLayoutEffect } from 'react';
import { View, Text, StyleSheet,  FlatList } from "react-native";
import StudentCourseGridCard from '../../../component/StudentCourseGridCard';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";



export default function StudentDashboard({navigation}) {


//--------------Copy This Piece Of Code Here------------

  const isFocused = useIsFocused();

    const [data, setData] = useState([]);

    const apiConnection = new APIConnection();
          useLayoutEffect(() => {
            //your code here
            if(isFocused) {
            
              refresh();
            
            }
         },[isFocused]);


 function refresh(){
  apiConnection.getClasses().then(json => {
    setData(json)})
   
 }

 //------------------------------------------
    function classCardComponent(itemData) {
        function pressHandler() {
            console.log("item data debug:", itemData)
    
          navigation.navigate('Student Course View', {
            classId: itemData.item.class_id,
            className: itemData.item.class_name
          });
        }
    console.log("ITEMDATA: " + itemData.item.class_id)
        return (
          <StudentCourseGridCard
            classID ={itemData.item.class_id}
            title={itemData.item.class_name}
            // color={"#534789"}
            onPress={pressHandler}
            refresh ={refresh}
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

      
