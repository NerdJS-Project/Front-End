import { useIsFocused } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { Avatar } from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import APIConnection from "../../../utility/APIConnection";

export default function InstructorProfile({}) {
    const isFocused = useIsFocused();
    const [data, setData] = useState([]);
    const [classData, setClassData] = useState([]);
    const apiConnection = new APIConnection();

    useLayoutEffect(() => {
        if (isFocused) {
        apiConnection.getUserForProfilePage().then((json) => {
            setData(json);
        });
        apiConnection.getClasses().then((json) => {
            setClassData(json);
        });
        }
    }, [isFocused]);

    return (
        <Text>Edit Profile</Text>
    );
}