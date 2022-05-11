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
      backgroundColor: "#ccf7ff",
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
        <View
          style={{
            backgroundColor: "#002cad",
            borderRadius: 30,
            marginTop: 100,
          }}>
          <AnimatedText style={{
            fontWeight: "bold",
            padding: 20,
            color: "#ffad9e",


            ...textAnim
          }}>Welcome!</AnimatedText>
        </View>




        <View style={{
          backgroundColor: "#7dffe7",
          borderRadius: 30,
          marginRight: "50%",
          marginTop: "5%",
        }} >

          <AnimatedText style={{
           color: "#d63e22",
           padding: 20,

            ...teachAnim
          }}>Teach</AnimatedText>
        </View>

        <View style={{
          backgroundColor: "#94ffb6",
          borderRadius: 30,
          marginTop: "5%",

        }}>

          <AnimatedText style={{
                        padding: 20,
                        color: "#437309",

            ...learnAnim
          }}>Learn</AnimatedText>
        </View>





        <View style={{
          backgroundColor: "#fdff82",
          borderRadius: 30,
          marginRight: "-50%",
          marginTop: "5%",
        }}>

          <AnimatedText style={{
                       padding: 20,

                       color: "#6b0461",

            ...studyAnim
          }}>Study</AnimatedText>
        </View>

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