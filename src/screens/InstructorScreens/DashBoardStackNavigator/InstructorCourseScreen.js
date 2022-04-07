import { useEffect, useState,useContext } from 'react';
import * as React from 'react-native';
import { BottomSheet, Button, ListItem } from 'react-native-elements';

import { Component } from 'react';
//import { render } from 'react-dom';
import {
    View, Text, StyleSheet, LayoutAnimation, UIManager, Platform, ScrollView, SafeAreaView,
    TouchableOpacity
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import {AuthContext} from '../store/AuthContext';
import ModuleView from "../../../component/ModuleView"
//  import Course from '../component/course';


const jsonRootData = [
    {
        courseName: "Calculus",
        courseContent:
            [{



                isExpanded: false,
                "ID": "2249",
                Course_Title: "Module 1: Calculus",
                Lessons: [
                    {
                        id: 1,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 2,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral and ",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 3,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 4,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 5,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 6,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    }

                ]
            },
            {


                isExpanded: false,
                "ID": "2347",
                Course_Title: "Module 2: Calculus",
                Lessons: [
                    {
                        id: 1,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 2,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 3,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 4,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 5,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 6,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    }
                ]
            }],
    },
    {
    courseName: "Art",
    courseContent:
        [{



            isExpanded: false,
            "ID": "2249",
            Course_Title: "Module 1: Art drawing",
            Lessons: [
                {
                    id: 1,
                    "Duration": "4 hours",
                    "Completion Status": "True",
                    Description: "drawing shapes",
                    "VideoContent": "Youtube.com",
                    "Quiz": "QuizContent"

                }
            ]
        }
    ]

    },

    {
        courseName: "English",
        courseContent:
            [{



                isExpanded: false,
                "ID": "2349",
                Course_Title: "Module 1: English",
                Lessons: [
                    {
                        id: 1,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 2,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    }
                ]
            },
            {


                isExpanded: false,
                "ID": "2347",
                Course_Title: "Module 2: English",
                Lessons: [
                    {
                        id: 1,
                        "Duration": "4 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers L'Hospital Rule",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    },
                    {
                        id: 2,
                        "Duration": "6 hours",
                        "Completion Status": "True",
                        Description: "This lecture covers finding the integral",
                        "VideoContent": "Youtube.com",
                        "Quiz": "QuizContent"

                    }
                ]
            }],
    }


]



export default function Dash({ navigation }) {
    const [listDataSource, setListDataSource] = useState(jsonRootData[0].courseContent)
    const [courseTitle,setCourseTitle] = useState(jsonRootData[0].courseName)
    console.log(courseTitle);
    const [isVisible, setIsVisible] = useState(false);

    // const authCtx = useContext(AuthContext);
    // const token = authCtx.token;
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    //idea for looping throug classes in datanbase
    // for(let i = 0; i < data[i].length;i++)
    /* { 
        list[i].push({
            title: 
        })
    }*/
    
    const list = [
        {
            title: 'Calculus',
            classStyles:{ backgroundColor:'#00bfff'},
            titleStyle:{fontWeight:500},
            containerStyle: {color:'white', backgroundColor: '#3385ff', borderColor:'white',borderWidth:1 },
            onPress: () => { {setListDataSource(jsonRootData[0].courseContent)} {setCourseTitle(jsonRootData[0].courseName)}},
        
        },
        { title: 'English' ,
        classStyles:{ backgroundColor:'#00bfff'},
        containerStyle: { backgroundColor: '#3385ff', borderColor:'white',borderWidth:1 },
        titleStyle:{color:'white',fontWeight:500},
        onPress: () => {{setListDataSource(jsonRootData[2].courseContent)} {setCourseTitle(jsonRootData[2].courseName)} },
        
        },
        {

            title:'Art',
            classStyles:{ backgroundColor:'#00bfff'},
            containerStyle: { backgroundColor: '#3385ff', borderColor:'white',borderWidth:1 },
            titleStyle:{color:'white',fontWeight:500},
            onPress:()=> { {setListDataSource(jsonRootData[1].courseContent)} {setCourseTitle(jsonRootData[1].courseName)} },
        },
     
    
    {
        title: '+',
        justifyContent:'center',
        styleAdd:{ backgroundColor:'blue', borderColor:'white', borderWidth:1, borderStyle:'solid',
        },
        containerStyle: { backgroundColor: '#3385ff' },
        titleStyle:{ color:'white',fontWeight:500},
        onPress:()=>{{navigation.navigate('ClassSearchScreen')} {setIsVisible(false)}},
    },
        {
            title: 'Close',
            containerStyle: { backgroundColor: 'red', borderColor:'white',borderWidth:1 },
            titleStyle: { color: 'white',fontWeight:500 },
            onPress: () => setIsVisible(false),
        },
    ];

    // fetch()

    if (Platform.OS == "android") {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    //this is used to signified the component is abou tto be animated (like setState())
    //could be used to define animation property
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        const array = [...listDataSource];

        array[index]["isExpanded"] = !array[index]["isExpanded"];

        setListDataSource(array);
    };

    // const expandFalse = (i) => {
    //     const ar = [...listDataSource];

    //     if (arr[i]["isExpanded"] == true) {
    //         arr[i]["isExpanded"] = false;
    //     }

    // }

    // const getClasses = async ()=>{
    //     try{
    //         const response = await fetch('http://localhost:3001/api/class/findByUser/'+10, {
    //             method: 'GET',
    //             headers:{
    //                 Accept:'application/json',
    //                 'Content-Type': 'application/json',
    //                  'token': token,
    //             },
    //         });
    //         const json = await response.json();
    //         console.log(token);
    //         setData(json);
    //     } catch (error){
    //         console.log(error);
    //         authCtx.logout
    //     } finally{
    //         setLoading(false);
    //     }
    // }

    // useEffect(() =>{
    //     getClasses();
    // },[]);

    
   // console.log(data);
    
    return (
      
        <View // onLayout={(event)=>{
         //   var{x,y,width,Viewheight} = event.nativeEvent.layout}} 
            style={{ flex: 2, alignItems: 'stretch' }}>
            

       
            <SafeAreaView style={{flex:1}}>

                <View style={styles.header} >

                        <TouchableOpacity style={{ justifyContent:'space-between', backgroundColor: '#00000000',}}
                        onPress={() => setIsVisible(true)}>

                    
                        <FontAwesome5 size={20}
                            name={'bars'} color={'white'} />
                            </TouchableOpacity>

                 </View>


                <View style={styles.courseTitleBackground}>
                
                    <Text style={{ fontSize: 25, color: 'white', textAlign: 'center', fontWeight: '600' }}>
                        {courseTitle}
                   </Text>
                

                </View>


           
                
              {/* <View onLayout={(event)=>{
            var{x,y,width,Viewheight} = event.nativeEvent.layout; cheight =Viewheight}} > */}
                     <ScrollView >
                <View style={styles.lessContainer}>

                    {/* {getLesson()}  */}
                    {/* <SafeAreaView style={{ }}> */}
                        
                        <View style={styles.container}>
                            <View style={{ flexDirection: "row", padding: 10 }}>
                                

                                <TouchableOpacity
                                    onPress={() => setMultiSelect(!multiSelect)}
                                ></TouchableOpacity>
                            </View>
                            <ScrollView>
                                {listDataSource.map((item, key) => (
                                    <ModuleView
                                        key={key}
                                        onClickFunction={() => {
                                            updateLayout(key);
                                        }}
                                        item={item}
                                    />
                                ))}
                            </ScrollView>
                        </View>
                    {/* </SafeAreaView> */}

                </View>
                
                    </ScrollView>
                  
                    <TouchableOpacity style={styles.editButton} onPress={()=> navigation.navigate('EditCourseAndModule')}>
                  
                  <FontAwesome5 name={'edit'} color={'white'} size={20}/>

           
                 </TouchableOpacity>
                    {/* </View> */}
             
            
              


            </SafeAreaView>
            <BottomSheet  style={{borderRadius: 100,marginTop:90,width:140}} modalProps={{}}isVisible={isVisible}>
                <ScrollView  style={{height:170}}>
                
                    {list.map((l, i) => (
                        <ListItem
                        key={i}
                        // style={l.classStyles}
                          containerStyle={l.containerStyle}
                        
                        onPress={l.onPress}
                        >
                            <ListItem.Content style={{justifyContent:'center',alignItems:'center'}} >
                            
                            <ListItem.Title  style={l.titleStyle}>{l.title}</ListItem.Title>
                            
                            </ListItem.Content>
                        </ListItem>
                    ))}
                        {/* <ListItem style={{backgroundColor:'red'}}>
                            <ListItem.Content style={{ height: 5, justifyContent:'center', alignItems:'center'}}>
                                
                                <ListItem.Title onPress={()=>setIsVisible(false)}style={{color:'white'}}>close</ListItem.Title>
                            </ListItem.Content>
                        </ListItem> */}
                    </ScrollView>
                </BottomSheet>
               
        </View>
       
    );


}




const styles = StyleSheet.create({
    courseTitleBackground:{
        backgroundColor:'#00bfff',
        padding:20
    },
    editButton: { 
        marginLeft:900,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#3385ff' ,
        width:50,
        height:50,
        borderRadius:50/2

    }, 
    titleStyle:{
        color:'white'
    },
    container: {
        flex: 1,
        // borderWidth: 3,
        // borderColor:'black',
        width: 350,
        
       
    },
    titleText: {
        flex: 1,
        fontSize: 22,
        fontWeight: "bold",
    },
    menu: {
        // alignItems:'flex-start',

        alignSelf: 'flex-start',
        justifyContent: 'center'

    },
    header: {
        backgroundColor: '#3385ff',
        alignItems: 'center',
        padding:10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
   
    lesson: {
        backgroundColor: '#3385ff',
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',


    },
    lessonCompletion: {
        backgroundColor: '#3385ff',
        width: 75,
        height: 75,
        borderRadius: 75 / 2,
        alignSelf: 'center',
        // justifyContent:'space-between'

    },
    lessContainer: {
        // backgroundColor: 'gray',
        // shadowColor:'#171717',
        // shadowOffset: {width: -2, height: 4},
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        flex:20,
        marginTop:10,
        width:350,
     
        alignSelf: 'center',
        // borderColor:'#3385ff',
        // borderWidth:3,
        // borderRadius:20,
        flexWrap: 'wrap',
        flexDirection: 'row',

        alignContent: 'center',
        justifyContent: 'space-evenly'


    },
    lessonNum: {
        backgroundColor: `#0000ff`,
        marginTop: 50,
        width: 80,
        height: 25,
        borderRadius: 78
    },
    searchIcon: {
        justifyContent: 'center',
        alignSelf: 'flex-end'

    },
    homeIcon: {
        alignSelf: 'flex-start',
        marginLeft:5

    },
    settingIcon: {
        alignSelf: 'center'
    },
    profileIcon: {
        alignSelf: 'flex-end',
        marginRight:5
    }


});

