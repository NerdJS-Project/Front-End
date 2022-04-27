import React, { useState } from "react";
import {
    View,
    Picker,
    Text,
    Alert,
    StyleSheet,
    Button,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    TouchableOpacity,
} from "react-native";
import Authentication from "../utility/Authentication";
import { Input, Icon, ButtonGroup, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLinkProps } from "@react-navigation/native";
import ModuleEditComponent from "./ModuleEditComponent";
import { useTransition, animated } from 'react-spring/native'


const AnimatedView = animated(View);


export default function ModuleEditComponentContainer({ stateData, setStateData, navigation }) {

    //take in 3 arguments

    const transition = useTransition(stateData, stateData => stateData.module_id, {
        from: { opacity: 0, x: -100, y: 800 },
        enter: { opacity: 1, x: 0, y: 0 }

    })


    return (
        <View>
            {stateData.map((module,key) => (
                    <ModuleEditComponent

                        key={key}
                        allData={stateData}
                        setData={setStateData}
                        lessonData={module}
                        navigation={navigation}>

                    </ModuleEditComponent>

            ))

            }
        </View>
    )

}