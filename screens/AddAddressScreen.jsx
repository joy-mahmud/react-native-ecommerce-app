import { Alert, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { userType } from '../UserContext';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AddAddressScreen = () => {
    const navigation = useNavigation()
    const [country, setcountry] = useState("")
    const [name, setName] = useState("")
    const [mobileNo, setMobileNo] = useState("")
    const [houseNo, setHouseNo] = useState("")
    const [street, setStreet] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [landmark, setLandmark] = useState("")
    const { userId} = useContext(userType)


console.log(userId)

const handleAddAddress = ()=>{
    const address = {
        name,
        mobileNo,
        houseNo,
        street,
        landmark,
        postalCode
    }
    axios.post("http://192.168.2.143:8000/addresses",{userId,address})
    .then((responst)=>{
        Alert.alert("success","address added successfully")
        setName('')
        setMobileNo('')
        setHouseNo('')
        setStreet('')
        setLandmark('')
        setPostalCode('')
        navigation.goBack()
    }
    )
    .catch(error=>Alert.alert("Error","failed to add address."))
}

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, paddingHorizontal: 5, flex: 1 }}>
            <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Add a new address</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <TextInput
                    value={country}
                    onChangeText={(text) => setcountry(text)}
                    placeholder='Bangladesh'
                    style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                />
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: 500 }}>Full name</Text>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder='Enter your name'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: 500 }}>Mobile number</Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        placeholder='Enter your mobile number'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: 500 }}>House No:</Text>
                    <TextInput
                        value={houseNo}
                        onChangeText={(text) => setHouseNo(text)}
                        placeholder='Enter house no.'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: 500 }}>Street,Arear,sector</Text>
                    <TextInput
                        value={street}
                        onChangeText={(text) => setStreet(text)}
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: 500 }}>Landmark</Text>
                    <TextInput
                        value={landmark}
                        onChangeText={(text) => setLandmark(text)}
                        placeholder='eg. near the appollo hospital'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{ fontWeight: 500 }}>Post code</Text>
                    <TextInput
                        value={postalCode}
                        onChangeText={(text) => setPostalCode(text)}
                        placeholder='Enter postal code'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <Pressable onPress={()=>handleAddAddress()} style={{ backgroundColor: '#ffc72c', paddingHorizontal: 20, paddingVertical: 15, marginTop: 15, borderRadius: 5, alignItems: 'center', marginBottom: 50 }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Add Address</Text>

                </Pressable>


            </ScrollView>
        </SafeAreaView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})