import { useIsFocused } from "@react-navigation/native";
import React, { Children, useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import APIConnection from "../../../utility/APIConnection";

export default function StudentClassSearchScreenTest({ navigation }) {
  //-------------------API Fetch code-------------------------

  const isFocused = useIsFocused();

  const [data, setData] = useState([]);

  const apiConnection = new APIConnection();


  //--------------------------------------------

  function searchAPI(keyword) {
    apiConnection.getSearchClassResultSearchScreen(keyword).then((json) => {
      console.log("Class search debug " + json);

      setData(json);
    });
  }
  function onCoursePress(course_id, course_name, course_descrip) {
    navigation.navigate("Dashboard",
      {
        screen: 'Course Description',
        params: { 
          class_id: course_id, 
          class_name: course_name, 
          class_descrip: course_descrip }
      })
      
  }

  const [searchTerm, setSearchTerm] = useState("Trigonometry");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={search.searchHolder}
          placeholder={"Enter Class"}
          onChangeText={(newText) => setSearchTerm(newText)}
          defaultValue={searchTerm}
        />

        <TouchableOpacity onPress={() => searchAPI(searchTerm)}>
          <View style={search.searchBttn}>
            <Text style={search.searchText}>Search</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.title}> Discover Classes </Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* { {Data.filter((val)=>{
            if (searchTerm == "") {
              return val
            } else if (val.CourseTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
              return val
            } 
            


          }).map((item,key) => {
            return (
            <TouchableOpacity key={key}> 
              <Text style = {styles.boxes}>
                {item.CourseTitle}
              </Text>
            </TouchableOpacity>
            )})} }  */}

        {data.length > 0 && data.map((item, key) => {
          return (
            <TouchableOpacity key={key}
              onPress={() => onCoursePress(item.class_id, item.class_name, item.class_descrip)}
            >
              <Text style={styles.boxes}>
                {item.class_name + item.class_descrip + item.instructor_name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  content: {
    alignItems: "center",
  },

  title: {
    //paddingHorizontal:11,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "black",

    marginTop: 50,
    marginBottom: 50,
    //top: 100
    // bottom: 1000
  },

  boxes: {
    //padding: 30,
    marginTop: 10,

    backgroundColor: "white",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    borderRadius: 10,
    width: 300,
    height: 200,
    textAlign: "center",

    alignItems: "center",

    //top: 10,
  },
});

const search = StyleSheet.create({
  searchHolder: {
    position: "relative",
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    borderColor: "#C0C0C0",
    bottom: 0,
    borderWidth: 1,
    borderRadius: 60,
    width: 250,
    marginTop: 100,
    right: 50,
  },

  searchBttn: {
    width: 100,
    position: "absolute",
    //height: 60,
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: "#4970FA",
    //marginTop: 10,
    //top: 10,
    //textAlign: 'center',
    color: "white",
    //color: 'white',
    alignItems: "center",
    left: 80,
    bottom: 0,

    //bottom: 45
  },

  searchText: {
    color: "white",
    //fontSize: 22,
    fontWeight: "bold",
  },
});
