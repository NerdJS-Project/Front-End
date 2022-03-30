import React, { useState } from 'react';
import { View, Picker, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import Authentication from "../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLinkProps } from '@react-navigation/native';


export default function ModuleEditComponent({ navigation, lessonData }) {

    const [ModuleName, setModuleName] = useState(lessonData["Module"]);



    function getLessonsView() {
        const result = [];
        console.log(lessonData)

        for (let i = 0; i < lessonData["lessons"].length; i++) {
            console.log(lessonData["lessons"][i])
            result.push(
                <TouchableOpacity
                    key={i}
                    style={[
                        styles.button,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonLabel,
                        ]}
                    >
                        {lessonData["lessons"][i]}
                    </Text>
                </TouchableOpacity>
            )

        }
        return result;

    }



    return (
        <View style={{ backgroundColor: "white" }}>
            <TextInput
                style={styles.textInput}
                placeholder={lessonData["Module"]}
                onChangeText={newText => setModuleName(newText)}
                defaultValue={ModuleName}
            />
            <View style={{
                flexDirection: "row",
                flexWrap: "wrap",
            }}>
                {getLessonsView()}

            </View>

            <View>
                <TouchableOpacity style={{
                    alignSelf: "center"
                }}>
                    <Text
                        style={
                            {
                                fontSize: 12,
                                fontWeight: "500",
                                color: "coral",
                                paddingBottom: 10
                            }
                        }
                    >
                        Add Lesson+
                    </Text>
                </TouchableOpacity>
            </View>

        </View>



    )


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
        marginBottom: 6,
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
});


