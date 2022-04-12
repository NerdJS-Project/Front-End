import React, { useState } from "react";
import {
  View,
  Picker,
  Text,
  Alert,
  StyleSheet,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Authentication from "../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLinkProps } from "@react-navigation/native";

export default function ModuleEditComponent({ allData, setData, lessonData }) {
  const [ModuleName, setModuleName] = useState(lessonData.module_name);
  const moduleID = lessonData.module_id;

  function updateModuleNameToParent(newModuleName) {
    let index = allData.findIndex((module) => module.module_id === moduleID);
    let newAllData = allData;
    newAllData[index].module_name = newModuleName;
    //mark that this module has been edited
    if (newAllData[index].changeType != "Created") {
      newAllData[index].changeType = "Edited";
    }
    setData(newAllData);
  }

  function deleteModule() {
    let newAllData = allData.filter((module) => module.module_id !== moduleID);
    console.log("New deleted data is" + newAllData);
    setData(newAllData);
  }

  function getLessonsView() {
    const result = [];

    for (let i = 0; i < lessonData["lessons"].length; i++) {
      result.push(
        <TouchableOpacity key={i} style={[styles.button]}>
          <Text style={[styles.buttonLabel]}>
            {lessonData["lessons"][i].lesson_name}
          </Text>
        </TouchableOpacity>
      );
    }
    return result;
  }

  return (
    <View style={styles.backgroundCard}>
      <View style={styles.row}>
        <TextInput
          style={styles.textInput}
          placeholder={lessonData["Module"]}
          onChangeText={(newText) => updateModuleNameToParent(newText)}
          defaultValue={ModuleName}
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => deleteModule()}
        >
         <Icon name="delete" size={30} color="#e33057" />
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {getLessonsView()}
      </View>

      <View>
        <TouchableOpacity
          style={{
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
              color: "coral",
              paddingBottom: 10,
            }}
          >
            Add Lesson+
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  textInput: {
    height: 40,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "#91d6d9",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    margin: 6,
    shadowColor: "black",
    elevation: 10,
    borderWidth: 1,
    fontSize: 12,
    fontWeight: "500",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
  backgroundCard: {
    margin: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    borderWidth: 1,

    color: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },

  
});
