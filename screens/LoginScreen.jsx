import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : '' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 30, }}><Text style={{ fontWeight: 800, fontSize: 32, }}>E-com.</Text></View>
            <KeyboardAvoidingView>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 20 }}>Login to your Account</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 5, borderRadius: 8, height: 32, backgroundColor: '#D0D0D0', marginHorizontal: 20, marginVertical: 15 }}>
                    <Ionicons name="mail" size={24} color="black" />
                    <TextInput placeholder='Enter your email' style={{ color: 'gray' }}></TextInput>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 5, borderRadius: 8, height: 32, backgroundColor: '#D0D0D0', marginHorizontal: 20, marginVertical: 15 }}>
                <FontAwesome name="lock" size={24} color="black" />
                    <TextInput placeholder='Enter your password' style={{ color: 'gray' }}></TextInput>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})