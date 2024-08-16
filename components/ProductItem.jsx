import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ProductItem = ({item}) => {
    const navigation = useNavigation()
  return (
    <View style={{marginVertical:20,marginHorizontal:15}}>
      <Pressable onPress={()=>navigation.navigate('prodInfo',item)}><Image style={{height:150, width:150}} resizeMode='contain' source={{uri:item.image}}></Image></Pressable>
      <Text numberOfLines={1} style={{width:150,marginTop:15}}>{item.title}</Text>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',gap:10,marginTop:10}}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>${item.price}</Text>
        <Text style={{color:"#ffc72c"}}>{item.rating.rate} ratings</Text>
      </View>
      <Pressable style={{backgroundColor:'#ffc72c',paddingHorizontal:20,paddingVertical:8, marginTop:15,borderRadius:20,alignItems:'center'}}>
        <Text style={{fontSize:16,fontWeight:500}}>Add to cart</Text>
      </Pressable>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})