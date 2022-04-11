import {useEffect, useContext, useState } from 'react';
import * as React from 'react-native';
import {Text,StyleSheet,
    View,TouchableOpacity,SafeAreaView,
    FlatList,TextInput, ScrollView} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
 //import Sections from '../../../component/SectionList';
 import { AuthContext } from '../../../store/AuthContext';
 import { useIsFocused } from "@react-navigation/native";
 import APIConnection from "../../../utility/APIConnection";
//import  Section  from '../../../component/SectionList';

// const data =
//     [
//         {
//             "id":'1',
//             "lesson": "lesson 1",
//             "Sections": [
//                 {
//                 "unit_id": 1,
//                 "unit_name": "section1",
//                 },
//                 {
//                 "unit_id": 2,
//                 "unit_name": "section2"
//                 },
//                 {
//                 "unit_id": 3,
//                 "unit_name": "section3"
//                 },
//                 {
//                 "unit_id": 4,
//                 "unit_name": "section4"
//                 },
//                 {
//                     "unit_id": 5,
//                     "unit_name": "section5"
//                     },
                     
//             ]
//         },
       
        
//     ]

  

export default function LessonCreation({navigation,route}){
    // const data={};
    // const {LessonID} = route.params;

    const [myData, setMyData] = useState([]);
 //   const [lesson, setLesson] = useState([]);
    const isFocused = useIsFocused();
    const apiConnection = new APIConnection();
  useEffect(() => {
    if (isFocused) {
      apiConnection
        .getSectionsPerLesson()
        .then((json) => {
          let d = processAPIData(json);
        //  this.LessonID = lessonID(LessonID);
       // console.log(text());
        //   console.log(d);
          setMyData(d);
       
        });
     
        // apiConnection.getClasses
    }
  }, [isFocused]);

  console.log(myData);
//   function text()
//   {
//       return 
//   }


  function processAPIData(json) {
    // let returnData = [];
     let newUnits = {};
    let arr= [];
    for (let i = 0; i < json.length; i++) {
      
        let newUnitsArray = [];
       let newUnitsId=[];
       let lessonId=[];
       
       newUnits['Units'] = 'Units';
      
      //  newUnits['Units'] = "Units";
        // newUnitsArray[i] = json[i].unit_name;
        // newUnitsId[i] = json[i].unit_id;
        // lessonId[i] = json[i].lesson_id;

        // newUnits['lesson_id'] = lessonId;
        // newUnits['UnitID']= newUnitsId;
        // newUnits["UnitsName"] = newUnitsArray;

           arr.push ({
            unit_name:json[i].unit_name,
                unit_id: json[i].unit_id,
                lesson_id: json[i].lesson_id
            });
          
         newUnits["Units"]= arr;
      //   console.log(newUnits['Units'][i].unit_name);
    //     returnData=newUnits;
        //  newUnits["Units"] = json[i].lesson_id;

      //  newUnits["Lessons"] = lessonIDArray;

    // returnData[i] =arr;
   //  console.log(returnData);
  
    }
    return newUnits;
  }

    
  const [Lesson,setLesson] = useState(myData);
// const [selectedValue,setSelectedValue]= useState(data[0].lesson);
// const[title, setTitle] = useState(data[0].lesson);

// console.log(Lesson);
 
    return(
        <View style={{ justifyContent:'center'}}>

{/* <Text>THIS IS TEXT{route.params.LessonID}</Text> */}
        
            <SafeAreaView style={{ alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:30}}>
                    {/* {title} */}
                </Text>
               

              <View style={{flexDirection: 'row', marginTop:50 }}>
 
                <View style={{alignItems:'center', justifyContent:'center',
                borderRadius: 2,borderColor:'black',width:150}}>
                    <Text style={{ fontWeight:'bold',color:'black'}}>
                        Change Lesson Name:
                    </Text>
                 </View>
               <View style={{justifyContent:'center',alignContent:'center' ,alignItems:'center'}}>
               <TextInput  maxLength={30} style={{backgroundColor:'silver', borderWidth:2, 
                        borderColor:'black', borderRadius:5, width: 100, height: 40}} 
                        defaultValue={Lesson} onChangeText={(newText)=>{
                            // let text = newText;
                        if(newText ==""){
                            alert('must enter lesson name');
                            setLesson('Lesson');
                        }
                        //    const objIndex = data.findIndex((obj=>  obj.id == obj.id));
                        //      const objIndex = selectedValue;
                        //     getIndex(selectedValue)
                        //    console.log('LOGGING OBJ INDEX '+objIndex);
                        //    data[objIndex].lesson = newText;
                        //     console.log(data);
                           
                           
                             setLesson(newText);
                            //  data[0].lesson = newText;
                             console.log(data);
                            setTitle(newText)
                        }}/>
                       
                             
                </View>
                </View>

               {/* <View style={{width: 200, height: 300}}> */}
                
                    <FlatList
                   numColumns={1}
                //    horizontal={false}
                    data={myData}
                   /*keyExtractor={myData["UnitID"]}*/
                    renderItem={({item,index})=>
                   
                    <View /*key={item['UnitID'].unit_id} */style={{justifyContent:'center', alignItems:'center',
                            flexDirection:'row', flexWrap:'wrap'
                    }}>
                           {/* {console.log(item)} */}
                         {myData.map((v,i=0)=>(
                        
                        <TouchableOpacity /*key ={item["UnitID"]}  */ style={styles.sectionButton}>
                            <Text style={styles.sectionText}>
                                    
                                {console.log(v)}
                                
                                {myData['Units'][i++].unit_name}
                                {i++}
                            </Text>
                            </TouchableOpacity>
                        
                        ))}
                        </View>

                    }
                        />

                    
                {/* </View> */}
       

                <TouchableOpacity style={styles.addButton} onPress={()=>
                    // if(Lesson=="")
                    // {
                    //     alert('oops must enter a lesson name');
                    // }
                    // else{
                     navigation.navigate('LessonCreation'/*,{LessonID: 1}*/)}
                >
                    <Text style={styles.addTextButton}>
                        Add Section +
                    </Text>
                        
                </TouchableOpacity>

                
            </SafeAreaView>


        </View>
    
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      sectionText:{
        fontWeight:'bold'
      },
      sectionButton:{
        width: 400, 
        height:40, 
        color:'silver', 
        backgroundColor:'aliceblue',
        borderRadius:5,
        margin:10,
        textAlign:'center',
        justifyContent:'center',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset : { width: 1, height: 2}
      },
   
    addButton:{
        borderRadius:5,
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        width:50,
        backgroundColor:'aliceblue',
         shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset : { width: 1, height: 2}
    },
    addQuiz:{
        borderRadius:2,
        alignItems:'center',
        justifyContent:'center',
        width: 330,
        height:175,
        backgroundColor:'aliceblue',
         shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 2,
        shadowOffset : { width: 1, height: 2}

    },
   
    addTextButton:{
        
        color:'blue'
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
        marginRight:10
    },
    footer: {
        backgroundColor: '#3385ff',
        justifyContent: 'flex-end',
        width:300,
        flexDirection: 'row',
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})