import React, { Children, useState, useContext, useEffect, useLayoutEffect } from 'react';
import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import CourseGridCard from '../../../component/CourseGridCard';
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";
import { useTransition, animated } from 'react-spring/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import QuizEditComponent from '../../../component/QuizEditComponent';


const AnimatedView = animated(View);



export default function InstructorQuizEdit({ navigation, route, quizJSONData, setQuizJSONData }) {
    const {unitID, unitName} = route.params;

return(
    <View >
        <QuizEditComponent
        unitID={unitID}
        navigation={navigation}
        >

        </QuizEditComponent>

    </View>
)

}