import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import {useTheme} from '@react-navigation/native'

const AllTodosScreen = props => {
  const { colors } = useTheme();
  return <View style={{ flex:1}}>
    <Appbar.Header style={{backgroundColor: colors.primary}}>
      <Appbar.Content titleStyle={{color:'#fff'}} title="All Todos" />
      <Appbar.Action icon="plus" color="#fff" size={30} onPress={null} />
    </Appbar.Header>
  </View>
 }

const styles = StyleSheet.create({})

export default AllTodosScreen;