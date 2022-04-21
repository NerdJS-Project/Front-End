import React, { useEffect, useState } from 'react';
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

export default function ModuleView({item, onClickFunction,instructorID,navigation}) {
    //Custom Component for the Expandable List
    
  const [layoutHeight, setLayoutHeight] = useState(0);

  //same as component did mount, this method is called when the component is first mounted
  useEffect(() => {
    if (item.isExpanded) {
      setLayoutHeight(null);
    } else {
      setLayoutHeight(0);
    }
  }, [item.isExpanded]);

  return (
    <View>
      {/*Header of the Expandable List Item*/}
     
      <View style={styles.classes}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onClickFunction}
        style={styles.header}>

        <Text style={styles.headerText} >{item.Module_Title}</Text>
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
              .navigate('LessonCreation', {
               lessonID : item.lesson_id,
              instID : instructorID
              })
        //  alert('Id: ' + item.lesson_id + ' val: ' + item.lesson_descrip)
          }>
            <Text style={styles.text}>
               {item.lesson_name}
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