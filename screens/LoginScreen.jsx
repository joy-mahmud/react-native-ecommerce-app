import { KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginScreen = () => {
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : '' }}>
            <View style={{flexDirection:'row',justifyContent:'center',paddingVertical:30, }}><Text style={{fontWeight:500,fontSize:20}}>E-com.</Text></View>
            <KeyboardAvoidingView>
                <View>
                    <Text style={{textAlign:'center', fontSize:20}}>Login to your Account</Text>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})