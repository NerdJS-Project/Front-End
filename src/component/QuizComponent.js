import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  Modal,
  Animated,
} from "react-native";
import { COLORS, SIZES } from "../constants/themes";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Icon } from "react-native-elements/dist/icons/Icon";
import APIConnection from "../utility/APIConnection";
import { useIsFocused } from "@react-navigation/native";

export default function QuizComponent({unitID, navigation}) {



  const data = [
    {
      quizdata_id: 1,
      quizdata_question: "Quiz loading...",
      quizdata_answers: ["Quiz loading...", "Quiz loading...", "Quiz loading...", "Quiz loading..."],
      correct_option: 0,
    },
    {
      quizdata_id: 2,
      quizdata_question: "Quiz loading...",
      quizdata_answers: ["HI...", "Quiz loading...", "Quiz loading...", "Quiz loading..."],
      correct_option: 1,
    },
    {
      quizdata_id: 3,
      quizdata_question: "Quiz loading...",
      quizdata_answers: ["Quiz loading...", "Quiz loading...", "Quiz loading...", "Quiz loading..."],
      correct_option: 2,
    },
    {
      quizdata_id: 4,
      quizdata_question: "Quiz loading...",
      quizdata_answers: ["Quiz loading...", "Quiz loading...", "Quiz loading...", "Quiz loading..."],
      correct_option: 3,
    }
  ];









  const [allQuestions, setAllQuestions] = useState(data);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);




//not needed, just being used for printing
  const [iQuizData, setIQuizData] = useState();
// also not needed as well
  const [quizID, setQuizID] = useState();
  const isFocused = useIsFocused();



  const apiConnection = new APIConnection();
  useEffect(() => {

  
      async function fetchMyAPI() {
          let response = await apiConnection.getUnitQuizContent(unitID);
          if(response.status == 400)
          {
            //do nothing, for now
              

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

      setAllQuestions(json);
  }














  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]["correct_option"];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if (selectedOption == correct_option) {
      // Set Score
      setScore(score + 1);
    }
    // Show Next Button
    setShowNextButton(true);
  };
  const handleNext = () => {
    if (currentQuestionIndex == allQuestions.length - 1) {
      // Last Question
      // Show Score Modal
      setShowScoreModal(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentOptionSelected(null);
      setCorrectOption(null);
      setIsOptionsDisabled(false);
      setShowNextButton(false);
    }
    Animated.timing(progress, {
      toValue: currentQuestionIndex + 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const restartQuiz = () => {
    setShowScoreModal(false);

    setCurrentQuestionIndex(0);
    setScore(0);

    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionsDisabled(false);
    setShowNextButton(false);
    Animated.timing(progress, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };


  async function saveProgressAndNext()
  {
    await apiConnection.postProgress(unitID);
    setShowScoreModal(false);

  }

  const renderQuestion = () => {
    return (
      <View
        style={{
          marginVertical: 40,
        }}
      >
        {/* Question Counter */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              opacity: 0.6,
              marginRight: 2,
            }}
          >
            {currentQuestionIndex + 1}
          </Text>
          <Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
            / {allQuestions.length}
          </Text>
        </View>

        {/* Question */}
        <Text
          style={{
            color: COLORS.white,
            fontSize: 30,
          }}
        >
          {allQuestions[currentQuestionIndex]?.quizdata_question}
        </Text>
      </View>
    );
  };
  const renderOptions = () => {
    return (
      <View>
        {allQuestions[currentQuestionIndex]?.quizdata_answers.map((option, index) => (
          <TouchableOpacity
            onPress={() => validateAnswer(index)}
            disabled={isOptionsDisabled}
            key={index}
            style={{
              borderWidth: 3,
              borderColor:
                index == correctOption
                  ? COLORS.success
                  : index == currentOptionSelected
                    ? COLORS.error
                    : COLORS.secondary + "40",
              backgroundColor:
                index == correctOption
                  ? COLORS.success + "20"
                  : index == currentOptionSelected
                    ? COLORS.error + "20"
                    : COLORS.secondary + "20",
              height: 60,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              marginVertical: 10,
            }}
          >
            <Text style={{ fontSize: 20, color: COLORS.white }}>{option}</Text>

            {/* Show Check Or Cross Icon based on correct answer*/}
            {index == correctOption ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.success,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="check"
                  iconStyle={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : index == currentOptionSelected ? (
              <View
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 30 / 2,
                  backgroundColor: COLORS.error,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="close"
                  iconStyle={{
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null}
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: "100%",
            backgroundColor: COLORS.accent,
            padding: 20,
            borderRadius: 5,
          }}
        >
          <Text
            style={{ fontSize: 20, color: COLORS.white, textAlign: "center" }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };
  //--------------------Progress Bar-----------------
  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, allQuestions.length],
    outputRange: ["0%", "100%"],
  });
  const renderProgressBar = () => {
    return (
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: "#00000020",
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: COLORS.accent,
            },
            {
              width: progressAnim,
            },
          ]}
        ></Animated.View>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
        }}
      >
        {/* ProgressBar */}
        {renderProgressBar()}

        {/* Question */}
        {renderQuestion()}

        {/* Options */}
        {renderOptions()}

        {/* Next Button */}
        {renderNextButton()}

        {/* Score Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showScoreModal}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: COLORS.white,
                width: "90%",
                borderRadius: 20,
                padding: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                {score > allQuestions.length / 2 ? "Congratulations!" : "Oops!"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  marginVertical: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 30,
                    color:
                      score > allQuestions.length / 2
                        ? COLORS.success
                        : COLORS.error,
                  }}
                >
                  {score}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: COLORS.black,
                  }}
                >
                  / {allQuestions.length}
                </Text>
              </View>
              {/* Retry Quiz button */}
              <TouchableOpacity
                onPress={restartQuiz}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 20,
                  width: "100%",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                >
                  Retry Quiz
                </Text>
              </TouchableOpacity>
              {/* Save Progress button */}

              <TouchableOpacity
                onPress={() =>saveProgressAndNext()}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 20,
                  width: "100%",
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.white,
                    fontSize: 20,
                  }}
                >
                  Save Progress
                </Text>
              </TouchableOpacity>





            </View>
          </View>
        </Modal>

        {/* Background Image */}
        {/* <Image
                source={require('../assets/images/DottedBG.png')}
                style={{
                    width: SIZES.width,
                    height: 130,
                    zIndex: -1,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    opacity: 0.5
                }}
                resizeMode={'contain'}
                /> */}
      </View>
    </SafeAreaView>
  );
}
