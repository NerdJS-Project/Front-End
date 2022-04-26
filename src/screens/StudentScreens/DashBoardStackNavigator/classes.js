import * as React from 'react-native';
import {Text,View, TouchableOpacity} from 'react-native';
import { useEffect,useState } from 'react';
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";

export default function SingleClass({navigation}){
 

    const [className,setClassName] = useState('');
    const [classDesc,setClassDesc] = useState('');
    const [classID, setClassID] = useState('');
    //let className;
    const isFocused = useIsFocused();
    const apiConnection = new APIConnection();
    useEffect(() => {
        if (isFocused) {
      //  getClassInfo();
      apiConnection.getClassByIdForStudentCourseDescription("80b5c93a-5df5-423a-9068-060a2ebd294c")
      .then((json)=>{
        console.log(json);
        setClassName(json.result.class_name.toString());
        setClassDesc(json.result.class_descrip.toString());
        setClassID(json.result.class_id.toString());

        console.log(classDesc);
        console.log(classID);
        console.log(className);
      
        }
      )};
    }, [isFocused]);

  
  
    return (
        <View style={{ alignItems:'center',justifyContent:'center',}}>

        <TouchableOpacity style={{justifyContent:'center'}}onPress={()=>{
            navigation.navigate('Course Description',{
                class_descrip : classDesc,
                class_id : classID,
                class_name: className
            })
        }}>
            <Text style={{fontSize:30,fontWeight:'bold'}}>
                 {className}
            </Text>

        </TouchableOpacity>
            </View>
    )
}