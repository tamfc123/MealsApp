import React, { act, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from "react-native";
import HotCard from "./HotCard";
interface HotItem {
    name: string;
    image: any;
    price: number;
    stars: number;
    reviews: string;
    category: string;
    description: string;
    address: string;
}

interface FeaturedRawprops{
    title: string,
    description: string,
    hots: HotItem[];
}
export default function FeaturedRaw({title, description, hots=[]}: FeaturedRawprops){
    return (
        <View>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{fontWeight:600}}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 15}}
                style={{overflow: 'hidden', paddingVertical: 20}}
            >

                {
                    hots.map((hot, index)=>{
                        return(
                            <HotCard
                            item={hot}
                            key={index}
                            />
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        flex: 1,
    },
    title:{
        fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 28,
        color: 'black',
    },
    description:{
        color: '#6B7280',
        fontSize: 12,
        lineHeight: 16,
    },
});