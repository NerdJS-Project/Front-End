import React, { Children, useState, useContext, useEffect, useLayoutEffect } from 'react';
import { View, Text, Alert, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions, KeyboardAvoidingView, Platform, TouchableOpacity, FlatList } from "react-native";
import CourseGridCard from '../../../component/CourseGridCard';
import { AuthContext } from '../../../store/AuthContext';
import APIConnection from '../../../utility/APIConnection';
import { useIsFocused } from "@react-navigation/native";
import { useTransition, animated } from 'react-spring/native'
import InstructorQuizEdit from './InstructorEditQuiz';
import CreateContent from './CreateContentScreen';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();


export default function TabInstructorCourseEdit({ navigation, route }) {


    //const {unitID, unitName} = route.params;
    const unitID = 93;
    const unitName = "Unit name";


    return (
        <Tab.Navigator>
            <Tab.Screen name="Edit Content" component={CreateContent} initialParams={{unitID, unitName}} />
            <Tab.Screen name="Edit Quiz" component={InstructorQuizEdit}  initialParams={{unitID, unitName}} />
        </Tab.Navigator>
    );

}