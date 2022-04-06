import { useContext, useState } from 'react';
import * as React from 'react-native';
import {Text,StyleSheet,
    View,TouchableOpacity,SafeAreaView,
    FlatList,TextInput, ScrollView} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
 import Sections from '../../../component/SectionList';
 import { AuthContext } from '../../../store/AuthContext';
 import APIConnection from "../../../utility/APIConnection";
//import  Section  from '../../../component/SectionList';

const data =
    [
        {
            "id":'1',
            "lesson": "lesson 1",
            "Sections": [
                {
                "unit_id": 1,
                "unit_name": "section1",
                },
                {
                "unit_id": 2,
                "unit_name": "section2"
                },
                {
                "unit_id": 3,
                "unit_name": "section3"
                },
                {
                "unit_id": 4,
                "unit_name": "section4"
                },
                {
                    "unit_id": 5,
                    "unit_name": "section5"
                    },
                     
            ]
        },
       
        
    ]

  

export default function LessonCreation({section}){
    // const data={};
    // const apiConnection = new APIConnection();
    // const authCtx = useContext(AuthContext);
    // const token = authCtx.token;
//     const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

//    apiConnection.getSections().then(() => delay(300)).then(json => {
//     data = json});

    console.log('DATA'+data);
 const [Lesson,setLesson] = useState(data[0].lesson);
// const [selectedValue,setSelectedValue]= useState(data[0].lesson);
const[title, setTitle] = useState(data[0].lesson);
let index =0;
 console.log(Lesson);
 
    return(
        <View style={{ justifyContent:'center'}}>

        
        
            <SafeAreaView style={{ alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:30}}>
                    {title}
                </Text>
               {/* {getSections()} */}

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
                             data[0].lesson = newText;
                             console.log(data);
                            setTitle(newText)
                        }}/>
                        {/* {getSections()} */}
                             
                </View>
                </View>

               {/* <View style={{width: 200, height: 300}}> */}
                
                    <FlatList
                //    numColumns={3}
                //    horizontal={false}
                    data={data}
                    renderItem={({item,index})=>

                    <View style={{justifyContent:'center', alignItems:'center',
                            flexDirection:'row', flexWrap:'wrap'
                    }}>
                         {item.Sections.map((v,i)=>(
                            
                        <TouchableOpacity style={styles.sectionButton}>
                            <Text style={styles.sectionText}>
                                
                                {v.unit_name}
                            </Text>
                            </TouchableOpacity>
                        
                        ))}
                        </View>

                    }
                    
                    />

                    
                    
                {/* </View> */}
       

                <TouchableOpacity style={styles.addButton} onPress={()=>{
                    if(Lesson=="")
                    {
                        alert('oops must enter a lesson name');
                    }
                }}>
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