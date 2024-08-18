import { View, Text, SafeAreaView, Platform, StatusBar, Image, Dimensions, TextInput, Pressable, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartReducer';

const ProductInfoScreen = () => {
    const route = useRoute()
    const [addedToCart,setAddedToCart]=useState(false)
    const productInfo = route.params
    const width = Dimensions.get('window').width - 10
    const dispatch =useDispatch()
    const addItemToCart =(item)=>{
        setAddedToCart(true)
        dispatch(addToCart(item))
        setTimeout(()=>{setAddedToCart(false)},5000)
    }
    const cart = useSelector((state)=>state.cart.cart)
    // console.log(cart)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
            <ScrollView style={{ marginHorizontal: 5, }} showsVerticalScrollIndicator={false}>
                <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, backgroundColor: 'white', flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Feather style={{ paddingLeft: 8 }} name="search" size={22} color="black" />
                        <TextInput placeholder='Search your items'></TextInput>
                    </Pressable>
                    <Feather name="mic" size={24} color="black" />
                </View>
                <ImageBackground source={{ uri: productInfo.image }} style={{ height: 230, width: width, marginVertical: 15 }} resizeMode='contain'>
                    <View backgroundColor={'#c60c30'} style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
                        <Text style={{ textAlign: 'center' }}>20% Off</Text>
                    </View>
                </ImageBackground>

                <Text>{productInfo.description}</Text>
                <Text style={{ marginTop: 15, fontWeight: 500, fontSize: 18 }}>Price: ${productInfo.price}</Text>
                <Pressable onPress={()=>addItemToCart(productInfo)} style={{ backgroundColor: '#ffc72c', paddingHorizontal: 20, paddingVertical: 8, marginTop: 15, borderRadius: 20, alignItems: 'center' }}>
                    {
                        addedToCart?(
                            <Text style={{ fontSize: 16, fontWeight: 500 }}>Added to cart</Text>
                        ):(
                            <Text style={{ fontSize: 16, fontWeight: 500 }}>Add to cart</Text>
                        )
                    }
                </Pressable>
                <Pressable style={{ backgroundColor: '#e6ad00', paddingHorizontal: 20, paddingVertical: 8, marginTop: 15, borderRadius: 20, alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Buy now</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductInfoScreen