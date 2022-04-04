import React from 'react';
import { Text, TabView } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ModuleEditComponent from '../../../component/ModuleEditComponent';
import CreateCourse from './CreateCourse';
import CreateModule from './CreateModule';



const Tab = createMaterialTopTabNavigator();


export default function CreateCourseAndModuleTabScreen({ route, navigation }) {


    return (
        <Tab.Navigator>
            <Tab.Screen name="Create Course" component={CreateCourse} />
            <Tab.Screen name="Create Module" component={CreateModule} />
        </Tab.Navigator>
    );
};