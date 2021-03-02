import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const HomeScreen = props => {
  return <View style={styles.screen}>
    <Text>HomeScreen</Text>
    <Button title="Products" onPress={()=>{ props.navigation.navigate('Products') }} />
  </View>
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  }
})

export default HomeScreen;