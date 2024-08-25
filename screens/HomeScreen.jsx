import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView, Pressable, TextInput, Image, Dimensions, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Carousel from 'react-native-reanimated-carousel';
import axios from 'axios';
import ProductItem from '../components/ProductItem';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
import { useNavigation } from '@react-navigation/native';
import { userType } from '../UserContext';

const HomeScreen = () => {
    const [products, setProducts] = useState([])
    const [loading,setLoading]=useState(false)
    const [modalVisible, setmodalVisible] = useState(false)
    const width = Dimensions.get('window').width;
    const navigation = useNavigation()
    const { userId } = useContext(userType)
    const [addresses, setaddresses] = useState([])
    const [selectedAddress, setSelectedAddress] = useState('')
    const gadgets = [
        {
            "id": 1,
            "name": "Smartphone",
            "image": "https://i.ibb.co/Dr33rwM/mobile.jpg"
        },
        {
            "id": 2,
            "name": "Laptop",
            "image": "https://i.ibb.co/zR2f6SB/laptop.jpg"
        },
        {
            "id": 3,
            "name": "Tablet",
            "image": "https://i.ibb.co/71S6gfT/tablet.jpg"
        },
        {
            "id": 4,
            "name": "Smartwatch",
            "image": "https://i.ibb.co/2ykF54w/smart-watch.jpg"
        },
        {
            "id": 5,
            "name": "Headphones",
            "image": "https://i.ibb.co/G9VL6xs/headphone.jpg"
        },
        {
            "id": 6,
            "name": "Gaming Console",
            "image": "https://i.ibb.co/T0nzDQc/gaming-console.jpg"
        },
        {
            "id": 7,
            "name": "Smart TV",
            "image": "https://i.ibb.co/HYV8MXt/smart-tv.jpg"
        },
        {
            "id": 8,
            "name": "Macbook",
            "image": "https://i.ibb.co/3N1tGdN/macbook.jpg"
        }
    ]
    const sliderImages = [
        "https://i.ibb.co/x2zjB9q/laptop-gadgets.jpg",
        "https://i.ibb.co/fM2QnpN/mobile-gadgets.jpg",
        "https://i.ibb.co/1myRrYz/electronics.jpg"
    ]
    useEffect(() => {
        const getProducts = async () => {
         
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
            // console.log(products)
        }
        getProducts()

    }, [])
    useEffect(() => {
        const getAddresses = async () => {
            setLoading(true)
            const response = await axios.get(`http://192.168.2.143:8000/addresses/${userId}`)
            setLoading(false)
            setaddresses(response.data.addresses)
        }
        getAddresses()
    }, [])


    // const cart = useSelector((state) => state.cart.cart)
    // console.log(cart)

    // console.log(products[0])
    // const dummyData = [
    //     { id: 1, tab: 'tab1' },
    //     { id: 1, tab: 'tab2' },
    //     { id: 1, tab: 'tab3' },
    //     { id: 1, tab: 'tab4' },
    // ]
    // const myCarousel = ({ data }) => {
    //     const renderItem = ({ item }) => {
    //         return <View>
    //             <Text>{item.tab}</Text>
    //         </View>
    //     }
    //     return (<Carousel
    //         data={data}
    //         renderItem={renderItem}
    //         sliderWidth={screenWidth}
    //         itemWidth={screenWidth}
    //         layout='default'
    //     />)
    // }
    const handleAddressClicked = (addr) => {
        const adress = `${addr.name}, ${addr.landmark}, ${addr.street}, ${addr.houseNo}`
        setSelectedAddress(adress)
        console.log(addr)
    }

    return (
        <>
            <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Pressable style={{ flex: 1, backgroundColor: 'white', flexDirection: "row", gap: 5, alignItems: "center" }}>
                            <Feather style={{ paddingLeft: 8 }} name="search" size={22} color="black" />
                            <TextInput placeholder='Search your items'></TextInput>

                        </Pressable>
                        <Feather name="mic" size={24} color="black" />

                    </View>
                    <Pressable onPress={() => setmodalVisible(!modalVisible)} style={{ padding: 10, flexDirection: 'row', gap: 5, backgroundColor: "#afeeee", alignItems: 'center' }}>
                        <Ionicons name="location-outline" size={24} color="black" />
                       {selectedAddress? <Text>Deliver to {selectedAddress}</Text>:<Text>Add an address</Text>}
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </Pressable>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            gadgets.map((item, index) => {
                                return (
                                    <Pressable key={index} style={{ alignItems: 'center', justifyContent: 'center', gap: 3, margin: 10 }}>
                                        <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: item.image }}></Image>
                                        <Text style={{ textAlign: 'center', fontSize: 16 }}>{item.name}</Text>
                                    </Pressable>
                                )
                            })
                        }

                    </ScrollView>

                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 500 }}>Trending products</Text>

                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Carousel
                            loop
                            pagingEnabled={true}
                            width={width}
                            height={200}
                            autoPlay={true}
                            data={[...new Array(3).keys()]}
                            scrollAnimationDuration={2000}
                            // onSnapToItem={(index) => console.log('current index:', index)}
                            mode="parallax"
                            modeConfig={{
                                parallaxScrollingScale: 0.9,
                                parallaxScrollingOffset: 45,
                            }}
                            renderItem={({ index }) => (
                                <View
                                    style={{

                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Image style={{ width: '100%', height: 200, borderRadius: 8 }} resizeMode='streach' source={{ uri: sliderImages[index] }} />

                                </View>
                            )}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                        {
                            products?.map((item, index) => <ProductItem key={index} item={item} />)
                        }
                    </View>
                </ScrollView>

            </SafeAreaView>
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
                            loading?<ActivityIndicator></ActivityIndicator>:addresses?.map((addr, index) => <Pressable onPress={() => handleAddressClicked(addr)} key={index} style={{ width: 130, height: 130, borderWidth: 1, borderColor: "#d0d0d0", borderRadius: 5, alignItems: 'center', justifyContent: "center" }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '500' }}>{addr.name}</Text>
                                    <Entypo name="location-pin" size={22} color="red" />
                                </View>
                            </Pressable>)
                        }
                    </ScrollView>
                    <View style={{ flexDirection: 'column', }}>
                        <Pressable onPress={() => { setmodalVisible(false); navigation.navigate('Address') }} style={{ backgroundColor: '#ffc72c', paddingHorizontal: 20, paddingVertical: 8, marginTop: 15, borderRadius: 20, alignItems: 'center' }}>
                            <Text style={{ fontWeight: 500 }}>Add a adress</Text>
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
        </>
    )
}

export default HomeScreen