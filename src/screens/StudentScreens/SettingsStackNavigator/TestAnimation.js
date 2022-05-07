import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import { useSpring, animated } from 'react-spring'


const AnimatedText = animated(Text);




export default function TestAnim () {
    const styles = useSpring({
        from: {
          fontSize: 10,
        },
        to: { 
          fontSize: 50,
         }
      })

      return (
          <AnimatedText style={{ ...styles }}>React Spring Animation</AnimatedText>
      );

}