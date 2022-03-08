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

export default function ModuleView({item, onClickFunction}) {
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

        <Text style={styles.headerText}>{item.Course_Title}</Text>
        
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
            onPress={() => alert('Id: ' + item.id + ' val: ' + item.Description)}>
            <Text style={styles.text}>
               {item.Description}
            </Text>
            <View style={styles.separator} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    classes:{
      backgroundColor: 'black',
      alignItems:'center',
      padding:10,
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
      backgroundColor: '#F5FCFF',
      padding: 20,
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
      color: 'black'
    },
    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      width: '95%',
      marginLeft: 16,
      marginRight: 16,
    },
    text: {
      fontSize: 16,
      color: '#606070',
      padding: 10,
    },
    content: {
      paddingLeft: 10,
      paddingRight: 10,
      backgroundColor: '#fff',
    },
  });