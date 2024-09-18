import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import { act } from "react";
import { Text, View } from "react-native";
import HomeScreen from './screen/HomeScreen';
import FoodScreen from './screen/FoodScreen';
import TabNavigation from './navigations/TabNavigation';

export default function Navigator(){
    return (
        <NavigationContainer>
            <TabNavigation/>
        </NavigationContainer>
    );
}