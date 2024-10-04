
import { ActivityIndicator, Alert, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import axios from 'axios';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
import { userType } from '../UserContext';
const AddressScreen = () => {
    const [addresses, setaddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const [modalVisible, setmodalVisible] = useState(true)
    const navigation = useNavigation()
    const { userId } = useContext(userType)
    useFocusEffect(
       
        useCallback(() => {
          setmodalVisible(true)
          },[])
    )
    useEffect(() => {
        getAddresses()
        setmodalVisible(true)
    }, [])
    const getAddresses = async () => {
        setLoading(true)
        console.log("modal:", userId)
        const response = await axios.get(`http://192.168.2.143:8000/addresses/${userId}`)

        setaddresses(response.data.addresses)
        setLoading(false)
    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, paddingHorizontal: 5, flex: 1 }}>
           
            <BottomModal
                onBackdropPress={() => setmodalVisible(!modalVisible)}
                swipeDirection={['up', 'down']}
                swipeThreshold={200}
                modalAnimation={
                    new SlideAnimation({
                        slideFrom: 'bottom'
                    })
                }
                onHardwareBackPress={() => setmodalVisible(!modalVisible)}
                visible={modalVisible}
                onTouchOutside={() => setmodalVisible(!modalVisible)}
            >
                <ModalContent style={{ width: '100%', height: 400 }}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: '500', marginBottom: 5 }}>Choose your location</Text>
                        <Text style={{ fontSize: 13, fontWeight: '400', color: "gray" }}>Select a delivery location to see product availability and delivery options</Text>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ gap: 5, marginTop: 10 }}>

                        {
                            loading ? <ActivityIndicator></ActivityIndicator> : addresses?.map((addr, index) => <Pressable onPress={() => handleAddressClicked(addr)} key={index} style={{ width: 130, height: 130, borderWidth: 1, borderColor: "#d0d0d0", borderRadius: 5, alignItems: 'center', justifyContent: "center", marginRight: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{addr.name}</Text>
                                    <Entypo name="location-pin" size={22} color="red" />
                                </View>
                            </Pressable>)
                        }
                    </ScrollView>
                    <View style={{ flexDirection: 'column', }}>
                        <Pressable onPress={() => { setmodalVisible(false); navigation.navigate('Addresses') }} style={{ backgroundColor: '#101010', paddingHorizontal: 20, paddingVertical: 8, marginTop: 15, borderRadius: 20, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 500, color: 'white' }}>Add a new adress</Text>
                        </Pressable>
                        <View style={{ flexDirection: 'column', marginTop: 20, gap: 5, }}>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Entypo name="location-pin" size={22} color="#0066b2" />
                                <Text style={{ color: '#0066b2' }} >Enter a Bangladeshi precode</Text>

                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <MaterialIcons name="location-searching" size={22} color="#0066b2" />
                                <Text style={{ color: '#0066b2' }} >use my current location</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <AntDesign name="earth" size={22} color="#0066b2" />
                                <Text style={{ color: '#0066b2' }} >Deliver outside Bangladesh</Text>
                            </View>
                        </View>
                    </View>

                </ModalContent>
            </BottomModal>
        </SafeAreaView>
    )
}

export default AddressScreen