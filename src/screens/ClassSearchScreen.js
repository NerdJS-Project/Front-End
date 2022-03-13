import React, { Children, useState } from 'react';
import { View, Text,Alert, StyleSheet ,Button,TextInput, KeyboardAvoidingView, Platform, TouchableOpacity,ScrollView, StatusBar, TouchableWithoutFeedback, Keyboard,} from "react-native";


const Data = [{
    
    "CourseTitle": "Intro To Algebra",
    "Email": "Anna Thomas",
    "CourseDescription": "This course will teach the fundamental of algebra",
    "CourseRating": "4"
  },
 {
    "CourseTitle": "Intermediate Acting",
    "TeacherName": "Bella Cullens",
    "CourseDescription": "This course will teach the fundamental of acting",
    "CourseRating": "5"
  },
 {
    "CourseTitle": "Quantum Physic for Dummies",
    "TeacherName": "Taylor Spaulding",
    "CourseDescription": "This course will teach the fundamental of physic",
    "CourseRating": "4"
  },
   {
    "CourseTitle": "Photoshop 101",
    "TeacherName": "Taylor Clifford",
    "CourseDescription": "This course will teach the fundamental of photoshop",
    "CourseRating": "1"
}]

for(var i = 0; i < Data.length; i++) {
  var obj = Data[i];

  console.log(obj.CourseTitle);
}


export default function ClassSearchScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    
  
    <View style={styles.container}>
      
      <View style = {styles.content}>
       
     
        <TextInput style={search.searchHolder}placeholder={'Enter Class'}   onChangeText={newText => setSearchTerm(newText)}  defaultValue={searchTerm}/>
   
    
        <TouchableOpacity onPress={() => Keyboard.dismiss()} >
          <View style={search.searchBttn} >
            <Text style ={search.searchText}>Search</Text>
          </View> 
        </TouchableOpacity>
        
     


        <Text style={styles.title}> Discover Classes </Text>
        </View>

        <ScrollView contentContainerStyle = {styles.content}>
          {Data.filter((val)=>{
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
            )})}

        </ScrollView>




    </View>






  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  
    
    
   
  
   
    


  },

  content: {

    alignItems: "center"

  },

  


  title: {
    //paddingHorizontal:11,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: 'black',
  
    marginTop:50,
    marginBottom: 50
   //top: 100
  // bottom: 1000
    


  },

  boxes: {

      //padding: 30,
      marginTop:10,
    
      backgroundColor: 'white',
      borderColor: '#C0C0C0',
      borderWidth: 1,
      borderRadius: 10,
      width:300,
      height: 200,
      textAlign: "center",
   
      alignItems: "center"

      

     
     
      
   



      //top: 10,

      

  }




});

const search= StyleSheet.create({


  searchHolder: {
    position:"relative",
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor: 'white',
    borderColor: '#C0C0C0',
    bottom:0,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    marginTop: 100,
    right: 50
    


  },

  searchBttn: {
    width:100,
    position: "absolute",
    //height: 60,
    paddingVertical: 15,
    paddingHorizontal:15,
    borderRadius: 60,
    backgroundColor: '#4970FA',
    //marginTop: 10,
   //top: 10,
    //textAlign: 'center',
    color: 'white',
    //color: 'white',
    alignItems:'center',
    left: 80,
    bottom: 0,


    //bottom: 45
    

  },

  searchText: {
    color: 'white',
    //fontSize: 22,
    fontWeight: "bold",

  }


  
});

