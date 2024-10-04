import { StyleSheet, Text, View, Button, Alert, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { CardField, PaymentMethod, useStripe } from '@stripe/stripe-react-native'
import axios from 'axios'

const Payment = ({handlePlaceOrder,total}) => {
    const { initPaymentSheet, presentPaymentSheet } = useStripe()
    const [cardDetails, setCardDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const width = Dimensions.get('window').width
    const handlePayment = async () => {
        try {
            setLoading(true);
    
            // Step 1: Create Payment Intent
            const response = await axios.post('http://192.168.2.143:8000/paymentIntent', {
                amount: total
            });
            const clientSecret = response.data.clientSecret;
            console.log(clientSecret);
    
            // Step 2: Initialize Payment Sheet
            const initResponse = await initPaymentSheet({
                merchantDisplayName: 'test',
                paymentIntentClientSecret: clientSecret,
                defaultBillingDetails: {
                    name: 'test name',
                    email: 'test@gmail.com',
                },
            });
    
            if (initResponse.error) {
           
                Alert.alert('Something went wrong during payment initialization');
                console.log(initResponse.error);
                return;
            }
    
      
            const resPaymentSheet = await presentPaymentSheet();
    
            if (resPaymentSheet.error) {
              
                Alert.alert('Payment failed');
                console.log(resPaymentSheet.error.message);
            } else {
               
                Alert.alert(
                    'Payment Confirmation',  
                    'Your payment was successful!', 
                    [
                        {
                            text: 'OK',
                            onPress: () =>  handlePlaceOrder('paid'),
                        },
                    ]
                );
    
                // Step 5: Place the order after successful payment
               
            }
        } catch (error) {
            console.error('Payment failed:', error.message);
            Alert.alert('Payment process failed, please try again.');
        } finally {
            setLoading(false);
        }
    };
    

    return (
        <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
            {/* <CardField
                postalCodeEnabled={true}
                placeholders={{ number: '4242 4242 4242 4242' }}
                onCardChange={(cardDetails) => setCardDetails(cardDetails)}
                style={{ width: '100%', height: 50, marginVertical: 30 }}
            />
            <Button title="Pay" onPress={handlePayment} /> */}
            <Pressable onPress={handlePayment}>
            <View style={{ backgroundColor: '#101010', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, width: width * .9 }}>
                <Text style={{ fontSize: 16, fontWeight: 500, textAlign: 'center', color: 'white' }}>Pay Now</Text>
            </View>
            </Pressable>
        </View>
    )
}

export default Payment