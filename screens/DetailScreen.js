// @ts-nocheck
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { FOODS } from '../constants/data';

const DetailScreen = props => {
  const route = useRoute();
  const [selectedFood, setSelectedFood] = React.useState({})
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: route.params.title,
      headerShown:false
    })
  })

  React.useEffect(() => {
    const selected = FOODS.find(food => food.foodId == route.params.foodId);
    setSelectedFood(selected)
  }, [props.route.params])

  return <View style={styles.screen}>
    <Text>{ selectedFood.title }</Text>
    <Text>{ selectedFood.subtitle }</Text>
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