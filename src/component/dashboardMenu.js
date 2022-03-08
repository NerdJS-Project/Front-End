import React from 'react';
import { useState } from 'react';

import { View, Text,StyleSheet, ImageBackgroundBase, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Course from '../component/course';


const data=[
  {
  
  
        isExpanded:false,
        "ID": "2349",
        Course_Title: "Calculus",
        Lessons: [
            {
                id:1,
                "Duration": "4 hours",
                "Completion Status": "True",
                Description: "This lecture covers L'Hospital Rule",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
  
            },
             {
              id:2,
              "Duration": "6 hours",
              "Completion Status": "True",
              Description: "This lecture covers finding the integral",
              "VideoContent" : "Youtube.com",
              "Quiz": "QuizContent"
  
          },
          {
              id:3,
              "Duration": "2 hours",
              "Completion Status": "True",
              Description: "This lecture cover L'Hospital Rule",
              "VideoContent" : "Youtube.com",
              "Quiz": "QuizContent"
  
          },
          {
              id:4,
              "Duration": "5 hours",
              "Completion Status": "True",
              Description: "This lecture cover right hand rule",
              "VideoContent" : "Youtube.com",
              "Quiz": "QuizContent"
  
          },
           {
              id:5,
              "Duration": "4 hours",
              "Completion Status": "False",
              Description: "This lecture cover math theory",
              "VideoContent" : "Youtube.com",
              "Quiz": "QuizContent"
  
          },
           {
              id:6,
              "Duration": "4 hours",
              "Completion Status": "False",
              Description: "This lecture cover whatever",
              "VideoContent" : "Youtube.com",
              "Quiz": "QuizContent"
  
          }
      ]
  },
  
       {
        
          "ID": "4897",
          Course_Title: "English",
          Lessons: [
              {
                  id:7,
                  
                  "Duration": "4 hours",
                  "Completion Status": "True",
                  Description: "This lecture covers fictional writing",
                  "VideoContent" : "Youtube.com",
                  "Quiz": "QuizContent"
    
              },
               {
                  id:8,
                "Duration": "6 hours",
                "Completion Status": "True",
                Description: "This lecture covers retorical writing",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            {
              id:9,
                "Duration": "2 hours",
                "Completion Status": "True",
                Description: "This lecture cover creative writing",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            {
              id:10,
                "Duration": "5 hours",
                "Completion Status": "True",
                Description: "This lecture cover business writing",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
             {
              id:11,
                "Duration": "4 hours",
                "Completion Status": "False",
                Description: "This lecture cover persuasive writing",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            },
            {
                id:12,
                "Duration": "4 hours",
                "Completion Status": "False",
                Description: "This lecture cover whatever",
                "VideoContent" : "Youtube.com",
                "Quiz": "QuizContent"
    
            }
          ]
        
    }
  
  ]




export default function menu({navigation,item, key}) {
  const [visible, setVisible] = useState(false);

   // const shouldShow
   const hideMenu = () => setVisible(false);

   const showMenu = () => setVisible(true);

  return (
  
    <SafeAreaView >

    <View >

      <TouchableOpacity onPress={()=>setVisible(!visible)} > 
      
      <FontAwesome5  size={20} 
                   name={'bars'} color={'white'}/>
      </TouchableOpacity>

      {visible ? 
      (

        <View style={{width: 180, height: 70, 
        color:'green',backgroundColor:'green', 
        flexDirection:'row',
        justifyContent:'space-between'}}>
            <ScrollView horizontal={true} >

            
             {data.map((item,key) =>( 
                    <Course
                    key={key}   
                    item={item} />
               ))} 



        
          <View style={{alignItems:'center',justifyContent:'center', width:40,borderRadius:10, borderWidth:5, borderColor:'white'}}>
              <TouchableOpacity onPress={()=> navigation.navigate('ClassSearchScreen')}>
                <Text size={29}style={{color:'white'}}>
                  +
                </Text>
              </TouchableOpacity>
          </View>
            </ScrollView>

        </View>
      ): null}


    </View>


   
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  menu:{
    // alignItems:'flex-start',
    
    alignSelf: 'flex-start',
    justifyContent: 'center'
    
  } ,
  container: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 10,
    
  },
})



//   export default Example;