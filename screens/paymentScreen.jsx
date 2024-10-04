import { StyleSheet, Text, View,Button, Alert } from 'react-native'
import React, { useState } from 'react'
import {CardField, PaymentMethod, useStripe } from '@stripe/stripe-react-native'
import axios from 'axios'

const PaymentScreen = () => {
    const { initPaymentSheet,presentPaymentSheet } = useStripe()
    const [cardDetails, setCardDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const handlePayment = async () => {
        try {
            setLoading(true);
            const response = await axios.post('http://192.168.2.143:8000/paymentIntent', {
                amount: 20
            })
            const clientSecret = response.data.clientSecret
            console.log(clientSecret)
            const InitResponse= await initPaymentSheet({
                merchantDisplayName:'test',
                paymentIntentClientSecret:clientSecret,
                defaultBillingDetails:{
                    name:'test name',
                    email:'test@gmail.com'
                },
               
            })
            console.log(InitResponse)
            if (InitResponse.error) {
                Alert.alert('something went wrong')
                console.log(InitResponse.error)
                return
            } 
          const ResPaymentSheet=  await presentPaymentSheet()
          console.log(ResPaymentSheet)

        } catch (error) {
            console.error('Payment failed:', error.message);
        } finally {
            setLoading(false)
        }

    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            <CardField
                postalCodeEnabled={true}
                placeholders={{ number: '4242 4242 4242 4242' }}
                onCardChange={(cardDetails) => setCardDetails(cardDetails)}
                style={{ width: '100%', height: 50, marginVertical: 30 }}
            />
            <Button title="Pay" onPress={handlePayment} />
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({})