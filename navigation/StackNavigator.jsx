import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ProductInfoScreen from '../screens/ProductInfoScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
function BottomTabs(){
    return (
        <Tab.Navigator>
            <Tab.Screen 
            name="Home"
            component={HomeScreen}
            options={{
                tabBarLabel:"Home",
                headerShown:false,
                tabBarLabelStyle:{color:"#008e97"},
                tabBarIcon:({focused})=> focused?(<Entypo name="home" size={24} color="#008e97" />):(<AntDesign name="home" size={24} color="#008e97" />)
            }}
            />
              <Tab.Screen 
            name="Profile"
            component={HomeScreen}
            options={{
                tabBarLabel:"Profile",
                tabBarLabelStyle:{color:"#008e97"},
                tabBarIcon:({focused})=> focused?(<FontAwesome name="user" size={24} color="#008e97" />):(<FontAwesome name="user-o" size={24} color="#008e97" />)
            }}
            />
                 <Tab.Screen 
            name="Cart"
            component={HomeScreen}
            options={{
                tabBarLabel:"Cart",
                tabBarLabelStyle:{color:"#008e97"},
                tabBarIcon:({focused})=> focused?(<AntDesign name="shoppingcart" size={24} color="#008e97" />):(<AntDesign name="shoppingcart" size={24} color="black" />)
            }}
            />
        </Tab.Navigator>
    )
}
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}} />
                <Stack.Screen name="Main" component={BottomTabs} options={{headerShown:false}} />
                <Stack.Screen name = "prodInfo" component={ProductInfoScreen} options={{headerShown:false}}/>
                <Stack.Screen name = "Address" component={AddAddressScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator