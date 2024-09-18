import { act, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { categories } from "../contants";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {RootStackParamList } from '../types'
import { StackNavigationProp } from "@react-navigation/stack";

export default function Categories(){
    const [activeCategory, setActiveCategory] = useState<number | null>(null);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View
            style={{flexDirection: 'row', paddingHorizontal: 15}}
            >
                {
                    categories.map((category, index) =>{
                        let isactive = category.id==activeCategory;
                        return (
                            <View key={index} style={styles.categoryContainer}>
                                <TouchableOpacity 
                                    style={[isactive ? styles.activecategory : styles.inactivecategory]}
                                    onPress={() => {
                                        setActiveCategory(category.id)

                                    }}
                                    
                                >
                                    <Image style={{width: 35, height: 35}} source={category.image}/>
                                    
                                </TouchableOpacity>
                                <Text style={[isactive ? styles.activeText : styles.inactiveText]}>{category.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginTop: 16
    },
    categoryContainer:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactivecategory:{
        padding: 5,
        borderRadius: 9999,
        backgroundColor: '#E5E7EB',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowColor: '#000',
    },
    activecategory:{
        padding: 5,
        borderRadius: 9999,
        backgroundColor: '#4B5563',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        shadowColor: '#000',
    },
    inactiveText:{
        fontSize: 12,
        color: '#6B7280',
    },
    activeText:{
        fontSize: 12,
        fontWeight: '600', 
        color: '#1F2937', 
    },
});