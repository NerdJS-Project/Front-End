import React, { useEffect, useState } from "react";
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
  ScrollView,
} from "react-native";
import Authentication from "../../../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import ModuleEditComponent from "../../../component/ModuleEditComponent";
import { useIsFocused } from "@react-navigation/native";
import APIConnection from "../../../utility/APIConnection";
import { FAB } from "react-native-elements";
export default function EditModuleScreen({ navigation, route }) {
  const { courseID, courseName } = route.params;

  //-----------API Connection Code----------
  const isFocused = useIsFocused();

  const [finalData, setFinalData] = useState([]);
  const [stateData, setStateData] = useState([]);

//--------for some reason i have to have these force update code to force a rerender-----
  const [, updateState] = React.useState();
const forceUpdate = React.useCallback(() => updateState({}), []);
//--------------no idea why but this fixed it----------

  const apiConnection = new APIConnection();
  useEffect(() => {
    if (isFocused) {
      apiConnection
        .getModulesAndLessonInstructorCourseViewScreen(courseID)
        .then((json) => {
          setFinalData(json);
          setStateData(json);
        });
    }
  }, [isFocused]);
  //---------------------------------------

  async function onSave() {
    console.log("On save pressed, this new all data is:" + stateData);
    
//find which module is needed to delete
    const deleteList = [];
    for(let i = 0; i < finalData.length; i++)
    {
      let tobeDeleted = true;
      for(let j = 0; j < stateData.length; j++)
      {
        if(finalData[i].module_id == stateData[j].module_id)
        {
          tobeDeleted = false;
          break;
        }

      }
      if(tobeDeleted == true){
        deleteList.push(finalData[i].module_id)
      }
    }


     await Promise.all(
      stateData.map(async (module) => {

        if(module.changeType == "Edited") {
          console.log("This module has been changed: " + module.module_name);
          const response = await apiConnection.editModule(module.module_id, module.module_name, module.module_descrip, courseID)
        }
        else if (module.changeType == "Created") {
          console.log("This module has been created: " + module.module_name)
          const response = await apiConnection.createModule(module.module_name, module.module_descrip, courseID);
        }
        else if (deleteList.includes(module.module_id))
        {
          console.log("This module has been deleted: " + module.module_name)

          const response = await apiConnection.deleteModule(module.module_id);
        }


      })
    )

  }



  function addNewModule()
  {
    let newEmptyModule = {
    "module_id": null,
    "changeType": "Created",
    "module_name": "New Module",
    "module_descrip": "new description",
    "instructor_id": null,
    "lessons": []
    }

    let newStateData = stateData;
    newStateData.push(newEmptyModule);
    setStateData(newStateData);
    

    forceUpdate()

  }

  function getModuleView() {
    const result = [];
    for (let i = 0; i < stateData.length; i++) {
      result.push(
        <ModuleEditComponent
          key={i}
          allData={stateData}
          setData={setStateData}
          lessonData={stateData[i]}
        ></ModuleEditComponent>
      );
    }
    return result;
  }


  return (
    <ScrollView>
      <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <Text style={styles.label}>Edit Modules</Text>
      <ScrollView>{getModuleView()}</ScrollView>
      
      <Button
        onPress={() => onSave()}
        title="Save"
        titleStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "rgba(90, 154, 230, 1)",
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 100,
        }}
        containerStyle={{
          width: 100,
          marginHorizontal: 50,
          marginVertical: 10,
          paddingHorizontal: 200,
          paddingTop: 40,
        }}
      />
      
      
    </View>
    <FAB 
      style={styles.fab}
      icon={{
        name: 'add',
        color: 'white',
      }}
        color="blue"
        onPress={() =>addNewModule()}
        >

      </FAB>
    </ScrollView>

    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
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
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
