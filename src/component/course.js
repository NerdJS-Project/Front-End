import * as React from 'react-native';

import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';


export default function Course({item, k,take}){


    return(
       
        
            <TouchableOpacity onPress={take} >
        <View style={{ alignItems:'center',justifyContent:'center' , height:70,width:80,borderRadius:10, borderWidth:5, borderColor:'white'}}>
            
            <Text k={k} style={{color:'white'}}>
                    {item.Course_Title} 
            </Text>
        </View>
            </TouchableOpacity>

    )




} 