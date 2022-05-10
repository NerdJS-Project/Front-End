import { useEffect, useState } from 'react';
import * as React from 'react-native'
import { Text, View, Button, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";
import { Icon } from 'react-native-elements';
import { ActivityIndicator } from 'react-native-paper';


export default function StudentLessonView({ navigation, route }) {

    const { lessonID, instID, lesson_name } = route.params;
    const isFocused = useIsFocused();
    const [LessonData, setLessonData] = useState([]);
    const [dummy, setDummy] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const apiConnection = new APIConnection();




    useEffect(() => {

        if (isFocused) {
            setIsLoading(true);

            fetchData();
        }

        async function fetchData() {
            let json = await apiConnection.getSectionsPerLesson(lessonID);
            for (let i = 0; i < json.length; i++) {

                let item = json[i];
                let result = await apiConnection.getUnitProgress(item.unit_id);
                if (result.result.length > 0) {
                    json[i]['completed'] = 1;

                }
                else {
                    json[i]['completed'] = 0;

                }

            }
            setLessonData(json);
            setIsLoading(false);


        }


    }, [isFocused]);


    function debugDummy() {
        setDummy(!dummy);
    }



    function onUnitPress(unitID) {
        navigation.navigate('Student Content View Tab', {
            unitID: unitID

        })
    }



    console.log("LESSON DATA INDEX ONE:" + JSON.stringify(LessonData[0]))

    return (

        <View style={styles.entireView}>

                    <View style={styles.lessonNameContainer}>
                        <Text style={styles.lessonName}>{lesson_name}</Text>

                    </View>

                    <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>

                        <FlatList
                            numColumns={3}
                            data={LessonData}
                            keyExtractor={(it) => it.unit_id}
                            contentContainerStyle={{ alignItems: 'center' }}
                            style={{ width: '100%' }}
                            renderItem={({ item }) => {

                                return (
                                    <View >

                                        <TouchableOpacity style={styles.unitTouch} onPress={() => onUnitPress(item.unit_id)}>

                                            <Text adjustsFontSizeToFit numberOfLines={2} style={styles.unitText}>
                                                <Text >
                                                    {item.completed === 1 ? <Icon style={{ borderRadius: 15, padding: 2, backgroundColor: 'green' }} color={'white'} name={"check"} size={12} /> :
                                                        null}
                                                </Text>



                                                {item.unit_name}

                                            </Text>



                                        </TouchableOpacity>
                                    </View>

                                )

                            }

                            }

                        />
                    </View>



                </View>


    )

}


const styles = StyleSheet.create({
    unit: {

        flex: 1,
        backgroundColor: 'green',
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: 'center',
        alignItems: 'center'
    },
    lessonName: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        paddingRight: 30,
        paddingLeft: 30,
    },
    lessonNameContainer: {
        justifyContent: 'center',
        backgroundColor: '#00bfff',
        height: 60
    },

    unitTouch: {

        width: 100,
        height: 60,
        backgroundColor: '#f0f8ff',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 2,
        margin: 10,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: { width: 1, height: 2 }
    },
    unitText: {

        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

        textAlign: 'center'
    },
    entireView: {
        flex: 1,
        backgroundColor: '#3385ff'
    }
})