import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Divider } from 'react-native-paper';

const Home = props => {
  return <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  <Button icon="camera" mode="contained" onPress={() => props.navigation.navigate('Todos')}>
      All Todos
  </Button>
  <View style={{height:10}}></View>
  <Button icon="camera" mode="contained" onPress={() => props.navigation.navigate('Favourite')}>
    My Favourites
  </Button>
</View>
 }

const styles = StyleSheet.create({})

export default Home;