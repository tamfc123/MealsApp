import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import { Text } from 'react-native';
import * as Icon from "react-native-feather";
import FavoriteScreen from '../screen/FavoriteScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FoodListScreen from '../screen/FoodListScreen';
const Stack = createStackNavigator();
export default function HomeNavigation() {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='food-list' component={FoodListScreen} />
        </Stack.Navigator>
    );
    
}