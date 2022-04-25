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




export default function StudentQuizView({ navigation, route }) {
    const {unitID, unitName} = route.params;




    const [data, setData] = useState([]);

    const apiConnection = new APIConnection();
    const isFocused = useIsFocused();




    useEffect(() => {
        //your code here
        if (isFocused) {
            apiConnection.getUnitContent(unitID).then((json) => {
                setData(json);
                let newVideoData = json.unit_content;
                setUnitContent(newVideoData);
            })


        }

    }, [isFocused]);


    

    return(
        <View>
            
        </View>
    )



}