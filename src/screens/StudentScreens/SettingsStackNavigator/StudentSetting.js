import React, { useState, useContext } from 'react';

import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import QuizComponent from '../../../component/QuizComponent';


export default function StudentSetting({}) {
return (
    <View>
    <QuizComponent></QuizComponent>
    <Text>Student Setting</Text>

    </View>
)



}