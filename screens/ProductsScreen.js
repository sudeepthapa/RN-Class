import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Pressable } from 'react-native';
import { PRODUCTS } from '../constants/data';

const ProductsScreen = ( props) => {
  const buildProductItem = ({item}) => {
    return (
      <Pressable  style={styles.product} onPress={()=>props.navigation.navigate('ProductDetail', {productId:item.id} )}>
        <View>
      <Text>{item.name}</Text>
    </View>
      </Pressable>
    )
  }

  const products = PRODUCTS.filter(product => {
    return product.category===props.route.params.catId
  })

  return <View style={styles.screen}>
    <FlatList
      data={products}
      renderItem={buildProductItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent = {()=><Text>No Products Found !!</Text>}
    />
  </View>
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:20,
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize:22
  },
  product: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom:10
  }
})

export default ProductsScreen;