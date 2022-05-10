import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Picker,
  Text,
  Alert,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Authentication from "../../../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import APIConnection from "../../../utility/APIConnection";

import { useIsFocused } from "@react-navigation/native";

export default function CourseEditScreen({ route, navigation }) {
  const { courseID, courseName } = route.params;

  const [className, setClassName] = useState(courseName);
  const [courseDescription, setCourseDescription] = useState("");

  const [selectedCourseTypeIndex, setSelectedCourseTypeIndex] = useState(0);
  const [selectedCourseCategoryValue, setSelectedCourseCategoryValue] =
    useState("Other");

  const categoryData = [
    "Mathematic",
    "Physics",
    "English",
    "Computer Science",
    "Other",
  ];

  const apiConnection = new APIConnection();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      apiConnection.getClassByID(courseID).then((json) => {
        setCourseDescription(json.result.class_descrip);
      });
    }
  }, [isFocused]);

  function getCategoryPickerItems() {
    console.log("Route debug:", courseID, courseName, "route: ", route);
    let result = [];
    for (let i = 0; i < categoryData.length; i++) {
      result.push(
        <Picker.Item key={i} label={categoryData[i]} value={categoryData[i]} />
      );
    }
    return result;
  }

  async function onSave() {
    await apiConnection.editCourseForInstructor(
      courseID,
      className,
      courseDescription
    );
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> Create Course </Text>

<Text style={styles.placeholderName}>Course Name</Text>

        <TextInput
          style={styles.courseName}
          
         // label="Course Name"
         
       // editable={true}
          defaultValue={courseName}
          onChangeText={(text) => setClassName(text)}
        />

    
        <Text style={styles.placeholderDesc}>Course Description</Text>
        <TextInput
          style={styles.courseDesc}
         // label="Course Description"
          value={courseDescription}
          multiline={true} 
          onChangeText={(text) => setCourseDescription(text)}
        />




      
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addBttn} onPress={() => onSave()}>
              <Text style={styles.addText}>Save</Text>
          </TouchableOpacity>

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center", 
  },

  addBttn: {
    alignSelf: "center",

    justifyContent: "center",
    alignItems: "center",

    paddingBottom: 5,
    position: "absolute",
    height: 50,
    width: 200,

    borderRadius: 50,
    backgroundColor: "#4970FA",
    color: "white",
    bottom: 60,
    margin: 1,
  },
  placeholderName: {

    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    //marginBottom: 1,
    marginRight: 140,
   
    marginTop: 10,
  },

  placeholderDesc: {

    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    //marginBottom: 1,
    marginRight: 105,
    marginBottom:-40,
    marginTop:40,
   
   // marginTop: ,
  },

  addText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },

  title: {
    //paddingHorizontal:11,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#4970FA",
  },
  courseName: {
    //position: "relative",
    justifyContent: "center",
    //alignItems: 'center',
    paddingHorizontal: 10, //inner text spacing
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    alignSelf:'center',

    borderWidth: 1,
    borderRadius: 10,
    width: 250,
    height: 40,

  },

  courseDesc: {
    marginTop:40,
    justifyContent: "center",
    alignSelf:'center',
    height: 200,
    width: 250,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 10,
   // marginBottom: 10,
    //paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor:'white',
    marginBottom:0,

  },

  inputContainerStyle: {
    paddingHorizontal: 40,
    margin: 10,
  },

  inputStyle: {
    borderWidth: 1,
  },

  categoryStyle: {
    alignItems: "center",
  },
  bottomContainer: {
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
    
  },

  saveButton: {
    
      alignSelf: "center",

      justifyContent: "center",
      alignItems: "center",

      paddingBottom: 5,
      position: "absolute",
      height: 50,
      width: 200,

      borderRadius: 50,
      backgroundColor: "#4970FA",
      color: "white",
      bottom: 50,
      margin: 1,
    
  },
});
