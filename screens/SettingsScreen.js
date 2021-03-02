import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SettingsScreen = props => {
  return <View style={styles.screen}>
    <Text>SettingsScreen</Text>
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

export default SettingsScreen;