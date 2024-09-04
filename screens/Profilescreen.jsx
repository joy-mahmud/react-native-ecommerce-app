import { Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profilescreen = () => {
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0 }}>
            <ScrollView>
                <Text>Profile</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profilescreen

const styles = StyleSheet.create({})