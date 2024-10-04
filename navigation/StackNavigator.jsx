import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import Addresses from '../screens/Addresses';
import Profilescreen from '../screens/Profilescreen';
import CartScreen from '../screens/CartScreen';
import ConfirmScreen from '../screens/ConfirmScreen';
import OrderScreen from '../screens/OrderScreen';
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from '../screens/paymentScreen';
import AddressScreen from '../screens/AddressScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
function BottomTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    headerShown: false,
                    tabBarLabelStyle: { color: "#008e97" },
                    tabBarIcon: ({ focused }) => focused ? (<Entypo name="home" size={24} color="#008e97" />) : (<AntDesign name="home" size={24} color="black" />)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profilescreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: "#008e97" },
                    tabBarIcon: ({ focused }) => focused ? (<AntDesign name="user" size={24} color="#008e97" />) : (<AntDesign name="user" size={24} color="black" />)
                }}
            />
               <Tab.Screen
                name="Address"
                component={AddressScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Address",
                    tabBarLabelStyle: { color: "#008e97" },
                    tabBarIcon: ({ focused }) => focused ? (<Entypo name="location" size={24} color="#008e97" />) : (<Entypo name="location" size={24} color="black" />)
                }}
                
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: "Cart",
                    tabBarLabelStyle: { color: "#008e97" },
                    tabBarIcon: ({ focused }) => focused ? (<AntDesign name="shoppingcart" size={24} color="#008e97" />) : (<AntDesign name="shoppingcart" size={24} color="black" />)
                }}
            />
        </Tab.Navigator>
    )
}
const StackNavigator = () => {
    return (
        <StripeProvider publishableKey="pk_test_51OGypQAhHVSLKzJ67JidouviKl4wfAI9AfO2uOdfi9gQuZPWwCg3trhItVQRJi6DbOn1mGJ3JLqXVn0aTNvbTx2T00jcJQWlFv">
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Main" component={BottomTabs} options={{ headerShown: false }} />
                    <Stack.Screen name="prodInfo" component={ProductInfoScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Addresses" component={Addresses} options={{ headerShown: false }} />
                    <Stack.Screen name="AddAddress" component={AddAddressScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Confirm" component={ConfirmScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} />
                    <Stack.Screen name="payment" component={PaymentScreen} options={{ headerShown: false }} />
                  

                </Stack.Navigator>
            </NavigationContainer>
        </StripeProvider>
    )
}

export default StackNavigator