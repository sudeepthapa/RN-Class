import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ProductDetailScreen = props => {
  return <View style={styles.screen}>
    <Text>ProductDetailScreen</Text>
  </View>
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default ProductDetailScreen;