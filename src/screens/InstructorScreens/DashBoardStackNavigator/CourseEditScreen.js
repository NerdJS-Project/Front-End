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
  ScrollView,
} from "react-native";
import Authentication from "../../../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import APIConnection from "../../../utility/APIConnection";
import { TextInput } from "react-native-paper";
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
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          label="Course Name"
          value={courseName}
          onChangeText={(text) => setClassName(text)}
        />

        <View></View>

        <TextInput
          style={{
            borderWidth: 1,
            height: 200,
            borderRadius: 20,
          }}
          label="Course Description"
          value={courseDescription}
          onChangeText={(text) => setCourseDescription(text)}
        />

        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={() => onSave()}>
            <View style={styles.addBttn}>
              <Text style={styles.addText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
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
    bottom: 50,
    margin: 1,
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
    flex: 1,
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
