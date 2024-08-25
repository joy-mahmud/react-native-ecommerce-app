import { Image, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';

const CartScreen = () => {
    const cart = useSelector(state => state.cart.cart)
    const total = cart?.map(item => item.price * item.quantity).reduce((prev, curr) => curr + prev, 0)
    console.log(total)
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? 0 : 0, flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, backgroundColor: 'white', flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Feather style={{ paddingLeft: 8 }} name="search" size={22} color="black" />
                        <TextInput placeholder='Search your items'></TextInput>

                    </Pressable>
                    <Feather name="mic" size={24} color="black" />

                </View>
                <View style={{ marginTop: 10, paddingHorizontal: 5 }}>
                    <Text style={{ fontSize: 16, fontWeight: 400 }}>Subtotal: ${total}</Text>
                </View>
                <Pressable style={{
                    backgroundColor: "#ffc72c", borderRadius: 5, padding: 10, width: '100%'
                }}>
                    <Text style={{ fontSize: 16, fontWeight: 500, textAlign: 'center' }}>Proceed to buy the items</Text>
                </Pressable>
                <View style={{gap:10,marginVertical:15}}>
                    {
                        cart?.map((item, index) => <View key={index} style={{ flexDirection: 'row', gap: 15, alignItems: 'center',borderBottomColor:"#d0d0d0",borderBottomWidth:1,paddingBottom:5 }}>
                            <Image source={{ uri: item.image }} style={{ height: 130, width: 120 }} resizeMode='contain' ></Image>
                            <View style={{ width: 170, gap: 5 }}>
                                <Text>{item.title}</Text>
                                <Text style={{ fontSize: 18, fontWeight: '500' }}>${item.price}</Text>
                                <Text style={{ fontWeight: '500', fontSize: 15, color: "green" }}>In stock</Text>
                            </View>
                        </View>)
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({})