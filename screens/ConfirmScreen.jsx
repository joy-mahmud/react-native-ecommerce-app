import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'


const ConfirmScreen = () => {
    const [currentStep,setCurrenStep]=useState(0)
    const steps = [
        { title: 'Address', content: "Address form" },
        { title: 'Delivery', content: 'Delivery details' },
        { title: 'Payment', content: 'Payment methods' },
        { title: 'Place order', content: 'Order summary' }
    ]
    return (
        <SafeAreaView style={{ paddingTop: Platform.OS == 'android' ? StatusBar.currentHeight+10 : 0, flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: 'center' }}>
                    {
                        steps.map((item, index) => <View key={index} style={{ alignItems: 'center', justifyContent: 'center' }}>

                            <View style={[{ borderRadius: 20, height: 25, width:25,alignItems:'center',justifyContent:'center',backgroundColor:"#c6c6c6" },index+1<=currentStep&&{backgroundColor:'green'}]}>
                                {index+1<=currentStep?(<Text style={{color:'white'}}>&#10003;</Text>):(<Text style={{}}>{index + 1}</Text>)}
                                

                            </View>
                            <Text>{item.title}</Text>


                        </View>)
                    }
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ConfirmScreen

const styles = StyleSheet.create({})