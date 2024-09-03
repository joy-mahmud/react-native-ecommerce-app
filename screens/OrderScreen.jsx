import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect,useState } from 'react'
import { userType } from '../UserContext'
import axios from 'axios'

const OrderScreen = () => {
    const { userId } = useContext(userType)
    const [orders,setOrders]=useState([])
    useEffect(() => {
        axios.get(`http://192.168.2.143:8000/orders/${userId}`)
        .then(res=>{
            setOrders(res.data.orders)
        })
        .catch((error)=>(console.log(error)
        ))
    }, [])
    console.log(orders)
    return (
        <View>
            <Text>order</Text>
        </View>
    )
}

export default OrderScreen

const styles = StyleSheet.create({})