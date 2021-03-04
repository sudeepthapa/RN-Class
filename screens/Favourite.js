import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, IconButton } from 'react-native-paper'
import { useSelector } from 'react-redux'

const Favourite = props => {
  const favourites = useSelector(state => state.todos.favs)
  return <View>
    {favourites.map(fav => {
   return <Card key={fav.id} style={{margin:10, padding:30, flexDirection:'row'}}>
   <Text>{fav.title}</Text>
 </Card>
  })}
</View>
 }

const styles = StyleSheet.create({})

export default Favourite;