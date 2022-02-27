import React, { Component } from 'react';
import { render } from 'react-dom';
import {View,Text, StyleSheet,  ScrollView, SafeAreaView, TouchableOpacity,TouchableWithoutFeedback, ScrollViewComponent} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import menuComponent from './component';
//import data from './dashboard.json'

//const data = require('./src/screens/dashboard.json');





function Dash ()  {
    return(
        
        
        <View style={{flex:2,alignItems:'stretch'}}>
                    
                <ScrollView>
                    <SafeAreaView style={{flex:1, justifyContent:'space-between' }}>

                            <View style={styles.header} >
                                {/*<View style={styles.menu}>
                                </View> */}

                                    
                                        <TouchableWithoutFeedback>
                                                  
                                                <FontAwesome5 style={styles.menu} size={20} name={'bars'} color={'white'}>
                                                    {menuComponent}        
                                                </FontAwesome5>
                                            
                                    
                                        </TouchableWithoutFeedback>
                                  
                                

                                <TouchableOpacity onPress={()=>{
                                    alert('you tapped search button');
                                }}>

                                <FontAwesome5 style={styles.searchIcon} size={20}name={'search'} color={'white'} />
                                </TouchableOpacity>
                            </View>

                                <View>
                                    <Text style={{color:'#3385ff', textAlign:'center', fontWeight:'600'}}>Unit #</Text>

                                </View>

                                    
                                    <View style={styles.lessonCompletion}>

                                        <Text style={{color:'white',justifyContent:'center',textAlign:'center'}}>
                                            #% completed
                                        </Text>
                                    </View>

                            <View style={styles.lessContainer}>

                                

                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                

                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    
                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>


                                    <View style={styles.lesson}>
                                        <TouchableOpacity onPress={()=>{
                                            alert('pressed lesson');
                                        }}>

                                            <View style={styles.lessonNum}>
                                                <Text style={{color:'white', textAlign:'center', justifyContent: 'center'}}>Lesson #</Text>

                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                


                            </View>

                            


                            
                     
                            {/*home, setting and profile icons for footer in that order */}
                            <View style={styles.footer}>
                                <TouchableOpacity onPress={()=>{
                                    alert('you pressed home icon');
                                }}>
                                    <FontAwesome5 style={styles.homeIcon} size={20} name={'home'} color={'white'}/>
                                </TouchableOpacity>
                                
                                <TouchableOpacity onPress={()=>{
                                    alert('you clicked settings');
                                }}>
                                    <Icon style={styles.settingIcon} size={20} name={'settings'} color={'white'}/>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{
                                    alert('clicked on profile');
                                }}>
                                    <FontAwesome5 style={styles.profileIcon} size={20} name={'user'} color={'white'}/>   
                                </TouchableOpacity>

                            </View>

            
            </SafeAreaView>             
                        
                </ScrollView>    
                </View>
            
       

    ); 
    

}

const styles = StyleSheet.create({
    menu:{
       // alignItems:'flex-start',
        
        alignSelf: 'flex-start',
        justifyContent: 'center'
        
    } , 
    header:{
        backgroundColor: '#3385ff',
        alignItems:'center',
        paddingBottom: 10,
        paddingTop: 10,
        flexDirection:'row',
        justifyContent:'space-between'
      },
    footer:{
        backgroundColor:'#3385ff',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingBottom:10,
        paddingTop:10,
        justifyContent:'space-between',
        alignItems: 'stretch'
    },
    lesson:{
        backgroundColor: '#3385ff',
        width: 75,
        height: 75,
        borderRadius: 75/2,
        
        justifyContent:'space-evenly',
        
        
    },
    lessonCompletion:{
        backgroundColor: '#3385ff',
        width: 75,
        height: 75,
        borderRadius: 75/2,
        alignSelf: 'center',
       // justifyContent:'space-between'
    
    },
    lessContainer:{
        backgroundColor:'gray',
        width: 200,
        height: 200,
        alignSelf:'center',
        
        flexWrap:'wrap',
        flexDirection:'row',
       justifyContent:'space-evenly',

        
    },
    lessonNum:{
        backgroundColor:`#0000ff`,
        marginTop: 50,
        width: 80,
        height: 25,
        borderRadius: 78
    },
    searchIcon:{
        justifyContent: 'center',
       alignSelf: 'flex-end'
      
    },
    homeIcon:{
        alignSelf:'flex-start',
         
    },
    settingIcon:{
        alignSelf:'center'
    },
    profileIcon:{
        alignSelf:'flex-end'
    }


});

export default Dash;
