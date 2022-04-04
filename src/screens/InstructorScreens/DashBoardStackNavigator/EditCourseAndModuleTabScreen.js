import React from 'react';
import { Text, TabView } from 'react-native-elements';
import CourseEditScreen from './CourseEditScreen';
import EditModuleScreen from './EditModuleScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ModuleEditComponent from '../../../component/ModuleEditComponent';


const Tab = createMaterialTopTabNavigator();


export default function EditCourseAndModuleTabScreen({ route, navigation }) {

    const {courseID, courseName} = route.params;

    return (
        <Tab.Navigator>
            <Tab.Screen name="Course Edit" component={CourseEditScreen} initialParams={{courseID, courseName}} />
            <Tab.Screen name="Module Edit" component={EditModuleScreen}  initialParams={{courseID, courseName}} />
        </Tab.Navigator>
    );
};