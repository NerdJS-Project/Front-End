import { useEffect, useState } from "react";
import * as React from "react-native";

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

import StudentModuleView from "../../../component/StudentModuleView";
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";


export default function StudentCourseView({ navigation, route }) {
//retrieving course name and courseID from route.params
    const {classId, className} = route.params;


  //-----------API Connection Code----------
  const isFocused = useIsFocused();

  const [finalData, setFinalData] = useState([]);
  const [lessonID, setLessonID] = useState(0);

  const apiConnection = new APIConnection();
  useEffect(() => {
    if (isFocused) {
      apiConnection.getAllModulesForClass(classId)
      .then((json)=>{
 
        let data = processAPIModuleData(json);
        data.forEach(element=>{

        
          apiConnection.getLessonsInModule(element.Module_ID)
          .then((json)=>{
             processAPILesson(element.Lessons,json);
          
          });
          
        })
       
        setFinalData(data);

      })

    }

  }, [isFocused]);

  
  function processAPILesson(lessonArr, lessonData){

    for(let i =0; i < lessonData.length; i++){
      let newLesson={};
      newLesson['lesson_id'] = lessonData[i].lesson_id;
      newLesson['lesson_name'] = lessonData[i].lesson_name;
      newLesson['lesson_descrip'] = lessonData[i].lesson_descrip;
      newLesson['lesson_index'] = lessonData[i].lesson_index;

      lessonArr[i] = newLesson;
      
    }
    return lessonArr;
  }


    //Morph json from API into an array that we can use
    function processAPIModuleData(json){
      let returnData=[]
     for(let i = 0; i <json.length; i++){
       let newModule = {};
       newModule['isExpanded'] = false;
       newModule['Module_Title'] = json[i].module_name;
       newModule['Module_ID'] = json[i].module_id;
       newModule['instructorID'] = json[i].instructor_id;
      newModule['Lessons'] = [];
  
      returnData[i] = newModule;
  
      
     }
   
     return returnData;
  }
  
 

  //---------------------------------------

  //Morph json from API into an array that we can use


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
    <View 
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
            {className}
          </Text>
        </View>

 
        <ScrollView>
          <View style={styles.lessContainer}>

            <View style={styles.container}>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <TouchableOpacity
                  onPress={() => setMultiSelect(!multiSelect)}
                ></TouchableOpacity>
              </View>
              <ScrollView>
                {finalData.map((item, key) => (
                  <StudentModuleView
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

          </View>
        </ScrollView>

       
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
    width: 350,
  },
  titleText: {
    flex: 1,
    fontSize: 22,
    fontWeight: "bold",
  },
  menu: {
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
  },
  lessContainer: {
    flex: 20,
    marginTop: 10,
    width: 350,
    alignSelf: "center",
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
