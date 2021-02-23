import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {

  const navigateToProducts = () => {
    props.navigation.navigate('Products')
  }

  return <View style={styles.screen}>
    <Text style={styles.title}> HOME PAGE </Text>
    <Button title="Go to products page" onPress={ navigateToProducts } />
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

export default CategoriesScreen;