import { Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { userType } from '../UserContext'
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

const OrderScreen = () => {
    const { userId } = useContext(userType)
    const [orders, setOrders] = useState([])
    const navigation = useNavigation()
    useEffect(() => {
        axios.get(`http://192.168.2.143:8000/orders/${userId}`)
            .then(res => {
                const orders = res.data.orders
                const revOrders = orders.reverse()
                setOrders(revOrders)
            })
            .catch((error) => (console.log(error)
            ))
    }, [])

    console.log(orders)
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight + 10 : 0, flex: 1, marginHorizontal: 5 }}>
            <ScrollView>
                <Pressable onPress={() => navigation.navigate('Main')} style={{ flexDirection: 'row', gap: 1, alignItems: 'center' }}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                    <Text style={{ fontSize: 20, fontWeight: 500 }}>  Go back</Text>
                </Pressable>
                <View style={{ height: 1, width: '100%', backgroundColor: '#ddd', marginVertical: 2 }}></View>
                <View>
                    {
                        orders?.map((item, index) => <View key={index} >
                            {
                                index == 0 && <Text style={{ fontSize: 20, fontWeight: 500 }}>Last order:</Text>}
                            {index == 1 && <Text style={{ fontSize: 20, fontWeight: 500 }}>Previous orders:</Text>}
                            <View style={{marginTop:15}}>
                                <Text style={{fontSize:20,fontWeight:'500'}}>Payment status:<Text>{item.paymentStatus}</Text></Text>
                            
                            </View>

                            {
                                item?.products?.map((prod, id) => <View key={id} style={{ borderColor: '#ddd', borderWidth: 1, padding: 10, borderRadius: 8, marginBottom: 2 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                        <Image height={90} width={90} style={{ borderRadius: 5 }} source={{ uri: prod.image }}></Image>
                                        <View style={{ paddingRight: 5 }}>
                                            <Text numberOfLines={1} style={{ width: 200 }}>{prod.name}</Text>
                                            <Text>Quantity:<Text>{prod.quantity}</Text></Text>
                                            <Text>Price:<Text>${prod.price}</Text></Text>


                                        </View>
                                    </View>
                                </View>)
                            }

                        </View>)
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})