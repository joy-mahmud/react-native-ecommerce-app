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
    const [loading, setLoading] = useState(false)
    const [modalVisible, setmodalVisible] = useState(false)
    const width = Dimensions.get('window').width;
    const navigation = useNavigation()
    const { userId } = useContext(userType)
  
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
        'https://i.ibb.co.com/kSZrdHW/big-Headphone.jpg',
        'https://i.ibb.co.com/ZxrT6NK/cameras.jpg',
        'https://i.ibb.co.com/QCYx1rJ/macbook1.jpg',
        'https://i.ibb.co.com/QjZx3SM/drone.jpg',
        'https://i.ibb.co.com/4WppnK4/watches.jpg',
        'https://i.ibb.co.com/7vt102j/laptop-cameras.jpg'
       
    ]
    useEffect(() => {
        const getProducts = async () => {

            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
            // console.log(products)
        }
        getProducts()

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
        // console.log(addr)
    }

    return (
        <>
            <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    {/* <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                        <Pressable style={{ flex: 1, backgroundColor: 'white', flexDirection: "row", gap: 5, alignItems: "center" }}>
                            <Feather style={{ paddingLeft: 8 }} name="search" size={22} color="black" />
                            <TextInput placeholder='Search your items'></TextInput>

                        </Pressable>
                        <Feather name="mic" size={24} color="black" />

                        
                    </View> */}
                    <View style={{ paddingVertical: 10, backgroundColor: '#101010' }}>

                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 25, fontWeight: 500 }}>EasyShop-BD</Text>
                    </View>
                    {/* <Pressable onPress={() => setmodalVisible(!modalVisible)} style={{ padding: 10, flexDirection: 'row', gap: 5, backgroundColor: "#afeeee", alignItems: 'center' }}>
                        <Ionicons name="location-outline" size={24} color="black" />
                        {selectedAddress ? <Text>Deliver to {selectedAddress}</Text> : <Text>Add an address</Text>}
                        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                    </Pressable> */}



                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 500,textAlign:'center' }}>Top products</Text>

                    </View>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Carousel
                            loop
                            pagingEnabled={true}
                            width={width}
                            height={250}
                            autoPlay={true}
                            data={[...new Array(3).keys()]}
                            scrollAnimationDuration={4000}
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
                                    <Image style={{ width: '100%', height: 250, borderRadius: 8 }} resizeMode='streach' source={{ uri: sliderImages[index] }} />

                                </View>
                            )}
                        />
                    </View>
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
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                        {
                            products?.map((item, index) => <ProductItem key={index} item={item} />)
                        }
                    </View>
                </ScrollView>

            </SafeAreaView>
          
        </>
    )
}

export default HomeScreen