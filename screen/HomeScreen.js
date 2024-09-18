import { React } from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar, TextInput, ScrollView} from "react-native";
import * as Icon from "react-native-feather";
import Categories from '../components/Categories';
import { featured } from "../contants";
import FeaturedRaw from "../components/FeaturedRaw";
export default function HomeScreen(){
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            {/*search */}
            <View style={styles.content}>
                <View style={styles.header}>
                    <Icon.Search height="20" width="20" stroke="gray"/>
                    <TextInput placeholder='Search' style={styles.textInput}/>
                </View>
            </View>
            {/*main */}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/*categories */}
                <Categories/>
                {/*food list */}
                <View style={{marginTop: 20}}>
                    {
                        [featured, featured, featured].map((item, index)=>{
                            return (
                                <FeaturedRaw
                                    key={index}
                                    title={item.title}
                                    description={item.description}
                                    hots={item.hots}
                                />
                            );
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    content:{
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 9999,
    },
    textInput:{
        marginLeft: 8,
        flex: 1,
    }
});
