import { Image, Platform, Pressable, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/cartReducer';

const CartScreen = () => {
    const cart = useSelector(state => state.cart.cart)
    const dispatch=useDispatch()
    const total = cart?.map(item => item.price * item.quantity).reduce((prev, curr) => curr + prev, 0)
    console.log(total)
    const handeleIncrement=(item)=>{
        dispatch(incrementQuantity(item))
    }
    const handeleDecrement =(item)=>{
        dispatch(decrementQuantity(item))
    }
    const handeleDelete=(item)=>{
        dispatch(removeFromCart(item))
    }
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
                <View style={{ gap: 10, marginVertical: 15 }}>
                    {
                        cart?.map((item, index) => <View key={index} style={{gap:20,borderBottomColor: "#d0d0d0", borderBottomWidth: 1, paddingBottom: 5 }}>
                            <View style={{ flexDirection: 'row', gap: 15, }}>
                                <Image source={{ uri: item.image }} style={{ height: 130, width: 120 }} resizeMode='contain' ></Image>
                                <View style={{ width: 170, gap: 5 }}>
                                    <Text>{item.title}</Text>
                                    <Text style={{ fontSize: 18, fontWeight: '500' }}>${item.price}</Text>
                                    <Text style={{ fontWeight: '500', fontSize: 15, color: "green" }}>In stock</Text>
                                </View>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center',gap:10, marginLeft:10 }}>
                                
                            {item.quantity>1?<Pressable onPress={()=>handeleDecrement(item)}>
                                    <AntDesign name="minuscircle" size={24} color="black" />
                                </Pressable>:<Pressable onPress={()=>handeleDecrement(item)}>
                                    <MaterialCommunityIcons name="delete-circle" size={28} color="black" />
                                </Pressable>}
                                <Text style={{paddingVertical:5,paddingHorizontal:10,borderRadius:5,backgroundColor:'#d0d0d0',fontWeight:500}}>{item.quantity}</Text>
                                <Pressable onPress={()=>handeleIncrement(item)}>
                                    <AntDesign name="pluscircle" size={24} color="black" />
                                </Pressable>
                                <Pressable onPress={()=>handeleDelete(item)} style={{paddingHorizontal:5,paddingVertical:3,borderWidth:1,borderColor:'#d0d0d0',borderRadius:5}}>
                                    <Text>Delete</Text>
                                </Pressable>
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