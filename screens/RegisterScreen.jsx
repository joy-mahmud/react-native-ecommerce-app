import { Alert, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigattion = useNavigation()
    const handleRegister =()=>{
        const user ={
            name:name,
            email:email,
            password:password
        }
        console.log(user)
        axios.post("http://192.168.2.143:8000/register",user)
        .then((response)=>{
            console.log(response)
            Alert.alert("Registration successful","You have registered successfully")
            setName('')
            setEmail('')
            setPassword('')
        }).catch((error)=>{
            console.log(error)
            Alert.alert("Registration failed","An error occured during registration")
        })

    }
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0, flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 30, }}><Text style={{ fontWeight: 800, fontSize: 32, }}>Easyshop-Bd.</Text></View>
                <KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>

                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Register your Account</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 8, borderRadius: 8, height: 40, backgroundColor: '#D0D0D0', marginHorizontal: 20, marginVertical: 15 }}>
                    <FontAwesome name="user" size={24} color="black" />
                        <TextInput value={name} onChangeText={name => setName(name)} placeholder='Enter your name' style={{ color: 'gray' }}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 8, borderRadius: 8, height: 40, backgroundColor: '#D0D0D0', marginHorizontal: 20, marginVertical: 15 }}>
                        <Ionicons name="mail" size={24} color="black" />
                        <TextInput value={email} onChangeText={mail => setEmail(mail)} placeholder='Enter your email' style={{ color: 'gray' }}></TextInput>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5, paddingHorizontal: 8, borderRadius: 8, height: 40, backgroundColor: '#D0D0D0', marginHorizontal: 20, marginVertical: 15 }}>
                        <FontAwesome name="lock" size={24} color="black" />
                        <TextInput value={password} onChangeText={pass => setPassword(pass)} secureTextEntry placeholder='Enter your password' style={{ color: 'gray' }}></TextInput>
                    </View>
                    {/* <View style={{ flexDirection: 'row', marginHorizontal: 20, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text>Keep me logged in</Text>
                        <Text style={{ fontSize: 16, fontWeight: 500, color: '#007fff' }}>Forgot password?</Text>
                    </View> */}
                    <View style={{ marginTop: 70, alignItems: 'center' }}>
                        <Pressable onPress={handleRegister} style={{ width: 200, backgroundColor: '#101010', borderRadius: 6, paddingVertical: 10 }}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, fontWeight: 'bold', }}>Sigin up</Text>

                        </Pressable>
                        <Pressable style={{ marginTop: 15, flexDirection: 'row', gap: 5 }}>
                            <Text style={{ fontSize: 16 }}>Already have an account?</Text>
                            <Text onPress={() => navigattion.navigate('Login')} style={{ textAlign: 'center', color: '#007ffe', fontSize: 16, fontWeight: 'bold', }}>Sign In</Text>

                        </Pressable>
                    </View>

                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})