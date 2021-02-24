import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { CATEGORIES, PRODUCTS } from '../constants/data';

const ProductDetailScreen = props => {

  const selectedProduct = PRODUCTS.find(product => product.id === props.route.params.productId)
  const category = CATEGORIES.find(category=>category.id === selectedProduct.category)

  return <View style={styles.screen}>
    <Text style={styles.title}>Name:  {selectedProduct.name} </Text>
    <Text style={styles.title}>Price: Rs {selectedProduct.price} </Text>
    <Text style={styles.title}> Category: {category.name} </Text>
    <Text style={styles.title}> Id: {selectedProduct.id} </Text>
  </View>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize: 22
  }
})

export default ProductDetailScreen;