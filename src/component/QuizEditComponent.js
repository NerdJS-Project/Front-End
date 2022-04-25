import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Image,
    TouchableOpacity,
    Modal,
    Animated,
    TextInput,
} from "react-native";
import { COLORS, SIZES } from "../constants/themes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Button } from "react-native-elements";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { color } from "react-native-elements/dist/helpers";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';





export default function QuizEditComponent() {
    const data = [
        {
            id: 1,
            question: "What’s the biggest planet in our solar system?",
            options: ["Jupiter", "Saturn", "Neptune", "Mercury"],
            correct_option: 0,
        },
        {
            id: 2,

            question: "What attraction in India is one of the famus in the world?",
            options: ["Chand Minar", "Taj Mahal", "Stadium"],
            correct_option: 1,
        },
        {
            id: 3,

            question: "What land animal can open its mouth the widest?",
            options: ["Alligator", "Crocodile", "Baboon", "Hippo"],
            correct_option: 3,
        },
        {
            id: 4,

            question: "What is the largest animal on Earth?",
            options: [
                "The African elephant",
                "The blue whale",
                "The sperm whale",
                "The giant squid",
            ],
            correct_option: 1,
        },
        {
            id: 5,
            question: "What is the only flying mammal?",
            options: [
                "The bat",
                "The flying squirrel",
                "The bald eagle",
                "The colugo",
            ],
            correct_option: 0,
        },
    ];
    const isFocused = useIsFocused();

    const [quizData, setQuizData] = useState(data);
    const [initialData, setInitialData] = useState(data);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [deleteList, setDeleteList] = useState([]);

    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [dummyState, setDummyState] = useState(true);



    useEffect(() => {
        //your code here
        if (isFocused) {
            setQuizData(data)
        }

    }, [isFocused]);

    function updateQuizAnswerToParent(newAnswer, index) {
        let newQuizData = quizData;
        newQuizData[currentIndex].options[index] = newAnswer;
        if (newQuizData[currentIndex].changeType != "Created") {
            newQuizData[currentIndex].changeType = "Edited";
        }
        setQuizData(newQuizData);
    }

    function updateQuizQuestionToParent(newQuestion) {
        let newQuizData = quizData;
        newQuizData[currentIndex].question = newQuestion;
        if (newQuizData[currentIndex].changeType != "Created") {
            newQuizData[currentIndex].changeType = "Edited";
        }
        setQuizData(newQuizData);
    }

    function updateCorrectAnswer(index) {
        setCorrectAnswer(index);
        let newQuizData = quizData;
        newQuizData[currentIndex].changeType = "Edited";
        newQuizData[currentIndex].correct_option = index;
        setQuizData(newQuizData);


    }

    function onLeftArrowPressed() {
        if (currentIndex > 0) { 
            setCorrectAnswer(quizData[currentIndex - 1].correct_option);
            setCurrentIndex(currentIndex - 1);
         }
    }

    function onRightArrowPressed() {
        if (currentIndex < quizData.length - 1) { 
            setCorrectAnswer(quizData[currentIndex + 1].correct_option);

            setCurrentIndex(currentIndex + 1);
        }
    }


    function renderTopQuizHeader() {
        return (
            <View style={{
                marginVertical: 40,
            }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-around"
                    }}>
                    <Button
                        icon={{
                            name: "arrow-left",
                            type: 'font-awesome',
                            size: 15,
                            color: 'white'
                        }}
                        buttonStyle={styles.arrowButton}
                        containerStyle={styles.arrowButtonContainer}
                        onPress={onLeftArrowPressed}

                    >

                    </Button>
                    <Text>
                        {(currentIndex + 1) + " / " + quizData.length}
                    </Text>



                    <Button
                        icon={{
                            name: "arrow-right",
                            type: 'font-awesome',
                            size: 15,
                            color: 'white'
                        }}
                        buttonStyle={styles.arrowButton}
                        containerStyle={styles.arrowButtonContainer}
                        onPress={onRightArrowPressed}

                    >


                    </Button>



                </View>

            </View>
        )
    }

    function renderAnswersInput() {
        return (
            <View>
                {
                    quizData[currentIndex].options.map((answer, index) => (

                        <View
                            key={index}
                            style={{
                                flexDirection: "row",

                                justifyContent: "flex-start"
                            }}>

                            <View
                            style={{
                                width:50
                            }}></View>

                            <TextInput
                                key={answer}
                                style={styles.answerInput}
                                onChangeText={(newAnswer) => updateQuizAnswerToParent(newAnswer, index)}
                                defaultValue={answer}>

                            </TextInput>
                            <RadioButton
                                key={index}
                                value={index}
                                status={correctAnswer === index ? 'checked' : 'unchecked'}
                                onPress={() => updateCorrectAnswer(index)}

                            >

                            </RadioButton>

                        </View>


                    ))}
            </View>
        )
    }




    async function onSave() {

        await Promise.all(
            quizData.map(async (question) => {

                if (question.changeType == "Edited") {
                    console.log("This question has been changed: " + question.question);
                    //const response = await apiConnection.editModule(module.module_id, module.module_name, module.module_descrip, courseID)
                }
                else if (question.changeType == "Created") {
                    console.log("This question has been created: " + question.question)
                    //const response = await apiConnection.createModule(module.module_name, module.module_descrip, courseID);
                }
                else if (deleteList.includes(module.module_id)) {
                    console.log("This question has been deleted: " + module.module_name)

                    const response = await apiConnection.deleteModule(module.module_id);
                }


            })
        )
        await Promise.all(
            deleteList.map(async (deletedQuestionID) => {
                console.log("This question has been deleted: " + deletedQuestionID)

                //const response = await apiConnection.deleteModule(deleteModuleID);
            })
        )



    }

    function onDelete() {

        //If there are still lesson to be deleted
        if (quizData.length > 1) {
            if (quizData[currentIndex].changeType != "Created") {
                deleteList.push(quizData[currentIndex].id);
                setDeleteList(deleteList);
            }
            quizData.splice(currentIndex, 1);
            setQuizData(quizData);
            setCurrentIndex(0);
            setDummyState(!dummyState);


        }
        else{
            alert("Quiz must have at least one question");
        }
    }


    function onCreate() {

        let newQuizData = quizData;
        let newQuestion = {
            changeType: "Created",
            question: "New Question?",
            options: [
                "Option 1",
                "Option 2",
                "Option 3",
                "Option 4",
            ],
            correct_option: 0,
        }

        newQuizData.push(newQuestion);
        setQuizData(newQuizData);
        setCurrentIndex(currentIndex);
        setDummyState(!dummyState);

    }



    function renderBottomButtons() {
        return (
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <Button
                    title={"Add"}
                    icon={{
                        name: "plus",
                        type: 'font-awesome',
                        size: 15,
                        color: 'white'
                    }}
                    buttonStyle={[styles.arrowButton, {
                        backgroundColor: "rgb(128, 255, 0)"
                    }]}
                    containerStyle={[styles.arrowButtonContainer, {
                        width: 100,
                        marginHorizontal: 10
                    }]}
                    onPress={onCreate}

                >

                </Button>


                <Button
                    title={"Delete"}

                    icon={{
                        name: "trash",
                        type: 'font-awesome',
                        size: 15,
                        color: 'white'
                    }}
                    buttonStyle={[styles.arrowButton, {
                        backgroundColor: "	rgb(255, 0, 0)"
                    }]}
                    containerStyle={[styles.arrowButtonContainer, {
                        width: 100,
                        marginHorizontal: 10
                    }]}
                    onPress={onDelete}

                >

                </Button>


                <Button
                    title={"Save"}

                    icon={{
                        name: "save",
                        type: 'font-awesome',
                        size: 15,
                        color: 'white'
                    }}
                    buttonStyle={[styles.arrowButton, {
                        backgroundColor: "	rgb(0, 191, 255)"
                    }]}
                    containerStyle={[styles.arrowButtonContainer, {
                        width: 100,
                        marginHorizontal: 10
                    }]}
                    onPress={onSave}

                >

                </Button>

            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "rgb(179, 236, 255)" }}>
            {dummyState}
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />


            {renderTopQuizHeader()}

            <TextInput
                key={quizData[currentIndex].question}
                style={styles.questionInput}
                defaultValue={quizData[currentIndex].question}
                onChangeText={(newQuestion) => updateQuizQuestionToParent(newQuestion)}
            >
            </TextInput>
            {renderAnswersInput()}
            {renderBottomButtons()}


        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
    },

    userInfo: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: "500",
    },

    avatarShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 11
    },


    arrowButton: {
        backgroundColor: 'rgba(90, 154, 230, 1)',
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 30,
    },
    arrowButtonContainer: {
        width: 100,
        marginHorizontal: 50,
        marginVertical: 10,
    },



    questionInput: {
        height: 80,
        marginHorizontal: 10,
        marginVertical: 10,
        marginBottom: 30,
        borderWidth: 3,
        borderRadius: 10,

        borderColor: "rgb(0, 153, 255)",
        backgroundColor: COLORS.white,
    },

    answerInput: {
        flex: 1,
        height: 60,
        marginHorizontal: 5,
        marginVertical: 5,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "rgb(0, 153, 255)",
        backgroundColor: COLORS.white,
    },

    bioBox: {
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 0.2,
    },

    bioText: {
        marginTop: 10,
    },

    list: {
        textAlign: 'center',
        marginTop: 10,
        alignItems: 'center',
        fontWeight: "bold",
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
    },

    bottom: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        marginTop: 130
    },

    buttonContainer: {
        position: 'absolute',
        alignItems: "center",
        justifyContent: 'flex-end',
        right: 30,
        bottom: 30,
        flex: 1
    }

});
