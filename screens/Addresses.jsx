import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { userType } from '../UserContext';
import axios from 'axios';

const Addresses = () => {
    const navigation=useNavigation()
    const {userId} = useContext(userType)
    const [addresses, setaddresses] = useState([])
    useEffect(() => {
    const getAddresses= ()=>{
        axios.get(`http://192.168.2.143:8000/addresses/${userId}`)
        .then(res=>setaddresses(res.data))
    }
    getAddresses()
    }, [])
    console.log(addresses)
    
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, paddingHorizontal: 5, flex: 1 }}>
            <Pressable onPress={()=>navigation.navigate('AddAddress')}>
                <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Add a new address</Text>
                    <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
                </View>
            </Pressable>
        </SafeAreaView>
    )
}

export default Addresses

const styles = StyleSheet.create({})