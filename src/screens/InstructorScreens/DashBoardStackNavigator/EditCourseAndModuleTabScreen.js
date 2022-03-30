import React from 'react';
import { Text, TabView } from 'react-native-elements';
import CourseEditScreen from './CourseEditScreen';
import EditModuleScreen from './EditModuleScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ModuleEditComponent from '../../../component/ModuleEditComponent';


const Tab = createMaterialTopTabNavigator();


export default function EditCourseAndModuleTabScreen({ route, navigation }) {


    return (
        <Tab.Navigator>
            <Tab.Screen name="Course Edit" component={CourseEditScreen} />
            <Tab.Screen name="Module Edit" component={EditModuleScreen} />
        </Tab.Navigator>
    );
};