import { useState } from 'react';
import * as React from 'react-native';
//import React, { Component } from 'react';
//import { render } from 'react-dom';
import {View,Text, StyleSheet,  ScrollView, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback, ScrollViewComponent, TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
//import menuComponent from './component';
//import  {Example} from './component';
//import {Dropdown} from 'react-native-material-dropdown';
//import data from './dashboard.json'

//const data = require('./src/screens/dashboard.json');

// class Example extends Component {
//     render() {
//       let data = [{
//         value: 'Banana',
//       }, {
//         value: 'Mango',
//       }, {
//         value: 'Pear',
//       }];
  
//       return (
//         <Dropdown
//           label='Favorite Fruit'
//           data={data}
//         />
//       );
//     }
//   }
const json=[{
    
  //  "UserCourse1": {
          
          "ID": "2349",
          "Course Title": "Calculus",
          "Lessons": {
              "Lesson 1" : {
                  "Duration": "4 hours",
                  "Completion Status": "True",
                  "Description": "This lecture covers L'Hospital Rule",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
    
              },
              "Lesson 2" : {
                "Duration": "6 hours",
                "Completion Status": "True",
                "Description": "This lecture covers finding the integral",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            "Lesson 3" : {
                "Duration": "2 hours",
                "Completion Status": "True",
                "Description": "This lecture cover L'Hospital Rule",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            "Lesson 4" : {
                "Duration": "5 hours",
                "Completion Status": "True",
                "Description": "This lecture cover right hand rule",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            "Lesson 5" : {
                "Duration": "4 hours",
                "Completion Status": "False",
                "Description": "This lecture cover math theory",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            "Lesson 6" : {
                "Duration": "4 hours",
                "Completion Status": "False",
                "Description": "This lecture cover whatever",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            }
            },
        
     //   },
    
    
    
    
    
       //   "UserCourse2": [{
          
            "ID": "4897",
            "Course Title": "English",
            "Lessons": {
                "Lesson 1" : {
                    "Duration": "4 hours",
                    "Completion Status": "True",
                    "Description": "This lecture covers fictional writing",
                    "VideoContent" : "Youtube.com",
                    "Quiz": "QuizContent"
      
                },
                "Lesson 2" : {
                  "Duration": "6 hours",
                  "Completion Status": "True",
                  "Description": "This lecture covers retorical writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              "Lesson 3" : {
                  "Duration": "2 hours",
                  "Completion Status": "True",
                  "Description": "This lecture cover creative writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              "Lesson 4" : {
                  "Duration": "5 hours",
                  "Completion Status": "True",
                  "Description": "This lecture cover business writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              "Lesson 5" : {
                  "Duration": "4 hours",
                  "Completion Status": "False",
                  "Description": "This lecture cover persuasive writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              "Lesson 6" : {
                  "Duration": "4 hours",
                  "Completion Status": "False",
                  "Description": "This lecture cover whatever",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              }
            }
          
      }]
    
//}]




let newObj =[];

let lesson=[];

function getLesson(){
  

    //Object.keys(json[0].UserCourse1.Lessons).length
   for(let i=0; i < Object.keys(json[0].Lessons).length; i++){
          lesson = json[0].Lessons['Lesson 1'].Description;
         ///let description = json[0].Lessons["Lesson 2"]['Description'];
        // let theKey = json[0].Lessons['Lesson 1'].Description;
        // let lessonLength = Object.keys(json[0].Lessons).length;//json[0].Lessons.length;
         
            newObj.push(
                <ModuleView description={lesson} >
                         </ModuleView>);
    // console.log(lesson);
       // console.log(lesson);
      
    }
    return  newObj;// (json.map((item)=>{
//         <ModuleView description={lesson} key={item.Lessons} >
//             </ModuleView>
// }));
    
}

function Dash ()  {
    
    // {getLesson()}
    
    return(
        
        
        <View style={{flex:2,alignItems:'stretch'}}>
               
                

                    <SafeAreaView style={{flex:1, justifyContent:'space-between' }}>
                        
                        

                            <View style={styles.header} >
                                {/*<View style={styles.menu}>
                                </View> */}

                                    
                                        <TouchableWithoutFeedback>
                                                  
                                                <FontAwesome5 style={styles.menu} size={20} name={'bars'} color={'white'}>
                                                    {/*menuComponent*/}        
                                                </FontAwesome5>
                                            
                                    
                                        </TouchableWithoutFeedback>
                                  
                                

                                {/* <TouchableOpacity onPress={()=>{
                                    alert('you tapped search button');
                                }}>
                                
                                <FontAwesome5 style={styles.searchIcon} size={20}name={'search'} color={'white'} />
                            </TouchableOpacity> */}
                            </View>

                                <View>
                                    <Text style={{color:'#3385ff', textAlign:'center', fontWeight:'600'}}>Unit #</Text>

                                </View>

                                    
                                    {/* <View style={styles.lessonCompletion}>

<Text style={{color:'white',justifyContent:'center',textAlign:'center'}}>
#% completed
</Text>
</View> */}

                            {/* <ScrollView style={{backgroundColor:'green', flexWrap:'wrap'}}> */}
                         
                            

                    

                            <View style={styles.lessContainer}> 

                              
                                     {getLesson()} 
                                    <TouchableOpacity>
                                
                                        {/* Example */}
                                    </TouchableOpacity>
                                        
                               
                                
                            </View> 
                               
                    
                            
                           
                        
                        
                        

                            <View style={styles.footer}>
                                <TouchableOpacity onPress={()=>{
                                    alert('you pressed home icon');
                                }}>
                                    <FontAwesome5 style={styles.homeIcon} size={20} name={'home'} color={'white'}/>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=>{
                                    alert('you clicked settings');
                                }}>
                                  <Icon style={styles.settingIcon} size={20} name={'settings'} color={'white'}/>

                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{
                                    alert('clicked on profile');
                                }}>
                                    <FontAwesome5 style={styles.profileIcon} size={20} name={'user'} color={'white'}/>   
                                </TouchableOpacity>

                            </View>
                      

                    </SafeAreaView>             
                        
            </View>
            
    ); 
    

}


const ModuleView = (props)=>{
   
    return(
    
    <View style={{justifyContent:'space-evenly'}}>

        <View style={{alignItems:'center',justifyContent:'space-between'}}>
           

            <View style={{color:'silver', borderRadius:10,  borderStyle:'solid', borderWidth:5, borderColor:'white', 
            width: 300,height:60, alignItems:'center',justifyContent:'center', flexWrap:'wrap',
            flexGrow:0
        }} >
                
                <Text > Module: {props.description}</Text>

            </View>
                
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    menu:{
       // alignItems:'flex-start',
        
        alignSelf: 'flex-start',
        justifyContent: 'center'
        
    } , 
    header:{
        backgroundColor: '#3385ff',
        alignItems:'center',
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
    footer:{
        backgroundColor:'#3385ff',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingBottom:10,
        paddingTop:10,
        
        justifyContent:'space-between',
        alignItems: 'stretch'
    },
    lesson:{
        backgroundColor: '#3385ff',
        width: 75,
        height: 75,
        borderRadius: 75/2,  
        justifyContent:'space-evenly',
        
        
    },
    lessonCompletion:{
        backgroundColor: '#3385ff',
        width: 75,
        height: 75,
        borderRadius: 75/2,
        alignSelf: 'center',
       // justifyContent:'space-between'
    
    },
    lessContainer:{
        backgroundColor:'gray',
        width: 350,
        height: 350,
        alignSelf:'center',
        
        flexWrap:'wrap',
        flexDirection:'row',
       justifyContent:'space-evenly',

        
    },
    lessonNum:{
        backgroundColor:`#0000ff`,
        marginTop: 50,
        width: 80,
        height: 25,
        borderRadius: 78
    },
    searchIcon:{
        justifyContent: 'center',
       alignSelf: 'flex-end'
      
    },
    homeIcon:{
        alignSelf:'flex-start',
         
    },
    settingIcon:{
        alignSelf:'center'
    },
    profileIcon:{
        alignSelf:'flex-end'
    }


});

export default Dash;
