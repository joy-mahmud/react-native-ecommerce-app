import { Alert, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import axios from 'axios';
import { userType } from '../UserContext';

const Profilescreen = () => {
    const navigation = useNavigation();
    const { userId } = useContext(userType)
    const [profileInfo, setProfileInfo] = useState(null)
    const [loading, setloading] = useState(false)
    useEffect(() => {
        setloading(true)
        axios.get(`http://192.168.2.143:8000/profile/${userId}`)
            .then(res => {
                setProfileInfo(res.data)
                setloading(false)
                //console.log('profile', res.data)
            })
            .catch((error) => (console.log(error)
            ))
    }, [])
    // console.log(profileInfo.user)
    if (loading) {
        return
    }

    const handleLogout = () => {
        Alert.alert(
            "Logout Confirmation", // Title of the Alert
            "Are you sure you want to logout?", // Message of the Alert
            [
                {
                    text: "OK",
                    onPress: async () => {
                        try {
                            await AsyncStorage.removeItem('authToken'); // Remove the token
                            console.log('Token deleted successfully');
                            navigation.navigate('Login'); // Navigate to login screen after logout
                        } catch (error) {
                            console.error('Error deleting token:', error);
                        }
                    }
                },
                {
                    text: 'Cancel', style: "cancel" // Cancel button does nothing
                }
            ],
            { cancelable: true } // The alert can be dismissed by tapping outside
        );
    };

    return (
        <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
            {/* <StatusBar barStyle="light-content"></StatusBar> */}
            <ScrollView>
                <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 500, marginVertical: 20 }}>Profile</Text>
                <View style={{ flex: 1,height:400,backgroundColor: '#1e1e1e', borderRadius: 20, borderRadius: 20, padding: 20,alignItems:'center',justifyContent:'center' }}>
                    <View style={{ width: '100%', gap: 5 }}>
                        <View  style={{flexDirection:'row',gap:5}}>
                            <FontAwesome name="user-circle-o" size={40} color="white" />
                            <View>
                                <Text style={{ color: 'white' }}>{profileInfo?.user?.name}</Text>
                                <Text style={{ color: 'white' }}>{profileInfo?.user?.email}</Text>
                            </View>
                        </View>
                        <Pressable onPress={() => navigation.navigate('Order')} style={{ backgroundColor: '#ffc72c', paddingHorizontal: 20, paddingVertical: 8, marginTop: 15, borderRadius: 20, alignItems: 'center' }}>
                            {<Text style={{ fontSize: 16, fontWeight: 500 }}>My orders</Text>}

                        </Pressable>
                        <Pressable onPress={handleLogout} style={{ backgroundColor: '#ffc72c', paddingHorizontal: 20, paddingVertical: 8, marginTop: 15, borderRadius: 20, alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 500 }}>Logout</Text>
                        </Pressable>
                    </View>



                </View>
                {/* Logout Button */}


                {/* Navigate to Login Screen */}


            </ScrollView>
        </SafeAreaView>
    );
};

export default Profilescreen;

const styles = StyleSheet.create({
    logoutButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        alignItems: 'center'
    },
    loginButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center'
    },
});
