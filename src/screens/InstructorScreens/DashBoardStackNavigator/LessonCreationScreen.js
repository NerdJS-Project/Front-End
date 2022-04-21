import { useEffect,  useState } from 'react';
import * as React from 'react-native';
import {
    Text, StyleSheet,
    View, TouchableOpacity, SafeAreaView,
    FlatList, TextInput, ScrollView
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements';

import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";



export default function LessonCreation({ navigation, route }) {

  //  const {lesssonID} = route.params;
    const [newLessonName, setLessonName] = useState('');
    const [myData, setMyData] = useState([]);
    const[lessonData, setLessonData] = useState([]);
   
    const {lessonID,instID} = route.params;

  // isFocused tells us whether we are on the screen or not 
    const isFocused = useIsFocused();
    const apiConnection = new APIConnection();
    useEffect(() => {
        if (isFocused) {
            console.log('PASSED IN LessonID '+ lessonID);
            getLessonInfo(lessonID);
           refreshPage()

        }
    }, [isFocused]);

     function refreshPage(){
          apiConnection
        .getSectionsPerLesson(lessonID)
        .then((json) => {
            let d = json;
            setMyData(d);

        });

       
    }


    function getLessonInfo(lesson_id){
        apiConnection.getSingleLessonForLessonCreation(lesson_id)
        .then((json)=>{
            let data = json;
            setLessonData(data)
        })
    }
  


    async function changeName(lessonName, LessonID,lessDescription,lessIndex,modID){
        await apiConnection.putLessonNameForLessonCreation(lessonName, LessonID,lessDescription,
            lessIndex,modID)
    }

    async function addUnit(){
        await apiConnection.addUnitForLessonCreation(lessonID,instID);
        refreshPage()
    }

    async  function deleteUnit(unitID) {
      await  apiConnection.deleteUnit(unitID);
         refreshPage()
        
    }


    return (
          <ScrollView>
        <View style={{ justifyContent: 'center' }}>

            <SafeAreaView style={{ flex: 1,alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 30 }}>
                    {newLessonName}
                </Text>


                <View style={{ flexDirection: 'row', marginTop: 50 }}>

                    <View style={{
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: 2, borderColor: 'black', width: 150
                    }}>
                        <Text style={{ fontWeight: 'bold', color: 'black' }}>
                            Change Lesson Name:
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                        <TextInput multiline maxLength={100} style={{
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

                    <TouchableOpacity style={styles.saveButton} onPress={()=>{
                        changeName(newLessonName, lessonID, lessonData.lesson_descrip,
                            lessonData.lesson_index, lessonData.module_id );   

                            alert('Saved '+ newLessonName + ' as new name')} }>
                            <Text style={{color:'white'}}> Save Name</Text>
                    </TouchableOpacity>
                </View>

                {/* <View style={{width: 200, height: 300}}> */}

 
                
                {/*Displays the list of units*/ }
                    <View>
                
                    <FlatList
                        numColumns={3}

                        data={myData}

                        renderItem={({ item, index }) =>
                               
                            <View style={{
                                flexDirection: "row",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                                
                            }}>

                                    <TouchableOpacity style={styles.buttonContainer}
                                        onPress={() => deleteUnit(item.unit_id)}>
                      
                                             <Icon name="delete" size={30} color="#e33057" />

                                        </TouchableOpacity>
                                <TouchableOpacity style={styles.sectionButton}  onPress={() => {
                                    alert('pressed ' + item.unit_id)
                                }}>
                                    <Text style={styles.sectionText}>
                                        {item.unit_name} 
                                

                                    </Text>

                                </TouchableOpacity>
                               
                                
                                
                            </View>
                               
                            }
                            
                            keyExtractor={(item) => item.unit_id} />
                            
                          </View>

                        {/* Displays the addButton */}            
                     <TouchableOpacity style={styles.addButton} onPress={() =>
                            {     addUnit()  }}>
                   
                        <Text style={styles.addTextButton}>
                            Add unit +
                        </Text>

                     </TouchableOpacity>

                </SafeAreaView>
               




        </View>
                </ScrollView>

    )
}

const styles = StyleSheet.create({
    saveButton:{
        backgroundColor:'#3385ff',
        padding:5,
        borderWidth:2,
        borderColor:'white',
        borderRadius:4,
        marginLeft:15
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
       
    },
    // item: {
    //     backgroundColor: '#f9c2ff',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    sectionText: {
        fontWeight: 'bold',
        justifyContent:'flex-end',
        alignItems:'center',
        flexDirection:'row',
        textAlign:'center'       
    },
    sectionButton: {
        width: 120,
        height: 40,
        color: 'silver',
        backgroundColor: 'aliceblue',
        borderRadius: 5,
        margin: 10,
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: { width: 1, height: 2 }
    },

    addButton: {
        borderRadius: 5,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        backgroundColor: 'aliceblue',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset: { width: 1, height: 2 }
    },

    addTextButton: {

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