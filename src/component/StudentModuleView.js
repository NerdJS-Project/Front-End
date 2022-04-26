import React, { useLayoutEffect,useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../utility/APIConnection";
import {Divider} from "react-native-paper"


export default function StudentModuleView({item, onClickFunction,instructorID,navigation}) {
    //Custom Component for the Expandable List
  const apiConnection = new APIConnection();
  const [layoutHeight, setLayoutHeight] = useState(0);
 const [progress, setProgress] = useState(true);
 const [modProg, setModProg] = useState(0);
 const isFocused = useIsFocused();

 //const [lessArr, setlessArr]= useState([]);


  // let progress = 0;
  //same as component did mount, this method is called when the component is first mounted
  useEffect(()=>{
    var mProg="0.0"
    apiConnection.getModuleProgress(item.Module_ID)
    .then((result)=>{
      console.log('JSON for Module :'+ JSON.stringify(result));
      var arr = result.AllUnits
        if(arr){
          var len = arr.length
          var c = 0
          var moduleProg = 0
          arr.map((item, key)=>{
            if(item.completed) c = c + 1
            
          }, result)
         
          if(c) moduleProg = c/len
          
          else moduleProg = 0
          mProg = (moduleProg * 100).toFixed(2) 
         setModProg(mProg)
      
        }
    })
  },[])

  useEffect(() => {
    
    if (item.isExpanded) {
      setLayoutHeight(null);
      console.log("here: ",item)
     
    item.Lessons.map((lesson,key) => {
      lesson.lProg = "0.0"
      apiConnection.getLessonProgress(lesson.lesson_id)
      .then((json) => {
        // console.log('JSON :'+ JSON.stringify(json));
        // console.log("hello",json.AllUnits)
        var arr = json.AllUnits
      
        if(arr){
          var len = arr.length
          var c = 0
          var lessonProg = 0
          arr.map((item, key)=>{
            if(item.completed) c = c + 1
            
          }, json)
         
          if(c) lessonProg = c/len
          
          else lessonProg = 0
          lesson.lProg = (lessonProg * 100).toFixed(2) 
         setProgress(!progress )
        // setlessArr(arr);
        }
        
        //console.log(lesson.lesson_id)
          //setLessonData(json);
          //console.log("THIS IS LESSONDATA: "+ json);
      })
    })
  
      
    
    } else {
     
      setLayoutHeight(0);
      
    }
  }, [item.isExpanded]);

 
 // const isFocused = useIsFocused();

  //const [LessonData, setLessonData] = useState([]);

   
console.log('progress '+ progress)
  
  
  return (
    <View>
      {/*Header of the Expandable List Item*/}
     
      <View style={styles.classes}>
      <TouchableOpacity
        activeOpacity={0.8}
       onPress={onClickFunction}
        style={styles.header}>

        <Text style={styles.headerText} >{item.Module_Title} {modProg}%</Text>
        <FontAwesome5 style={{transform:[{rotate: layoutHeight != 0? '180deg': '0deg'}] }} name={'angle-down'} size={15} color={'white'}/>
        
    
      </TouchableOpacity>
       </View>
       <View
        style={{
          height: layoutHeight,
          overflow: 'hidden',

        
        }}>
        {/*Content under the header of the Expandable List Item*/}
         {item.Lessons.map((item, key) => (
          <TouchableOpacity
            key={key}
            style={styles.content}
             onPress={() =>  navigation
               .navigate('Lesson View', {
               lessonID : item.lesson_id,
              instID : instructorID,
              lesson_name: item.lesson_name,
            
               })
            }
          //alert('Id: ' + item.lesson_id + ' val: ' + item.lesson_descrip)
             
          >
            
            <Text style={styles.text}>
               Lesson Id: {item.lesson_id}
            </Text>
            <Text style={styles.text}>
               Lesson Name: {item.lesson_name}
            </Text>
            <Text style={styles.text}>
               lesson Progress:{item.lProg}%
            </Text>
               
             
               
           
         
            
          </TouchableOpacity>
          
        ))} 
        
      </View>


    </View>
  );
};


const styles = StyleSheet.create({
    classes:{
     
      alignItems:'center',
      padding:5,
      borderRadius:10
    },
    container: {
      flex: 1,
    },
    titleText: {
      flex: 1,
      fontSize: 22,
      fontWeight: 'bold',
    },
    header: {
      width:345,
      alignItems:'center',
      borderRadius:10,
      borderWidth:2,
      borderColor:'black',
      flexDirection:'row',
      justifyContent:'space-between',
       backgroundColor: '#3385ff',
      padding: 20,
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'white'
    },
    separator: {
      height: 1,
      backgroundColor: 'black',
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
    },
    text: {
      fontSize: 16,
      color: 'black',
      padding: 10,
      justifyContent:'space-between'
    },
    content: {
      borderRadius:10,
      borderColor:'black',
      borderWidth:2,
      paddingLeft: 10,
      paddingRight: 10,
      // backgroundColor: 'silver',
      margin:2
    },
  });