import React from 'react';
import {View,Text, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


function Dash () {
   
    return(
      

                <View style={{flex:2,alignItems:'stretch'}}>
                    <SafeAreaView style={{flex:1, justifyContent:'space-between'}}>
                    
                        <View style={styles.header} >
                            {/*<View style={styles.menu}>
                            </View> */}
                        
                                    <FontAwesome5 style={styles.menu} size={20} name={'bars'} color={'white'}>
                                    
                                 </FontAwesome5>
                              
                            <Text style={{color:'white'}} >
                            Dashboard
                            </Text>
                            <FontAwesome5 style={styles.searchIcon} size={20}name={'search'} color={'white'} />
                        </View>

                        
                            <View style={styles.lesson}>
                                    <Text style={{color:'white', textAlign:'center'}}>
                                        Lesson #
                                    </Text>
                            </View>
                        
                        {/*home, setting and profile icons for footer in that order */}
                        <View style={styles.footer}>
                            
                            <FontAwesome5 style={styles.homeIcon} size={20} name={'home'} color={'white'}/>
                             <FontAwesome5 style={styles.settingIcon} size={20} name={'snowflake'} color={'white'}/>
                             <FontAwesome5 style={styles.profileIcon} size={20} name={'user'} color={'white'}/>   

                        </View>

                        
                
            
            </SafeAreaView>             
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
        alignSelf: 'center',
        justifyContent:'center'
    
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