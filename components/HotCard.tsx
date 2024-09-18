import React, { act } from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "react-native";
import * as Icon from "react-native-feather";
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
interface HotCardProps {
    item: HotItem; 
}
export default function HotCard({item}: HotCardProps){
    return(
        <TouchableWithoutFeedback>
            <View style={styles.container}>
                <Image style={styles.img} source={item.image}/>
                <View style={styles.box}>
                    <Text style={styles.name}>{item.name}</Text>
                    <View style={styles.content}>
                        <Image style={styles.icon} source={require('../assets/images/staricon.png')}/>
                        <Text style={{color:'#2F855A'}}>{item.stars}</Text>
                        <Text style={{color:'#4A4A4A'}}>
                            ({item.reviews} review)  .  <Text style={{fontWeight: '600'}}>{item.category}</Text>
                        </Text>
                    </View>
                    <View style={styles.address}>
                        <Icon.MapPin color='gray' width='15' height='15'/>
                        <Text style={{color:'#4A4A4A', fontSize: 12}}>{item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        marginRight: 24,
        backgroundColor: 'white',
        borderRadius: 24, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 10, 
        elevation: 10, 
    },
    img:{
        height: 144, 
        width: 256,  
        borderTopLeftRadius: 24,  
        borderTopRightRadius: 24, 
    },
    box:{
        paddingHorizontal: 12, 
        paddingBottom: 16,
        marginBottom: 8,
    },
    name:{
        fontSize: 24,
        paddingTop: 8,
        fontWeight: 'bold',
        color: 'black'
    },
    content:{
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',

    },
    icon:{
        width: 16,
        height: 16,
    },
    address:{
        paddingTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    
    }
});