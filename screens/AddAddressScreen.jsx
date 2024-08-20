import { Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AddAddressScreen = () => {
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, paddingHorizontal: 5,flex:1 }}>
            <View style={{ flexDirection: 'row', gap: 2, alignItems: 'center', marginTop: 20 }}>
                <Text style={{ fontSize: 16, fontWeight: 500 }}>Add a new address</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <TextInput
                    placeholder='Bangladesh'
                    style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                />
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontWeight:500}}>Full name</Text>
                    <TextInput
                        placeholder='Enter your name'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontWeight:500}}>Mobile number</Text>
                    <TextInput
                        placeholder='Enter your mobile number'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontWeight:500}}>House No:</Text>
                    <TextInput
                        placeholder='Enter house no.'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontWeight:500}}>Street,Arear,sector</Text>
                    <TextInput

                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontWeight:500}}>Landmark</Text>
                    <TextInput
                        placeholder='eg. near the appollo hospital'
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{fontWeight:500}}>Pincode</Text>
                    <TextInput
                        style={{ padding: 10, borderWidth: 1, borderColor: '#dododo', marginTop: 10, borderRadius: 5 }}
                    />
                </View>
                <Pressable style={{ backgroundColor: '#ffc72c', paddingHorizontal: 20, paddingVertical: 15, marginTop: 15, borderRadius: 5, alignItems: 'center',marginBottom:50 }}>
                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Add Address</Text>

                </Pressable>


            </ScrollView>
        </SafeAreaView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})