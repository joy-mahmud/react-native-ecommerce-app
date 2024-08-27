import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { userType } from '../UserContext';
import axios from 'axios';

const Addresses = () => {
    const navigation = useNavigation()
    const { userId } = useContext(userType)
    const [addresses, setaddresses] = useState([])
    useEffect(() => {
        getAddresses()
    }, [])
    const getAddresses = async () => {
        const response = await axios.get(`http://192.168.2.143:8000/addresses/${userId}`)
        setaddresses(response.data.addresses)
    }
    useFocusEffect(
        useCallback(() => {
            getAddresses()
          },[])
        
    )
    //console.log(addresses)

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, paddingHorizontal: 5, flex: 1 }}>
            <Pressable onPress={() => navigation.navigate('AddAddress')}>
                <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginTop: 20, padding: 5, borderRadius: 5, borderColor: "#d0d0d0", borderWidth: 1, }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Add a new address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
                <View style={{ }}>
                    {
                        addresses.map((addr, index) => <View key={index} style={{ gap: 5,padding: 5, borderRadius: 5, borderColor: "#d0d0d0", borderWidth: 1, marginTop: 10 }} >
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                <Text style={{ fontSize: 18, fontWeight: '500' }}>{addr.name}</Text>
                                <Entypo name="location-pin" size={22} color="red" />
                            </View>
                            <Text style={{ fontSize: 16, }}>{addr.landmark}</Text>
                            <Text style={{ fontSize: 16, }}>{addr.street}</Text>
                            <Text style={{ fontSize: 16, }}>Jhenaidah,Bangladesh</Text>
                            <Text style={{ fontSize: 16, }}>Phone No:{addr.mobileNo}</Text>
                            <Text style={{ fontSize: 16, }}>Postal code:{addr.postalCode}</Text>
                            <View  style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 10 }}>
                        <Pressable>
                            <Text style={{ padding: 5, borderColor: "#d0d0d0", borderRadius: 5, borderWidth: 1 }}>Edit</Text>

                        </Pressable>

                        <Pressable s>
                            <Text style={{ padding: 5, borderColor: "#d0d0d0", borderRadius: 5, borderWidth: 1 }}>Remove</Text>

                        </Pressable>
                    </View>
                        </View>)
                    }
                  

                </View>
            </Pressable>
        </SafeAreaView>
    )
}

export default Addresses

const styles = StyleSheet.create({})