import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AddAddressScreen = () => {
    return (
        <SafeAreaView style={{paddingTop:Platform.OS=='android'?StatusBar.currentHeight:0,paddingHorizontal:5}}>
            <View style={{flexDirection:'row',gap:2,alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:16,fontWeight:500}}>Add a new address</Text>
                <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>
            <ScrollView>
                    <TextInput 
                        placeholder='Bangladesh'
                        style={{padding:10,borderWidth:1,borderColor:'#dododo',marginTop:10,borderRadius:5}}
                    />

                    
            </ScrollView>
        </SafeAreaView>
    )
}

export default AddAddressScreen

const styles = StyleSheet.create({})