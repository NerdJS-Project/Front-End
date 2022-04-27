import StudentQuizView from "./StudentQuizView";
import StudentUnitContentView from "./StudentUnitContentView";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();


export default function TabsStudentUnitView({ route, navigation }) {

    const {unitID, unitName} = route.params;



    return (
        <Tab.Navigator>
            <Tab.Screen name="StudentContentView" component={StudentUnitContentView} initialParams={{unitID, unitName}} />
            <Tab.Screen name="StudentQuizView" component={StudentQuizView}  initialParams={{unitID, unitName}} />
        </Tab.Navigator>
    );
};