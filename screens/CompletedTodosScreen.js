import { useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper';

const CompletedTodosScreen = props => {
  const { colors } = useTheme();
  return <View style={{ flex:1}}>
    <Appbar.Header style={{backgroundColor: colors.primary}}>
      <Appbar.Content titleStyle={{color:'#fff', textAlign:'center'}} title="Completed" />
    </Appbar.Header>
  </View>
 }

const styles = StyleSheet.create({})

export default CompletedTodosScreen;