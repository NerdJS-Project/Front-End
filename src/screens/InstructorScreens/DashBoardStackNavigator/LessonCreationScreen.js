import { useEffect, useState } from 'react';
import * as React from 'react-native';
import {
    Text, StyleSheet,
    View, TouchableOpacity, 
    FlatList, TextInput, ScrollView
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';

import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";
import UnitEditCard from '../../../component/UnitCardInstructor';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function LessonCreation({ navigation, route }) {

    //  const {lesssonID} = route.params;
    const [newLessonName, setLessonName] = useState('');
    const [myData, setMyData] = useState([]);
    const [lessonData, setLessonData] = useState([]);

    const { lessonID, lessonName } = route.params;

    // isFocused tells us whether we are on the screen or not 
    const isFocused = useIsFocused();
    const apiConnection = new APIConnection();
    useEffect(() => {
        if (isFocused) {
            console.log('PASSED IN LessonID ' + lessonID);
            getLessonInfo(lessonID);
            refreshPage()

        }
    }, [isFocused]);

    function refreshPage() {
        apiConnection
            .getSectionsPerLesson(lessonID)
            .then((json) => {
                let d = json;
                setMyData(d);

            });


    }


    function getLessonInfo(lesson_id) {
        apiConnection.getSingleLessonForLessonCreation(lesson_id)
            .then((json) => {
                let data = json;
                setLessonData(data)
            })
    }

    function onUnitPress(unitID, unitName) {
        navigation.navigate('Content Edit', {
            unitID: unitID,
            unitName: unitName,

        })
    }


    async function changeName(lessonName, LessonID, lessDescription, lessIndex, modID) {
        await apiConnection.putLessonNameForLessonCreation(lessonName, LessonID, lessDescription,
            lessIndex, modID)
    }

    async function addUnit() {
        await apiConnection.addUnitForLessonCreation(lessonID);
        refreshPage();
    }

    async function deleteUnit(unitID) {
        await apiConnection.deleteUnit(unitID);
        refreshPage();

    }


    return (
        //   <View style={{flex:2}}>
        <View>
            <View style={{ justifyContent: 'center',alignItems: 'center' }}>
                {/* <ScrollView> */}
                <Text style={{ fontSize: 20 }}>
                    {newLessonName}
                </Text>


                <View style={{ flexDirection: 'row', marginTop: 50 }}>

                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 2, borderColor: 'black', width: 100,
                        height: 40,
                    }}>
                        <Text style={{ textAlign: 'center', fontSize: 13, fontWeight: 'bold', color: 'black' }}>
                            Change Lesson Name:
                        </Text>
                    </View>

                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TextInput defaultValue={lessonName} maxLength={100} style={{
                            backgroundColor: 'silver', borderWidth: 2,
                            borderColor: 'black', borderRadius: 5, width: 175, height: 40
                        }}
                            onChangeText={(newText) => {
                                setLessonName(newText);

                            }} />


                    </View>

                    {/* {console.log('LESSON_DESCRIPTION: '+ lessonData.lesson_descrip + 
                            "\n LESSON_INDEX : " + lessonData.lesson_index + 
                            " \n LESSON_MODULE_ID: " + lessonData.module_id
                            + "\n Instructor_ID " + instID)}  */}

                    <TouchableOpacity style={styles.saveButton} onPress={() => {
                        if (newLessonName != '') {
                            changeName(newLessonName, lessonID, lessonData.lesson_descrip,
                                lessonData.lesson_index, lessonData.module_id);
                            alert('Saved ' + newLessonName + ' as new name')
                        }
                        else { alert('No name was entered') }
                    }}>
                        <Text style={{ color: 'white' }}> Save Name</Text>
                    </TouchableOpacity>
                </View>


                {/* Displays the list of units*/}


                    {myData.length >= 1 ?
                        <FlatList
                           nestedScrollEnabled
                            ListEmptyComponent={
                                <Text>This lesson doesn't have any content, please click the add button</Text>
                            }
                          

                            numColumns={2}

                            data={myData}
                            keyExtractor={(item) => item.unit_id}
                            //  contentContainerStyle={{flexGrow:2}}
                            renderItem={({ item, index }) =>
                    
                                <UnitEditCard
                                    unitName={item.unit_name}
                                    unitID={item.unit_id}
                                    onPress={onUnitPress}
                                    onDelete={deleteUnit}

                                ></UnitEditCard>
             


                            }

                        /> : <Text>No content</Text>}

                    <View>

                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>



                        </View>




                        {/* Displays the addButton */}


                    </View>




                {/* </View> */}





                {/* </ScrollView> */}
            </View>
  
     
                        <TouchableOpacity style={styles.addButton} onPress={() => { addUnit() }}>
                            <Text style={styles.addTextButton}>+</Text>
                            </TouchableOpacity>
                       
                           
            
        </View>
        /* // </View> */

    )
}

const styles = StyleSheet.create({
    saveButton: {
        backgroundColor: '#3385ff',
        height: 40,
        padding: 5,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 4,
        marginLeft: 15
    },
    cardContainer: {
        padding: 10

    },

    bottomContainer: {
        justifyContent: 'flex-end',
        //margin:1,
       
    },
    // item: {
    //     backgroundColor: '#f9c2ff',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    sectionText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center'
    },
    deleteButton: {

    },

    addButton: {
        alignSelf: 'flex-end',
        textAlign: 'center',
        flex:1,

        backgroundColor: '#4970FA',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: { width: 1, height: 2 },
        alignSelf: 'center',

        justifyContent: 'center',
        alignItems: 'center',
        width:80,
        height:80,
        paddingBottom:5,
        

        position: "absolute",

        //top:540,
        right: 20,
        bottom:40,
        borderRadius:50,

          //height: 60,
      


    },

    addTextButton: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 40,

    },
    homeIcon: {
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    settingIcon: {
        alignSelf: 'center'
    },
    profileIcon: {
        alignSelf: 'flex-end',
        marginRight: 10
    },
    footer: {
        backgroundColor: '#3385ff',
        justifyContent: 'flex-end',
        width: 300,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})