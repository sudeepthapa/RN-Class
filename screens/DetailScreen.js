import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FoodHeader from '../components/FoodHeader'

const DetailScreen = props => {
  return <View style={styles.screen}>
    <FoodHeader />
    <Text>DETAIL PAGE</Text>
  </View>
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default DetailScreen;