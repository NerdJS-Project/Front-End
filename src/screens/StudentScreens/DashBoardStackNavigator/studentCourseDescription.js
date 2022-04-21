import * as React from 'react-native';
import { NavigationHelpersContext, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import APIConnection from "../../../utility/APIConnection";
import { Avatar } from "react-native-elements";
import {Text, View,TouchableOpacity, StyleSheet, SafeAreaView,ScrollView} from 'react-native';

export default function CourseDescriptionScreen({ navigation,route}){
    
    const {class_descrip,class_id,class_name} =route.params;

    const [classID, setClassID] = ('');
    const isFocused = useIsFocused();
    const apiConnection = new APIConnection();
    useEffect(() => {
        if (isFocused) {
            apiConnection.signUpForClass(class_id)
            .then((json)=>{
                let data = json;
            });

        }
    }, [isFocused]);

    // function getCourseDescription(){

    // }


    return(
        
        
        <View style={{flex:1,backgroundColor:'#3385ff', 
        justifyContent:'center',  alignItems:'center'}}>
            <SafeAreaView>

                {/* White card container View */}
            <View style={styles.card }>
                        {/* View container for avatar and instructor name  */}
                <View style={{flexDirection:'column', marginLeft: 20, marginTop: 40, maxWidth:90, height: 120}}>

                <Avatar
                rounded
                size={90}
                containerStyle={styles.shadowOverlay}
                source={ require('./icons/profile.png')}
                /> 
                    <Text> Instructor Name is Albert and I will be teaching you </Text>
                </View>
                

                   
                <View style={{flex:1,flexGrow: 1,flexDirection:'column', height:240}}>

                    <View style={{height: 180,marginTop:40, 
                    marginBottom:10, marginLeft: 30}}>

                    <Text  style={styles.courseDescript}>Course Description</Text>


                <ScrollView>
                           
                    <View >

                        <Text style={{fontSize:14, fontWeight:'normal'}}> {/*A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.

    Paragraphs can contain many different kinds of information. A paragraph could contain a series of brief examples or a single long illustration of a general point. It might describe a place, character, or */} {class_descrip}
    </Text>
                    </View>
                            </ScrollView>
                       
                </View>
                     
                   
                    {/* *button so student can enroll in a specific course */}
                    <View style ={{marginLeft: 40,
                            marginTop:5, flexDirection:'column'}}>
                    <TouchableOpacity style ={styles.enroll} onPress={()=>{{navigation.navigate('CourseView'),{
                        class_id:class_id,
                        class_name: class_name
                    }};
                    alert('Enrolled accepted')}}>
                            <Text style={styles.text}>
                                Enroll
                            </Text>
                        </TouchableOpacity>
                        </View>
                </View>
            </View>
                 
        
        </SafeAreaView>
        </View>
    )


}


const styles = StyleSheet.create({
    card:{
        width: 450, 
        height: 300, 
        borderRadius: 40,
        marginLeft:50, 
        marginTop:50, 
        backgroundColor:'white',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11  
    },
    shadowOverlay:{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11  
    },
    courseDescript:{
        fontWeight:"500",
        fontSize:30,
       
    },
    text:{
        fontSize:30,
        color:'white',


    },
    enroll:{
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:5,
        width: 100,
        height: 40,
    }
})