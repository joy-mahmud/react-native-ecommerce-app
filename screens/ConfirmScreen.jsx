import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { userType } from '../UserContext'
import axios from 'axios'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const ConfirmScreen = () => {
    const [currentStep, setCurrenStep] = useState(0)
    const { userId } = useContext(userType)
    const [addresses, setaddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState('')
    const [selectDeliveryOption, setSelectDeliveryOption] = useState(false)
    useEffect(() => {
        getAddresses()
    }, [])
    const getAddresses = async () => {
        const response = await axios.get(`http://192.168.2.143:8000/addresses/${userId}`)
        setaddresses(response.data.addresses)
    }

    const handleSelectAddress = (addr) => {
        // console.log(addr)
        setSelectedAddress(addr)
    }

    // useFocusEffect(
    //     useCallback(() => {
    //         getAddresses()
    //     }, [])

    // )
    const steps = [
        { title: 'Address', content: "Address form" },
        { title: 'Delivery', content: 'Delivery details' },
        { title: 'Payment', content: 'Payment methods' },
        { title: 'Place order', content: 'Order summary' }
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight + 10 : 0, flex: 1, marginHorizontal: 5 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
                    {
                        steps.map((item, index) => <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>

                            <View style={[{ borderRadius: 20, height: 25, width: 25, alignItems: 'center', justifyContent: 'center', backgroundColor: "#c6c6c6" }, index + 1 <= currentStep && { backgroundColor: 'green' }]}>
                                {index + 1 <= currentStep ? (<Text style={{ color: 'white' }}>&#10003;</Text>) : (<Text style={{}}>{index + 1}</Text>)}


                            </View>
                            <Text>{item.title}</Text>


                        </View>)
                    }
                </View>
                <View>

                    {
                        currentStep < 1 && <View style={{}}>
                            <View style={{ marginVertical: 10, gap: 5, alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Select an address to Proceed</Text>
                                <AntDesign name="downcircle" size={18} color="black" />
                            </View>

                            {
                                addresses.map((addr, index) => <View key={index} style={{ borderRadius: 5, borderColor: "#d0d0d0", borderWidth: 1, alignItems: 'center', flexDirection: 'row', marginBottom: 5, padding: 5, gap: 5 }}>
                                    <Pressable onPress={() => handleSelectAddress(addr)}>
                                        {
                                            selectedAddress && selectedAddress._id == addr._id ? (<View style={{ height: 24, width: 24 }}><FontAwesome6 name="dot-circle" size={24} color="black" /></View>) : (<View style={{ height: 24, width: 24 }}><Entypo name="circle" size={24} color="black" /></View>)
                                        }

                                    </Pressable>
                                    <View style={{ gap: 5, padding: 5, marginTop: 10 }} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                            <Text style={{ fontSize: 18, fontWeight: '500' }}>{addr.name}</Text>
                                            <Entypo name="location-pin" size={22} color="red" />
                                        </View>
                                        <Text style={{ fontSize: 16, }}>{addr.landmark}</Text>
                                        <Text style={{ fontSize: 16, }}>{addr.street}</Text>
                                        <Text style={{ fontSize: 16, }}>Jhenaidah,Bangladesh</Text>
                                        <Text style={{ fontSize: 16, }}>Phone No:{addr.mobileNo}</Text>
                                        <Text style={{ fontSize: 16, }}>Postal code:{addr.postalCode}</Text>

                                        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center', marginVertical: 10 }}>

                                            <Pressable>
                                                <Text style={{ padding: 5, borderColor: "#d0d0d0", borderRadius: 5, borderWidth: 1 }}>Edit</Text>

                                            </Pressable>

                                            <Pressable s>
                                                <Text style={{ padding: 5, borderColor: "#d0d0d0", borderRadius: 5, borderWidth: 1 }}>Remove</Text>

                                            </Pressable>
                                        </View>
                                        {
                                            selectedAddress && selectedAddress._id == addr._id && <Pressable onPress={() => setCurrenStep(1)}>
                                                <View style={{ backgroundColor: '#ffc72c', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 20 }}>
                                                    <Text style={{ fontSize: 16, fontWeight: 500 }}>Deliver to this address</Text>
                                                </View>
                                            </Pressable>
                                        }
                                    </View>
                                </View>)
                            }


                        </View>
                    }
                    {currentStep == 1 && <View>
                        <View style={{ marginVertical: 10, gap: 5, alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Choose your delivery options</Text>
                            <AntDesign name="downcircle" size={18} color="black" />
                        </View>
                        <View style={{ flexDirection: 'row', gap: 5 }}>
                            <Pressable onPress={() => setSelectDeliveryOption(!selectDeliveryOption)}>
                                {
                                    selectDeliveryOption ? (<View style={{ height: 24, width: 24 }}><FontAwesome6 name="dot-circle" size={24} color="black" /></View>) : (<View style={{ height: 24, width: 24 }}><Entypo name="circle" size={24} color="black" /></View>)
                                }

                            </Pressable>
                            <Text style={{ flex: 1 }}>
                                <Text style={{ color: 'green' }}>Tomorrow by 10 pm-</Text>
                                <Text>Free delivery with your premium membership</Text>
                            </Text>
                        </View>
                        <Pressable disabled={!selectDeliveryOption} onPress={() => setCurrenStep(2)} style={{ alignSelf: 'center', marginTop: 10 }}>
                            <View style={{ backgroundColor: '#ffc72c', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 }}>
                                <Text style={{ fontSize: 16, fontWeight: 500 }}>Deliver to this address</Text>
                            </View>
                        </Pressable>
                    </View>}
                    {
                        currentStep == 2 && <View>
                            <View style={{ marginVertical: 10, gap: 5, alignItems: 'center', flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Select your payment option</Text>
                                <AntDesign name="downcircle" size={18} color="black" />
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({})