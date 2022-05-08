import { useIsFocused } from "@react-navigation/native";
import React, { Children, useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import APIConnection from "../../../utility/APIConnection";

export default function ClassSearchScreenTest() {
 //-------------------API Fetch code-------------------------

 const isFocused = useIsFocused();

 const [data, setData] = useState([]);

 const apiConnection = new APIConnection();


 //--------------------------------------------

 function searchAPI(keyword) {
   if (keyword == "") {
     alert('Enter class name');
   }
   else {
     apiConnection.getSearchClassResultSearchScreen(keyword).then((json) => {
       console.log("Class search debug " + json);

       setData(json);
     });
   }
 }
 function onCoursePress(course_id, course_name, course_descrip, instructor_name) {
   navigation.navigate("Dashboard",
     {
       screen: 'Course Description',
       params: {
         class_id: course_id,
         class_name: course_name,
         class_descrip: course_descrip,
         instructor_name: instructor_name
       }
     })

 }

 const [searchTerm, setSearchTerm] = useState("");

 return (
   <View style={styles.container}>
     <View style={styles.content}>
       <TextInput
         style={search.searchHolder}
         placeholder={"Enter Class"}
         onChangeText={(newText) => setSearchTerm(newText)}
         defaultValue={searchTerm}
       />

       <View >
         <TouchableOpacity style={search.searchBttn}onPress={() => searchAPI(searchTerm)}>
           <Text style={search.searchText}>Search</Text>
         </TouchableOpacity>
       </View>

       <Text style={styles.title}> Discover Classes </Text>
     </View>

     <ScrollView style={{ backgroundColor: '#4970FA' }} contentContainerStyle={styles.content}>
       {/* { {Data.filter((val)=>{
           if (searchTerm == "") {
             return val
           } else if (val.CourseTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
             return val
           } 
           
         }).map((item,key) => {
           return (
           <TouchableOpacity key={key}> 
             <Text style = {styles.boxes}>
               {item.CourseTitle}
             </Text>
           </TouchableOpacity>
           )})} }  */}

       {data.length > 0 && data.map((item, key) => {
         return (
           // <TouchableOpacity key={key}
           // onPress={() => onCoursePress(item.class_id, item.class_name, item.class_descrip, item.instructor_name)}
           // >

           //   <Text style={styles.boxes}>
           //     {'Class Name: '+item.class_name +'\n' +
           //     '--------------------'+'\n'+
           //     'Class description: '+ item.class_descrip +'\n'+ 
           //     '--------------------'+'\n'+
           //     'instructor: '+ item.instructor_name + '\n' + "the end of this "}
           //   </Text>

           // </TouchableOpacity>
           <Card key={item.class_id} style={styles.gridItem} >
             <TouchableOpacity onPress={() => onCoursePress(item.class_id, item.class_name, item.class_descrip, item.instructor_name)}>

             <Card.Cover style={{height:'50%'}} source={{uri: 'https://picsum.photos/700' }}/>
               <Card.Content  adjustsFontSizeToFit>
             

                 <Text  style={{textAlign:'center',fontSize:16}}adjustsFontSizeToFit>
                   { item.class_name +'\n' +
                     'instructor: ' + item.instructor_name}
                 </Text>

               </Card.Content>

             </TouchableOpacity>
   

           </Card>
         );
       })}
     </ScrollView>
   </View>
 );
}
const styles = StyleSheet.create({
 gridItem: {
   flex: 1,
   margin: 16,
   width: '65%',
   height: 150,
   borderRadius: 8,
   elevation: 4,
   backgroundColor: 'white',
   color: 'white',
   shadowColor: 'black',
   shadowOpacity: 0.25,
   shadowOffset: { width: 0, height: 2 },
   shadowRadius: 8,
   overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
 },
 container: {
   flex: 1,
   backgroundColor: "#E8EAED",
 },

 content: {
    alignItems: "center",

 },

 title: {

   textAlign: "center",
   fontSize: 30,
   fontWeight: "bold",
   color: "black",
   marginTop: 50,
   marginBottom: 50,

 },

 boxes: {
   //padding: 30,
   marginTop: 10,
   fontWeight: 'bold',
   backgroundColor: "white",
   borderColor: "#C0C0C0",
   borderWidth: 1,
   borderRadius: 10,
   width: 300,
   height: 200,
   textAlign: "center",

   alignItems: "center",

   //top: 10,
 },
});

const search = StyleSheet.create({
 searchHolder: {
   position: "relative",
   paddingVertical: 15,
   paddingHorizontal: 15,
   backgroundColor: "white",
   borderColor: "#C0C0C0",
   bottom: 0,
   borderWidth: 1,
   borderRadius: 60,
   width: 250,
   marginTop: 100,
   right: 50,
 },

 searchBttn: {
   width: 100,
   position: "absolute",
   paddingVertical: 15,
   paddingHorizontal: 15,
   borderRadius: 60,
   backgroundColor: "#4970FA",
   color: "white",
   alignItems: "center",
   left: 80,
   bottom: 0,

 },

 searchText: {
   color: "white",
   fontWeight: "bold",
 },
});