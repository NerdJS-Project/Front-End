import { useEffect, useState } from 'react';
import * as React from 'react-native'
import { Text, View, Button, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";
import { Badge } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function StudentLessonView({ navigation, route }) {

    const { lessonID, instID, lesson_name/*, lessArr */ } = route.params;
    const isFocused = useIsFocused();
    const [LessonData, setLessonData] = useState([]);
    const [dummy, setDummy] = useState(true);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


    const apiConnection = new APIConnection();




    useEffect(() => {
        if (isFocused) 
        {
            fetchData();
        }

        async function fetchData()
        {
            let json = await apiConnection.getSectionsPerLesson(lessonID);
            for (let i = 0; i < json.length; i++)
            {
         //  json.forEach((item) => {
             let item = json[i];
                let result = await apiConnection.getUnitProgress(item.unit_id);
                if(result.result.length >0){
                    json[i]['completed'] =1;
                
                }
                else{
                   json[i]['completed']  = 0;
                
                }
                // setLessonData(json)
                
                //  }
            }
            setLessonData(json);

        }

   
    }, [isFocused]);


    function debugDummy()
    {
        setDummy(!dummy);
    }
    


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
            {/* <Text style={{ textAlign: 'center', }}> Units</Text> */}


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
                                    <Text >
                                        {item.completed ===1 ? <Icon style={{borderRadius:15, padding:2,backgroundColor:'green'}} color={'white'} name={"check"} size={12} />: 
                                        <FontAwesome5Icon style={{borderRadius:15, padding:2, paddingLeft:4, paddingRight:4, backgroundColor:'red'}} color={'white'} size={12} name={'times'} />}
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
        backgroundColor: 'white'/*#00bfff'*/,
        borderRadius: 5,
        borderColor: '#00bfff'/*'black'*/,
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
        backgroundColor:'#d3d3d3'
        //    justifyContent:'center',
        // alignItems: 'center'

        // justifyContent:'center',
        // alignItems:'center'
    }
})