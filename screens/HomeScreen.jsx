import { View, Text, SafeAreaView, Platform, StatusBar, ScrollView, Pressable, TextInput } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const HomeScreen = () => {
  return (
    <SafeAreaView style={{paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0,flex:1,backgroundColor:'white'}}>
        <ScrollView>
            <View style={{backgroundColor:"#00ced1",padding:10, flexDirection:'row',gap:5,alignItems:'center'}}>
                <Pressable style={{flex:1,backgroundColor:'white', flexDirection:"row",gap:5, alignItems:"center"}}>
                <Feather style={{paddingLeft:8}} name="search" size={22} color="black" />
                <TextInput placeholder='Search your items'></TextInput>

                </Pressable>
                <Feather name="mic" size={24} color="black" />

            </View>
            <View style={{padding:10,flexDirection:'row',gap:5,backgroundColor:"#afeeee",alignItems:'center'}}>
            <Ionicons name="location-outline" size={24} color="black" />
            <Text>Deliver to Joy mahmud dhaka-1207</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>
        </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen