import { useState } from 'react';
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

import ModuleView from "../component/ModuleView";
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

                    }
                ]
            }],
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

    const [isVisible, setIsVisible] = useState(false);
    const list = [
        {
            title: 'Calculus',
            onPress: () => { setListDataSource(jsonRootData[0].courseContent) }
        },
        { title: 'English' ,
        onPress: () => {setListDataSource(jsonRootData[1].courseContent)}
    },
        {
            title: 'Cancel',
            containerStyle: { backgroundColor: 'red' },
            titleStyle: { color: 'white' },
            onPress: () => setIsVisible(false),
        },
    ];



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

    const expandFalse = (i) => {
        const ar = [...listDataSource];

        if (arr[i]["isExpanded"] == true) {
            arr[i]["isExpanded"] = false;
        }

    }


    return (


        <View style={{ flex: 2, alignItems: 'stretch' }}>


            <SafeAreaView style={{ flex: 1, justifyContent: 'space-between' }}>

                <View style={styles.header} >

                    <Button
                        onPress={() => setIsVisible(true)}
                        icon={<FontAwesome5 size={20}
                            name={'bars'} color={'white'} />}
                    />

 
                </View>

                {/* <addCourse description={'hello'}/> */}

                <View>
                    <Text style={{ color: '#3385ff', textAlign: 'center', fontWeight: '600' }}>hello</Text>

                </View>





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
                    </SafeAreaView>


                </View>




                <BottomSheet modalProps={{}} isVisible={isVisible}>
                    {list.map((l, i) => (
                        <ListItem
                            key={i}
                            containerStyle={l.containerStyle}
                            onPress={l.onPress}
                        >
                            <ListItem.Content>
                                <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))}
                </BottomSheet>

                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => {
                        alert('you pressed home icon');
                    }}>
                        <FontAwesome5 style={styles.homeIcon} size={20} name={'home'} color={'white'} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => {
                        alert('you clicked settings');
                    }}>
                        <Icon style={styles.settingIcon} size={20} name={'settings'} color={'white'} />

                    </TouchableOpacity>

                    <TouchableOpacity onPress={() =>
                        navigation.navigate('ClassSearchScreen')
                        // alert('clicked on profile');
                    }>
                        <FontAwesome5 style={styles.profileIcon} size={20} name={'user'} color={'white'} />
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
    menu: {
        // alignItems:'flex-start',

        alignSelf: 'flex-start',
        justifyContent: 'center'

    },
    header: {
        backgroundColor: '#3385ff',
        alignItems: 'center',
        paddingBottom: 10,
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    footer: {
        backgroundColor: '#3385ff',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'stretch'
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
        backgroundColor: 'gray',
        width: 350,
        height: 350,
        alignSelf: 'center',

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

    },
    settingIcon: {
        alignSelf: 'center'
    },
    profileIcon: {
        alignSelf: 'flex-end'
    }


});

