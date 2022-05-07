import { useEffect, useState } from 'react';
import * as React from 'react-native';
import {
    Text, StyleSheet,
    View, TouchableOpacity, SafeAreaView,
    FlatList, TextInput
} from 'react-native';

import { Icon } from 'react-native-elements';

import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";



export default function LessonCreation({ navigation, route }) {

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
        refreshPage()
    }

    async function deleteUnit(unitID) {
        await apiConnection.deleteUnit(unitID);
        refreshPage()

    }


    return (

        <View style={{ marginTop: 50 }}>

            <SafeAreaView style={{ alignSelf: 'center' }} >



                <View style={{ flexDirection: 'row', marginTop: 20 }}>

                    <View style={{
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

            </SafeAreaView>
            {/* Displays the list of units*/}

            <View style={{ marginTop: 10, justifyContent: 'space-between', backgroundColor: '#3385ff' }}>
                <View style={{ height: 435 }}>
                    <FlatList
                        numColumns={2}
                        contentContainerStyle={{ alignItems: 'center' }}
                        style={{ width: '100%' }}
                        data={myData}
                        keyExtractor={(item) => item.unit_id}
                        renderItem={({ item, index }) =>

                            <View style={{
                                flexDirection: "row",
                                marginRight: 2,
                                marginLeft: 2,


                            }}>

                                <TouchableOpacity style={styles.buttonContainer}
                                    onPress={() => deleteUnit(item.unit_id)}>

                                    <Icon name="delete" size={30} color="#e33057" />

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.sectionButton} onPress={() => {
                                    onUnitPress(item.unit_id, item.unit_name)
                                }}>
                                    <Text style={styles.sectionText}>
                                        {item.unit_name}


                                    </Text>

                                </TouchableOpacity>



                            </View>

                        }

                    />

                </View>


                <View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity style={styles.addButton} onPress={() => { addUnit() }}>

                            <Text style={styles.addTextButton}>
                                Add unit +
                            </Text>

                        </TouchableOpacity>

                    </View>





                </View>

            </View>





        </View>


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
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,

    },

    sectionText: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center'
    },
    sectionButton: {
        width: 120,

        height: 60,
        color: 'silver',
        backgroundColor: 'aliceblue',
        borderRadius: 5,
        margin: 10,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: { width: 1, height: 2 }
    },

    addButton: {
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 70,
        backgroundColor: 'aliceblue',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: { width: 1, height: 2 }
    },

    addTextButton: {
        fontWeight: 'bold',
        color: 'blue'
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