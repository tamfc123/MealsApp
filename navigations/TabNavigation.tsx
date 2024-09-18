import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import { Text } from 'react-native';
import * as Icon from "react-native-feather";
import FavoriteScreen from '../screen/FavoriteScreen';
import HomeNavigation from './HomeNavigation';
const Tab = createBottomTabNavigator();
export default function TabNavigation() {
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen} 
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize: 12, marginTop:-7}}>Home</Text>
                ),
                tabBarIcon:({color, size})=>(
                    <Icon.Home height="25" width="25" color={color}/>
                )
            }}
            />
            <Tab.Screen name="Favorite" component={FavoriteScreen} 
            options={{
                tabBarLabel:({color})=>(
                    <Text style={{color:color, fontSize: 12, marginTop:-7}}>Favorite</Text>
                ),
                tabBarIcon:({color, size})=>(
                    <Icon.Heart height="25" width="25" color={color}/>
                )
            }}
            />
        </Tab.Navigator>
    );
    
}