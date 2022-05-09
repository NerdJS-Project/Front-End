import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { colors } from "react-native-elements";
import { useSpring, animated, useChain, useSpringRef } from "react-spring";

const AnimatedText = animated(Text);
const AnimatedView = animated(View);

export default function Welcome() {
  const textAnim = useSpring({
    from: {
      fontSize: 10,
    },
    to: {
      fontSize: 50,
    },
    animationDuration: 2000,
  });

  const viewAnim = useSpring({
    to: {
      backgroundColor: "#94c9ff",
      borderRadius: 4,
      borderWidth: 0,
    },

    from: {
      backgroundColor: colors.white,
      borderWidth: 1000,
      borderColor: colors.white,
    },
    animationDuration: 2000,
  });

  const teachAnim = useSpring({
    from: {
      fontSize: 1,
    },
    to: {
      fontSize: 50,
    },
    animationDuration: 2000,
    delay: 1000,
  });

  const learnAnim = useSpring({
    from: {
      fontSize: 1,
    },
    to: {
      fontSize: 50,
    },
    animationDuration: 2000,
    delay: 2000,
  });

  const studyAnim = useSpring({
    from: {
      fontSize: 1,
    },
    to: {
      fontSize: 50,
    },
    animationDuration: 2000,
    delay: 3000,
  });

  return (
    <AnimatedView
      style={{
        flex: 1,
        ...viewAnim,
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <AnimatedText style={{ 
            fontWeight: "bold",

            ...textAnim }}>Welcome!</AnimatedText>

        <AnimatedText style={{ 
            marginRight: "50%",
            marginTop: "30%",
            fontWeight: "bold",
            fontFamily: "Cochin",
            
            ...teachAnim }}>Teach</AnimatedText>

        <AnimatedText style={{ 
            marginTop: "30%",
            fontWeight: "bold",
            fontFamily: "Cochin",
            ...learnAnim }}>Learn</AnimatedText>
        
        <AnimatedText style={{ 
            marginRight: "-50%",
            marginTop: "30%",
            fontWeight: "bold",
            fontFamily: "Cochin",

            ...studyAnim }}>Study</AnimatedText>
      </View>
    </AnimatedView>
  );
}

const styles = StyleSheet.create({
    baseText: {
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "Cochin"

    }
  });