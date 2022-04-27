import * as React from 'react-native';
import { NavigationHelpersContext, useIsFocused } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import APIConnection from "../../../utility/APIConnection";
import { Avatar } from "react-native-paper";
import {Text, View,TouchableOpacity, StyleSheet, SafeAreaView,ScrollView} from 'react-native';
import {Divider} from 'react-native-paper';

export default function CourseDescriptionScreen({ navigation,route}){
    
    const {class_id,class_name, class_descrip} = route.params;

    //const [classID, setClassID] = ('');
    const [isEnrolled, setIsEnrolled] = useState(false);
    const [toBeEnrolled,setToBeEnrolled] =useState([]);
    const [usersClasses,setUserClasses] = useState([]);
    const isFocused = useIsFocused();
    const apiConnection = new APIConnection();
   

    useEffect(() => {
      
        if (isFocused) {
            getClasses();
         
        }
       // enrolled();
    }, [isFocused]);
    
    
    function signUp(){
        apiConnection.signUpForClass(class_id)
        .then((json)=>{
            let data = json;
            setToBeEnrolled(data);
        
        
         });
        }


    function getClasses(){
        apiConnection.getClasses()
        .then((json)=>{
           //console.log(json);
             setUserClasses(json);
            // console.log("CLASSES" +usersClasses.class_id);
        }) ;       
    }
    
   
    
    function enrolled(){
        for(let i =0; i < usersClasses.length; i++){
        //console.log("userClasses : "+ usersClasses[i].class_id);

                if(usersClasses[i].class_id == class_id)
                {       
                    setIsEnrolled(true);
                    alert('already enrolled');
                    return isEnrolled;
                }
                // else if (usersClasses[i].class_id !=class_id){
                //     alert('Enrolled')
                //     setIsEnrolled(false);
                //     return isEnrolled;
                // }
                
            }
           // console.log("THIS STUDENT ENROLLMENT STATUS: "+ isEnrolled);
            return isEnrolled;
        
    }
    // console.log("THIS IS CLASS DESCRIPTION "+ class_descrip);
    
    // console.log("THIS IS CLASS ID "+ class_id);
    
    // console.log("THIS IS CLASS NAME "+ class_name);

    return(
        
       
        <View style={{flex:1,backgroundColor:'#3385ff', 
        justifyContent:'center',  alignItems:'center'}}>
        
            <SafeAreaView>

                {/* White card container View */}
            <View style={styles.card }>
                        {/* View container for avatar and instructor name  */}
                <View style={{flexDirection:'column', marginLeft: 20, marginTop: 40, maxWidth:90, height: 120}}>

                <Avatar.Image
                // rounded
                size={90}
                style={styles.shadowOverlay}
                source={ require('./icons/profile.png')}
                /> 
                    <Text> Instructor Name is Albert and I will be teaching you </Text>
                </View>
                

                   
                <View style={{flex:1,flexGrow: 1,flexDirection:'column', height:240}}>

                    <View style={{height: 180,marginTop:40, 
                    marginBottom:10, marginLeft: 30}}>

                    <Text  style={styles.courseDescript}>Course Description</Text>
                    <Divider/>

                <ScrollView>
                           
                    <View >

                        <Text style={{fontSize:14, fontWeight:'normal'}}> 
                         {class_name}
                          </Text>
                    </View>
                            </ScrollView>
                       
                </View>
                     
                   
                    {/* *button so student can enroll in a specific course */}
                    <View style ={{marginLeft: 40,
                            marginTop:5, flexDirection:'column'}}>
                    <TouchableOpacity  style ={styles.enroll} onPress={()=>
                    { 
                        enrolled();
                        if(isEnrolled== true) {
                        
                        navigation.navigate('Student Course View',{
                       classDesc: class_descrip,
                       classId:class_id,
                        className: class_name
                    });
                }
                else{
                    signUp();
                    navigation.navigate('Student Course View',{
                        classDesc: class_descrip,
                        classId:class_id,
                         className: class_name
                });
                   }}}>
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
        alignSelf:'center',
         width: 350, 
        height: 300, 
        borderRadius: 40,
        marginLeft:50, 
        marginRight:50,
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
        fontSize:20,
       
    },
    text:{
        fontSize:30,
        color:'white',


    },
    enroll:{
        alignItems:'center',
        backgroundColor:'blue',
        borderRadius:25,
        width: 100,
        height: 50,
    }
})