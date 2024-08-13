import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView, Pressable, TextInput, Image } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SliderBox } from 'react-native-image-slider-box';
const HomeScreen = () => {
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

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, flex: 1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={{ backgroundColor: "#00ced1", padding: 10, flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                    <Pressable style={{ flex: 1, backgroundColor: 'white', flexDirection: "row", gap: 5, alignItems: "center" }}>
                        <Feather style={{ paddingLeft: 8 }} name="search" size={22} color="black" />
                        <TextInput placeholder='Search your items'></TextInput>

                    </Pressable>
                    <Feather name="mic" size={24} color="black" />

                </View>
                <View style={{ padding: 10, flexDirection: 'row', gap: 5, backgroundColor: "#afeeee", alignItems: 'center' }}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text>Deliver to Joy mahmud dhaka-1207</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
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
                {/* <SliderBox images={sliderImages}></SliderBox> */}
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 500 }}>Trending products</Text>
                    <View style={{flexDirection:'row', alignItems:'center', flexWrap:'wrap', gap:5}}>
                        {
                            sliderImages.map((item, index) => <Image source={{ uri: item }} key={index} style={{ width: 180, height: 180 }}> </Image>)
                        }
                    </View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default HomeScreen