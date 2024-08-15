import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductItem = ({item}) => {
  return (
    <View style={{}}>
      <Image style={{height:150, width:150,margin:15}} source={{uri:item.image}}></Image>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({})