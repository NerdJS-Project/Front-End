import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Picker, Text, Alert, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, ScrollView } from "react-native";
import Authentication from "../../../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import APIConnection from '../../../utility/APIConnection';
import { TextInput } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';


export default function CourseEditScreen({ route, navigation }) {

    const { courseID, courseName } = route.params;

    const [className, setClassName] = useState(courseName);
    const [courseDescription, setCourseDescription] = useState('');

    const [selectedCourseTypeIndex, setSelectedCourseTypeIndex] = useState(0);
    const [selectedCourseCategoryValue, setSelectedCourseCategoryValue] = useState("Other");

    const categoryData = ["Mathematic", "Physics", "English", "Computer Science", "Other"];

    const apiConnection = new APIConnection();
    const isFocused = useIsFocused();



    useEffect(() => {

        if (isFocused) {
            apiConnection.getClassByID(courseID).then((json) => {
                setCourseDescription(json.result.class_descrip);
            })

        }

    }, [isFocused]);




    function getCategoryPickerItems() {
        console.log("Route debug:", courseID, courseName, "route: ", route)
        let result = []
        for (let i = 0; i < categoryData.length; i++) {
            result.push(
                <Picker.Item key={i} label={categoryData[i]} value={categoryData[i]} />

            )
        }
        return result
    }

    async function onSave() {
        await apiConnection.editCourseForInstructor(courseID, className, courseDescription);
        navigation.goBack();
    }


    return (
        <ScrollView>
            <View style={{ backgroundColor: "white", flex: 1 }}>
                
                <TextInput
                    style={styles.inputStyle}

                    label="Course Name"
                    defaultValue={courseName}
                    onChangeText={text => setClassName(text)}
                />

                <ButtonGroup
                    containerStyle={{ margin: 40 }}
                    buttons={['Open', 'Closed', 'Payed']}
                    selectedIndex={selectedCourseTypeIndex}
                    onPress={(value) => {
                        setSelectedCourseTypeIndex(value);
                    }}
                />

                <View>
                    <Text>Category</Text>
                    <Picker
                        selectedValue={selectedCourseCategoryValue}
                        label="Category"
                        style={{
                            alignItems: 'center',
                            marginLeft: 40,
                            marginRight: 30

                        }}
                        onValueChange={(itemValue, itemIndex) => setSelectedCourseCategoryValue(itemValue)}
                    >

                        {getCategoryPickerItems()}

                    </Picker>

                </View>
              
                 <TextInput
                    style={{
                        borderWidth: 1,
                        height: 200,
                        borderRadius: 20
                    }}

                    label="Course Description"
                    value={courseDescription}
                    onChangeText={text => setCourseDescription(text)}
                />

                <Divider width={5} color={'#27A9FF'} style={{ marginBottom: 40 }} />

                <Button

                    onPress={() => onSave()}
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
            </View></ScrollView>
    )


}



const styles = StyleSheet.create({
    container: {
        //alignSelf: 'stretch',
        flex: 1,

        backgroundColor: '#E8EAED',
        alignItems: 'center',
        paddingTop: 0

    },


    title: {
        //paddingHorizontal:11,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        color: '#4970FA'



    },

    inputContainerStyle: {
        paddingHorizontal: 40,
        margin: 10
    },

    inputStyle: {
        borderWidth: 1,
    },

    categoryStyle: {
        alignItems: 'center'

    }
})

