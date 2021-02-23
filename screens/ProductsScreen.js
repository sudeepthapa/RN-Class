import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductsScreen = ({navigation}) => {
  return <View style={styles.screen}>
    <Text style={styles.title}> PRODUCTS PAGE </Text>
    <Button title="Go to Detail Page" onPress={()=>navigation.navigate('ProductDetail')} />
    <Button title="Go to Products" onPress={()=>navigation.navigate('Products')} />
  </View>
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    padding:20,
  },
  title: {
    fontFamily: 'ubuntu-bold',
    fontSize:22
  }
})

export default ProductsScreen;