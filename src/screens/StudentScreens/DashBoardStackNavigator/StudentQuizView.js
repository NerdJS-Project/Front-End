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
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Button } from "react-native-elements";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { color } from "react-native-elements/dist/helpers";
import { useIsFocused } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import APIConnection from "../../../utility/APIConnection";
import QuizComponent from "../../../component/QuizComponent";




export default function StudentQuizView({ navigation, route }) {
    const {unitID, unitName} = route.params;






    return(
        <View>
            <QuizComponent
            unitID={unitID}
            ></QuizComponent>
        </View>
    )



}