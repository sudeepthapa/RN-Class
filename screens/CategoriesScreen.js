import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Pressable } from 'react-native';
import { CATEGORIES } from '../constants/data';

const CategoriesScreen = props => {

  const buildCategoriesItem = ({item}) => {
    return (
      <Pressable style={styles.category} onPress={()=>props.navigation.navigate('Products', { catId:item.id })}>
        <View>  
          <Text style={styles.title}>{ item.name }</Text>
        </View>
      </Pressable>
    )
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        renderItem={ buildCategoriesItem }
        keyExtractor = {(item)=>item.id}
        numColumns={2}
      />
    </View>
  )
 }

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding:20,
  },
  category: {
    width: '49%',
    backgroundColor: '#ddd',
    height:150,
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    fontFamily: 'Inter_700Bold',
    fontSize:22
  }
})

export default CategoriesScreen;