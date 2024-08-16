import { View, Text, SafeAreaView, Platform, StatusBar, Image, Dimensions, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';

const ProductInfoScreen = () => {
    const route = useRoute()
    const productInfo = route.params
    const width = Dimensions.get('window').width-10

    return (
        <SafeAreaView style={{flex:1,backgroundColor:'white', paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
            <ScrollView style={{marginHorizontal:5,}} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, backgroundColor: 'white', flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Feather style={{ paddingLeft: 8 }} name="search" size={22} color="black" />
                        <TextInput placeholder='Search your items'></TextInput>
                    </Pressable>
                    <Feather name="mic" size={24} color="black" />
                </View>
                <Image style={{ height: 200, width: width,marginVertical:15 }} resizeMode='contain' source={{ uri: productInfo.image }}></Image>
                <Text>{productInfo.description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductInfoScreen