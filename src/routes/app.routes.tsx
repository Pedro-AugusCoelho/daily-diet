import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home";
import { Statistic } from '@screens/Statistic';
import { Feedback } from "@screens/Feedback";
import { ShowMeal } from "@screens/ShowMeal";
import { CreateMeal } from "@screens/CreateMeal";

const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name="home"
                component={Home}
            />

            <Screen
                name="statistic"
                component={Statistic}
            />

            <Screen
                name="create"
                component={CreateMeal}
            />

            <Screen
                name="feedback"
                component={Feedback}
            />

            <Screen
                name="show"
                component={ShowMeal}
            />
        </Navigator>
    )
}