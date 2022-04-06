import { useState } from 'react';
import * as React from 'react-native';
import {Text,View,TouchableOpacity,StyleSheet, TextInput,FlatList} from 'react-native';



export default function Sections({v}){
    // const [Lesson, setLesson] = useState(section['lesson']);
//  console.log(Lesson);
    // function getSection(){
    //     const result=[];
    //     // console.log(section);
        
    //     data.forEach(item=>{
    //         item.Sections.map(member =>
    //             {
    //                result.push(
    //                 <TouchableOpacity key={i} style={styles.sectionButton}>
    //                                  <Text style={styles.text}>
    //                                      {data[i]}
    //                                  </Text>
    //                          </TouchableOpacity>
    //                )
    //             })
    //     })
        // for(let i=0; i < data.length; i++){
           
        //   //  console.log(data['lesson']['Sections']);
        //     // if(data[i].lesson == text){ 
        //     result.push(
        //         <TouchableOpacity key={i} style={styles.sectionButton}>
        //                 <Text style={styles.text}>
        //                     {data[i]}
        //                 </Text>
        //         </TouchableOpacity>
        //     )
        //   //  }
        // }
     //   return result;
   // }

    return(
        <View style={{flexDirection:'row', flexWrap:'wrap',
           alignItems:'center',justifyContent:'center'}}>
                 
                 <TouchableOpacity style={styles.sectionButton}>
                                    <Text style={styles.sectionText}>
                                        {v.unit_name}
                                    </Text>
                  </TouchableOpacity>

                {/* <Text style={styles.sectionText}> */}
                    {/* {getSection()} */}

                {/* </Text> */}

            
        </View>
    )


}


const styles = StyleSheet.create({
    textInput: {
        height: 40,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        backgroundColor: "#91d6d9",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 6,
        shadowColor: "black",
        elevation: 10,
        borderWidth: 1,
        fontSize: 12,
    fontWeight: "500",
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
   
    text: {
        color: 'black'
    }

});