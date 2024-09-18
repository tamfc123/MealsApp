import { useRoute } from "@react-navigation/native";
import { React } from "react";
import { FlatList, Image, Text, View,StyleSheet } from "react-native";
import {food} from '../contants/index';
import {RootStackParamList } from '../types'
import PropTypes from 'prop-types';

export default function FoodListScreen(){
    const route = useRoute();
    const { categoryId } = route.params;
    const filteredFood = food.filter(item => item.categoryId === categoryId);
    return (
        <View style={styles.container}>
        <FlatList
            data={filteredFood}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            )}
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
    },
});
