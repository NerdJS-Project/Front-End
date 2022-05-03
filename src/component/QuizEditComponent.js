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
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import APIConnection from "../utility/APIConnection";





export default function QuizEditComponent({navigation, unitID}) {


    const invalidChars = ["'", '"']

    const initialdata = [
        {
            changeType: "Created",
            quizdata_id: 1,
            quizdata_question: "Default Value",
            quizdata_answers: ["Default Value", "Default Value", "Default Value", "Default Value"],
            correct_option: 0,
        }
    ];

    const isFocused = useIsFocused();

    const [quizData, setQuizData] = useState([
        {
            changeType: "Created",
            quizdata_id: 1,
            quizdata_question: "Default Value",
            quizdata_answers: ["Default Value", "Default Value", "Default Value", "Default Value"],
            correct_option: 0,
        }
    ]);    
    

    //used for posting and editting quiz
    const [quizID, setQuizID] = useState();

    const [currentIndex, setCurrentIndex] = useState(0);
    const [deleteList, setDeleteList] = useState([]);

    const [correctAnswer, setCorrectAnswer] = useState(0);
    const [dummyState, setDummyState] = useState(true);



//----------------------------------------------------------------------------------
    const [iQuizData, setIQuizData] = useState();


    const apiConnection = new APIConnection();
    useEffect(() => {

    
        async function fetchMyAPI() {
            let response = await apiConnection.getUnitQuizContent(unitID);
            if(response.status == 400)
            {
                //empty unit that needs a new quiz
                await apiConnection.createNewQuizForUnit(unitID);
                response = await apiConnection.getUnitQuizContent(unitID);

            }
            response = await response.json();

            setQuizID(response[0].quiz_id);

            let quizDataResponse = await apiConnection.getQuizData(response[0].quiz_id);

            if(quizDataResponse.status == 400)
            {
                // do nothing
            }
            else {
                quizDataResponse = await quizDataResponse.json();

                setIQuizData(quizDataResponse);
                processJSON(quizDataResponse);
                console.log("Quiz data fetched is: " + iQuizData)
            }

          }

          if(isFocused) {
            fetchMyAPI();


        }

    }, [isFocused]);



    function processJSON(quizDataResponse)
    {
        let json = quizDataResponse;
        for(let i = 0; i < quizDataResponse.length; i++)
        {
            let answers = quizDataResponse[i].quizdata_answers;
            answers = answers.replace(/[']+/g, '"');
            let answersJson = JSON.parse(answers);
            json[i].quizdata_answers = answersJson.choices;
            json[i].correct_option = answersJson.answer;

            console.log("Quiz data answers" + answersJson.type + answersJson[0]);
            console.log("Quiz data answers array" + ["hi", "There", "Cutie"]);



        }

        setQuizData(json);
    }





    function updateQuizAnswerToParent(newAnswer, index) {
        let newQuizData = quizData;
        newQuizData[currentIndex].quizdata_answers[index] = newAnswer;
        if (newQuizData[currentIndex].changeType != "Created") {
            newQuizData[currentIndex].changeType = "Edited";
        }
        setQuizData(newQuizData);
    }

    function updateQuizQuestionToParent(newQuestion) {
        let newQuizData = quizData;
        newQuizData[currentIndex].quizdata_question = newQuestion;
        if (newQuizData[currentIndex].changeType != "Created") {
            newQuizData[currentIndex].changeType = "Edited";
        }
        setQuizData(newQuizData);
    }

    function updateCorrectAnswer(index) {
        setCorrectAnswer(index);
        let newQuizData = quizData;
        if (newQuizData[currentIndex].changeType != "Created") {
            newQuizData[currentIndex].changeType = "Edited";
        }
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

                    quizData[currentIndex].quizdata_answers.map((answer, index) => (

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

        let valid = true;
        for(let i = 0; i < quizData.length; i++)
        {
            //combining all string in quiz to do test at once
            let allStringInQuestion = quizData[i].quizdata_question;

            for(let i2 = 0; i2 < quizData[i].quizdata_answers.length; i2++)
            {
                allStringInQuestion += quizData[i].quizdata_answers[i2];
            }


            for(let j = 0; j < invalidChars.length; j++)
            {
                if(allStringInQuestion.includes(invalidChars[j]))
                {
                    alert("Your quiz data contain invalid characters such as ' or '', please remove them and try again");
                    valid = false;
                }

            }
        }

        if(valid){

        
        await Promise.all(
            quizData.map(async (question) => {

                if (question.changeType == "Edited") {
                    question.changeType == "None";
                    console.log("This question has been changed: " + question.quizdata_question);
                    let quizdata_answersTemporary = {
                        answer: 0,
                        choices: ["test", "test", "test", "test"]
                    }
                    quizdata_answersTemporary.answer = question.correct_option;
                    quizdata_answersTemporary.choices = question.quizdata_answers;
                    let string1 = JSON.stringify(quizdata_answersTemporary);
                    string1 = string1.replace(/["]+/g, "'");
                    const response = await apiConnection.editQuizData(quizID,question.quizdata_id, question.quizdata_question, string1);
                }
                else if (question.changeType == "Created") {
                    question.changeType == "None";

                    console.log("This question has been created: " + question.quizdata_question)
                    let quizdata_answersTemporary = {
                        answer: 0,
                        choices: ["test", "test", "test", "test"]
                    }
                    quizdata_answersTemporary.answer = question.correct_option;
                    quizdata_answersTemporary.choices = question.quizdata_answers;
                    let string1 = JSON.stringify(quizdata_answersTemporary);
                    string1 = string1.replace(/["]+/g, "'");

                    const response = await apiConnection.createQuizData(quizID, question.quizdata_question, string1);
                }
                


            })
        )
        await Promise.all(
            deleteList.map(async (deletedQuestionID) => {
                console.log("This question has been deleted: " + deletedQuestionID)

                const response = await apiConnection.deleteQuizData(quizID, deletedQuestionID);

            })
        )
        setDeleteList([]);

        navigation.goBack();
    }



    }

    function onDelete() {

        //If there are still lesson to be deleted
        if (quizData.length > 1) {
            if (quizData[currentIndex].changeType != "Created") {
                deleteList.push(quizData[currentIndex].quizdata_id);
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
            quizdata_question: "New Question?",
            quizdata_answers: [
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
                key={quizData[currentIndex].quizdata_question}
                style={styles.questionInput}
                defaultValue={quizData[currentIndex].quizdata_question}
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
