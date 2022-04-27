import { useEffect, useState } from 'react';
import { Pressable, View, Text, StyleSheet, Platform } from 'react-native';
import APIConnection from '../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";
import {Badge,Card, Title} from 'react-native-paper';


function StudentCourseGridCard({ classID, title, color, onPress }) {

  const [state, setState] = useState(0);

  const apiConnection = new APIConnection();
  useEffect(() => {
    //your code here

    apiConnection.getClassProgress(classID)
      .then(json => {
        console.log(json);

        var arr = json.AllUnits

        if (arr) {
          var len = arr.length
          var c = 0
          var classProg = 0
          arr.map((item, key) => {
            if (item.completed) c = c + 1

          }, json)

          if (c) classProg = c / len

          else classProg = 0;
          setState((classProg * 100).toFixed(2))
        }
      })


  }, []);


  return (

    // <View style={styles.gridItem}>
    <Card style={styles.gridItem}>

   
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,

        ]}
        onPress={onPress}
      >
        {/* <View style={[styles.innerContainer, { backgroundColor: 'white' }]}> */}

        

        
     
          {/* <View style={{width:165,height:114, backgroundColor:'silver', justifyContent:'center'}}> */}
        <Card.Cover style={{height:80, width:165}}source={{uri: 'https://picsum.photos/700'}}/>
          <Card.Content>
            <Badge style={{fontSize:9, fontWeight:'bold', backgroundColor:'blue'}}>{state}%</Badge>
              {/* <Title >{title}</Title>  */}
              <Text adjustsFontSizeToFit numberOfLines={2}>{title}</Text>
          </Card.Content>
          {/* </View> */}
  
        {/* </View> */}

      </Pressable>
      </Card>
    /* // </View> */
  );
}

export default StudentCourseGridCard;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    color: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1,

  },
  buttonPressed: {
    opacity: 0.5,

  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',


  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign:'center'

  },
  progress:{
    fontWeight:'bold',
    fontSize: 18,
    height:20

  }

});
