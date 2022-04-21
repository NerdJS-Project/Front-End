import { useEffect, useState, useContext, useLayoutEffect } from "react";
import * as React from "react-native";
import { BottomSheet, Button, ListItem } from "react-native-elements";

import { Component } from "react";
//import { render } from 'react-dom';
import {
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  UIManager,
  Platform,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Icon from "react-native-vector-icons/SimpleLineIcons";
// import {AuthContext} from '../store/AuthContext';
import ModuleView from "../../../component/ModuleView";
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";
//  import Course from '../component/course';



export default function StudentCourseView({ navigation, route }) {
//retrieving course name and courseID from route.params
    const {class_id, class_name} = route.params;




  //-----------API Connection Code----------
  const isFocused = useIsFocused();

  const [finalData, setFinalData] = useState([]);
  const [lessonID, setLessonID] = useState(0);

  const apiConnection = new APIConnection();
  useEffect(() => {
    if (isFocused) {
      apiConnection
        .getModulesAndLessonInstructorCourseViewScreen(class_id)
        .then((json) => {
          let d = processAPIData(json);
          setFinalData(d);
        });
    }
  }, [isFocused]);

  
  // async function courseView(){
  //     await 
  // }


  //---------------------------------------

  //Morph json from API into an array that we can use
  function processAPIData(json) {
    let returnData = [];
    for (let i = 0; i < json.length; i++) {
      let newModule = {};
      newModule["isExpanded"] = false;
      newModule["Module_Title"] = json[i].module_name;
      newModule['instructorID'] = json[i].instructor_id;
      let newLessonArray = [];
      for (let j = 0; j < json[i].lessons.length; j++) {
        newLessonArray[j] = json[i].lessons[j];
        setLessonID(newLessonArray[j].lesson_id);
      }
      newModule["Lessons"] = newLessonArray;
      returnData[i] = newModule;
    }
    return returnData;
  }


  if (Platform.OS == "android") {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  //this is used to signified the component is abou tto be animated (like setState())
  //could be used to define animation property
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    const array = [...finalData];

    array[index]["isExpanded"] = !array[index]["isExpanded"];

    setFinalData(array);
  };

  
  return (
    <View // onLayout={(event)=>{
      style={{ flex: 2, alignItems: "stretch" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        

        <View style={styles.courseTitleBackground}>
          <Text
            style={{
              fontSize: 25,
              color: "white",
              textAlign: "center",
              fontWeight: "600",
            }}
          >
            {class_name}
          </Text>
        </View>

        {/* <View onLayout={(event)=>{
            var{x,y,width,Viewheight} = event.nativeEvent.layout; cheight =Viewheight}} > */}
        <ScrollView>
          <View style={styles.lessContainer}>
            {/* {getLesson()}  */}
            {/* <SafeAreaView style={{ }}> */}

            <View style={styles.container}>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <TouchableOpacity
                  onPress={() => setMultiSelect(!multiSelect)}
                ></TouchableOpacity>
              </View>
              <ScrollView>
                {finalData.map((item, key) => (
                  <ModuleView
                    key={key}
                    onClickFunction={() => {
                      updateLayout(key);
                    }}
                    route = {route}
                    navigation ={navigation}
                    instructorID = {finalData[0].instructorID}
                    item={item}
                  />
                ))}
              </ScrollView>
            </View>
            {/* </SafeAreaView> */}
          </View>
        </ScrollView>

        {/* <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditCourseAndModule', {
              courseID: courseID,
              courseName: courseName
             })}
        >
          <FontAwesome5 name={"edit"} color={"white"} size={20} />
        </TouchableOpacity> */}
        {/* </View> */}
      </SafeAreaView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  courseTitleBackground: {
    backgroundColor: "#00bfff",
    padding: 20,
  },
  
  editButton: {
    alignSelf: 'flex-end',

  justifyContent: 'center',
  alignItems: 'center',
  width:80,
  height:80,
  paddingBottom:5,
  position: "absolute",
    //height: 60,

  borderRadius: 50,
  backgroundColor: '#4970FA',
  color: 'white',
  right: 20,
  bottom:40
  },
  titleStyle: {
    color: "white",
  },
  container: {
    flex: 1,
    // borderWidth: 3,
    // borderColor:'black',
    width: 350,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  menu: {
    // alignItems:'flex-start',

    alignSelf: "flex-start",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#3385ff",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  lesson: {
    backgroundColor: "#3385ff",
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  lessonCompletion: {
    backgroundColor: "#3385ff",
    width: 75,
    height: 75,
    borderRadius: 75 / 2,
    alignSelf: "center",
    // justifyContent:'space-between'
  },
  lessContainer: {
    // backgroundColor: 'gray',
    // shadowColor:'#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    flex: 20,
    marginTop: 10,
    width: 350,

    alignSelf: "center",
    // borderColor:'#3385ff',
    // borderWidth:3,
    // borderRadius:20,
    flexWrap: "wrap",
    flexDirection: "row",

    alignContent: "center",
    justifyContent: "space-evenly",
  },
  lessonNum: {
    backgroundColor: `#0000ff`,
    marginTop: 50,
    width: 80,
    height: 25,
    borderRadius: 78,
  },
  searchIcon: {
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  homeIcon: {
    alignSelf: "flex-start",
    marginLeft: 5,
  },
  settingIcon: {
    alignSelf: "center",
  },
  profileIcon: {
    alignSelf: "flex-end",
    marginRight: 5,
  },
});
