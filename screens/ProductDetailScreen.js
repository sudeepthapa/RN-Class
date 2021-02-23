import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ProductDetailScreen = props => {
  return <View style={styles.screen}>
    <Text style={styles.title}> PRODUCT DETAIL PAGE </Text>
    <Button title="go back" onPress={()=> props.navigation.goBack()} />
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

export default ProductDetailScreen;