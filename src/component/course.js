import * as React from 'react-native';

import {Text,StyleSheet,View,TouchableOpacity} from 'react-native';


export default function Course({item, key}){


    return(
       
        
        <View style={{ alignItems:'center',justifyContent:'center' ,width:80,borderRadius:10, borderWidth:5, borderColor:'white'}}>
            <TouchableOpacity  key={key}>
            <Text style={{color:'white'}}>
                    {item.Course_Title} 
            </Text>
            </TouchableOpacity>
        </View>

    )




} 