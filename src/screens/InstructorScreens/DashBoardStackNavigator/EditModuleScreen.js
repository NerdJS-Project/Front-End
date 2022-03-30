import React, { useState } from 'react';
import { View, Picker, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Authentication from "../../../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import ModuleEditComponent from '../../../component/ModuleEditComponent';

export default function EditModuleScreen({ navigation }) {

    let lessonData = [{
        "Module": "Module 1: Intro To Math",
        "lessons": [
            "Lesson 1: Addition",
            "Lesson 2: Subtraction",
            "Lesson 3: Multiplication",
            "Lesson 4: Division",
            "Lesson 5: Finding Integral",
            "Lesson 6: Finding the derivative"
        ]
    }, {
        "Module": "Module 2: New Concepts",
        "lessons": [
            "Lesson 1: Right Hand Rule",
            "Lesson 2: Subtraction",
            "Lesson 3: Multiplication"
        ]
    }, {
        "Module": "Module 1: Intro To Math",
        "lessons": [
            "Lesson 1: Addition",
            "Lesson 2: Subtraction",
            "Lesson 3: Multiplication",
            "Lesson 4: Division",
            "Lesson 5: Finding Integral",

        ]
    }]


    function getModuleView() {
        const result = [];
        for (let i = 0; i < lessonData.length; i++) {
            result.push(
                <ModuleEditComponent 
                key={i} 
                lessonData={lessonData[i]}>

                </ModuleEditComponent>
            )

        }
        return result;

    }


    return (
        <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
            <Text style={styles.label}>Edit Modules</Text>
            <View >

                {getModuleView()}

            </View>

            <Button
                title="Save"
                
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 100,
                }}
                containerStyle={{
                  width: 100,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  paddingHorizontal: 200,
                  paddingTop: 40
                }}
              />
            
        </View>
        
    )


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
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
      },
      subHeader: {
        backgroundColor : "#2089dc",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
      }
  });