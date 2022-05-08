import { useEffect, useState } from 'react';
import {
  Pressable, View, Text,
  StyleSheet, Platform,
  TouchableOpacity, Alert
} from 'react-native';
import APIConnection from '../utility/APIConnection';
import { Badge, Card} from 'react-native-paper';




function StudentCourseGridCard({ classID, title,  onPress, refresh}) {

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


  function dropClass() {
    apiConnection.dropClass(classID);
    alert('dropped class');
    refresh();

  }


  function alertDrop() {
    Alert.alert(
      "Warning",
      "Do you want to drop this course?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Drop",
          onPress: () => { dropClass() }

        }
      ],
      {
        cancelable: true,

      }
    );

  }


  return (

    <Card style={styles.gridItem}>


      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,

        ]}
        onPress={onPress}
      >

        <Card.Cover style={{ height: 80, width: '100%', resizeMode: "stretch" }} source={{ uri: 'https://picsum.photos/700' }} />
        <Card.Content adjustsFontSizeToFit>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Badge style={{ fontSize: 9, fontWeight: 'bold', backgroundColor: 'blue' }}>{state}%</Badge>
            <TouchableOpacity onPress={() => {
              if (Platform.OS == 'web') {
                dropClass();

              }
              else if (Platform.OS == 'android' || Platform.OS == 'ios') {
                alertDrop();

              }
            }}>


              <Text adjustsFontSizeToFit style={{ color: 'red', fontWeight: 'bold', fontSize: 13 }}> DROP</Text>


            </TouchableOpacity>
          </View>


          <Text adjustsFontSizeToFit numberOfLines={2} style={{ textAlign: 'center', fontWeight: '500' }}>{title}</Text>

        </Card.Content>


      </Pressable>

    </Card>

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
    textAlign: 'center'

  },
  progress: {
    fontWeight: 'bold',
    fontSize: 18,
    height: 20

  }

});