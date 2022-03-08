import { useState } from 'react';
import * as React from 'react-native';
import { Component } from 'react';
//import { render } from 'react-dom';
import {View,Text, StyleSheet, LayoutAnimation, UIManager, Platform,  ScrollView, SafeAreaView, 
    TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import ModuleView from "../component/ModuleView";
 import Example from "../component/dashboardMenu";
 import Course from '../component/course';

 import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';

const json=[
    {
    
    
          isExpanded:false,
          "ID": "2349",
          Course_Title: "Calculus",
          Lessons: [
              {
                  id:1,
                  "Duration": "4 hours",
                  "Completion Status": "True",
                  Description: "This lecture covers L'Hospital Rule",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
    
              },
               {
                id:2,
                "Duration": "6 hours",
                "Completion Status": "True",
                Description: "This lecture covers finding the integral",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            {
                id:3,
                "Duration": "2 hours",
                "Completion Status": "True",
                Description: "This lecture cover L'Hospital Rule",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            {
                id:4,
                "Duration": "5 hours",
                "Completion Status": "True",
                Description: "This lecture cover right hand rule",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
             {
                id:5,
                "Duration": "4 hours",
                "Completion Status": "False",
                Description: "This lecture cover math theory",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
             {
                id:6,
                "Duration": "4 hours",
                "Completion Status": "False",
                Description: "This lecture cover whatever",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            }
        ]
    },
    
         {
          
            "ID": "4897",
            Course_Title: "English",
            Lessons: [
                {
                    id:7,
                    
                    "Duration": "4 hours",
                    "Completion Status": "True",
                    Description: "This lecture covers fictional writing",
                    "VideoContent" : "Youtube.com",
                    "Quiz": "QuizContent"
      
                },
                 {
                    id:8,
                  "Duration": "6 hours",
                  "Completion Status": "True",
                  Description: "This lecture covers retorical writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              {
                id:9,
                  "Duration": "2 hours",
                  "Completion Status": "True",
                  Description: "This lecture cover creative writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              {
                id:10,
                  "Duration": "5 hours",
                  "Completion Status": "True",
                  Description: "This lecture cover business writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
               {
                id:11,
                  "Duration": "4 hours",
                  "Completion Status": "False",
                  Description: "This lecture cover persuasive writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              },
              {
                  id:12,
                  "Duration": "4 hours",
                  "Completion Status": "False",
                  Description: "This lecture cover whatever",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
      
              }
            ]
          
      }
    
    ]
    
//}]




let newObj =[];

let lesson=[];

let index = 0;

// function getLesson(){
  

//     //Object.keys(json[0].UserCourse1.Lessons).length
//    for(let i=0; i < json[0].UserCourse1.Lessons.length; i++){
//       // let a= json[0].UserCourse1.Lessons[1];
//   lesson= json[0].UserCourse1.Lessons[i].Description;
//         index = i; 
         
//             newObj.push(
//                 <ModuleView description={lesson} >
//                          </ModuleView>);
//           //console.log(a);
//      //console.log(lesson);
//     //  newObj = json.map((item)=>{
//     //     console.log(item.UserCourse1.Lessons[index].Description);
//     //     <ModuleView description={item.UserCourse1.Lessons[index].Description} item={item.UserCourse1.Lessons[index].Description} key={item.UserCourse1.Lessons[index].Description} >
//     //         </ModuleView>
//     //    })
//         //console.log(json[0].UserCourse1.Lessons.length);
         
//         console.log(newObj[0]);
// }

// return  newObj;
   
// }

export default function Dash ({navigation})  {
    const [listDataSource, setListDataSource] = useState(json)
    // {getLesson()}
    
    

    if(Platform.OS == "android"){
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const updateLayout = (index) =>{
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        const array = [...listDataSource];

        array[index]["isExpanded"] =!array[index]["isExpanded"];

        setListDataSource(array);
    };

    const expandFalse = (i)=>{
        const ar = [...listDataSource];

        if(arr[i]["isExpanded"] == true){
            arr[i]["isExpanded"] = false;
        }
     
    }


    return(
        
        
        <View style={{flex:2,alignItems:'stretch'}}>
               
                
                    <SafeAreaView style={{flex:1, justifyContent:'space-between' }}>
                        
                            <View style={styles.header} >

              
                                    <Example  >
                                    
     
                                </Example> 

                               
                                {/*<View style={styles.menu}>
                                </View> */}

                                    
                                       {/* <menuComponent> */}
                                    

                                      

                                      {/*  <TouchableOpacity>

                                       
                                        
                                                <FontAwesome5 style={styles.menu} size={20} 
                                                name={'bars'} color={'white'}>
                                                                                                    
       
                                                </FontAwesome5>
                                               
                                                
                                             
                                         </TouchableOpacity> */}
                                      {/* // </menuComponent> */}
                                  
                                

                                {/* <TouchableOpacity onPress={()=>{
                                    alert('you tapped search button');
                                }}>
                                
                                <FontAwesome5 style={styles.searchIcon} size={20}name={'search'} color={'white'} />
                            </TouchableOpacity> */}
                            </View>

                               {/* <addCourse description={'hello'}/> */}

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
                                    
                                     {/* {getLesson()}  */}
                                    <SafeAreaView style={{ flex: 1 }}>
                                        <View style={styles.container}>
                                            <View style={{ flexDirection: "row", padding: 10 }}>
                                            {/* <ModuleView >{item.Description}</ModuleView> */}
                                            {/* {json.map((item) =>(
                                                
                                             <Text style={styles.titleText}> {item.Course_Title}</Text>
                                            ))} */}
                                            
                                            <TouchableOpacity
                                                onPress={() => setMultiSelect(!multiSelect)}
                                            ></TouchableOpacity>
                                            </View>
                                            <ScrollView>
                                            {json.map((item, key) => (
                                                <ModuleView
                                                key={item.Course_Title}
                                                onClickFunction={() => {
                                                    updateLayout(key);
                                                }}
                                                item={item}
                                                />
                                            ))}
                                            </ScrollView>
                                        </View>
                                    </SafeAreaView>
  
  
                            </View> 
                               
                    
                            {/* <View style={{justifyContent:'center'}}>
                                <TouchableOpacity onPress={()=>{
                                    alert('clicked on edit');
                                }}>

                                    <View style={styles.lesson}>
                                        <AntDesign name={'edit'} size={30} color={'white'}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                         */}
                        
                        

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

                                <TouchableOpacity onPress={()=>
                                    navigation.navigate('ClassSearchScreen')
                                    // alert('clicked on profile');
                                }>
                                    <FontAwesome5 style={styles.profileIcon} size={20} name={'user'} color={'white'}/>   
                                </TouchableOpacity>

                            </View>
                      

                    </SafeAreaView>             
                        
            </View>
            
    ); 
    

}




const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: "bold",
      },
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
        alignItems:'center',
        flexDirection:'row',
       justifyContent:'center',
       
        
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
        
        alignContent:'center',
       justifyContent:'space-evenly'

        
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

