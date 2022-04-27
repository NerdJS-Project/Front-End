import * as React from 'react-native'
import { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";

export default function StudentLessonView({ navigation, route }) {

    const { lessonID, instID, lesson_name/*, lessArr */ } = route.params;
    const isFocused = useIsFocused();
    const [LessonData, setLessonData] = useState([]);


    const apiConnection = new APIConnection();

    useEffect(() => {
        if (isFocused) {
            apiConnection.getSectionsPerLesson(lessonID)
                .then((json) => {
                     //let data = json;
                    //console.log("THIS FIRST JSON: "+ JSON.stringify(json));
                    json.map((item, key) => {
                        
                        // data.forEach(element=>{  
                        apiConnection.getUnitProgress(item.unit_id)
                            .then((result) => {
                                console.log("RESULT" + JSON.stringify(result));

                                var thisOne = false

                                console.log("RESULT.RESULT.LENGTH :" + result.result.length)
                                console.log("RESULT.RESULT[0]: " + JSON.stringify(result.result));

                                if (result.result.length > 0) { thisOne = result.result[0] }
                                console.log("THIS ONE : "+thisOne)
                                if (thisOne === false) { item['completed'] = '2' }
                                else { item['completed'] = '1'}

                                
                            }).then(()=>{  setLessonData(json)})
                          
                        })
                        
                    })

        }


    }, [isFocused]);


    function onUnitPress(unitID)
    {
        navigation.navigate('Student Content View Tab', {
            unitID: unitID
            
          })
    }
  


    console.log("LESSON DATA INDEX ONE:" + JSON.stringify(LessonData[0]))

    return (
        // <View>


        <View style={styles.entireView}>
            <View style={styles.lessonNameContainer}>
                <Text style={styles.lessonName}>{lesson_name}</Text>

            </View>
            <Text style={{ textAlign: 'center', }}> Units</Text>


            <View style={{ alignItems: 'center' }}>

                <FlatList
                    numColumns={3}
                    data={LessonData}
                    keyExtractor={(it) => it.unit_id}

                    renderItem={({ item }) => {

                        return (
                            <View >
                              
                                <TouchableOpacity style={styles.unitTouch} onPress={() => onUnitPress(item.unit_id)}>

                                    <Text adjustsFontSizeToFit numberOfLines={2}  style={styles.unitText}>
                                        {item.completed ? item.completed : "X"}
                                     
                                    </Text>
                                    <Text adjustsFontSizeToFit style={styles.unitText}>
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

        // </View>

    )

}


const styles = StyleSheet.create({
    unit: {
        // height: 50,
        // width: 50,
        flex: 1,
        backgroundColor: 'green',
        flexDirection: "row",
        // flexWrap: "wrap",
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
        // height: 40,
        // width: 40,

        width: 100,
        height: 60,
        backgroundColor: '#00bfff',
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
        // justifyContent: 'flex-end',
        // flexDirection: 'row',
        textAlign: 'center'
    },
    entireView: {
        flex: 1,
        //    justifyContent:'center',
        // alignItems: 'center'

        // justifyContent:'center',
        // alignItems:'center'
    }
})