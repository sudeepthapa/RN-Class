import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native'

const CustomButton = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...styles.button, backgroundColor: props.color }}>
        <Text style={{ ...styles.buttonText, color: props.textColor }}>{ props.title }</Text>
      </View>
   </TouchableOpacity>
  )
}
 
const CustomButton2 = props => {
  return (
    <TouchableHighlight activeOpacity={0.5} underlayColor="green" onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...styles.button, backgroundColor: props.color }}>
        <Text style={{ ...styles.buttonText, color: props.textColor }}>{ props.title }</Text>
      </View>
   </TouchableHighlight>
  )
 }
const CustomButton3 = props => {
  return (
    <TouchableNativeFeedback onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...styles.button, backgroundColor: props.color }}>
        <Text style={{ ...styles.buttonText, color: props.textColor }}>{ props.title }</Text>
      </View>
   </TouchableNativeFeedback>
  )
 }
const CustomButton4 = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onButtonPlaceCustomEventHandler}>
      <View style={{ ...styles.button, backgroundColor: props.color }}>
        <Text style={{ ...styles.buttonText, color: props.textColor }}>{ props.title }</Text>
      </View>
   </TouchableWithoutFeedback>
  )
 }

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 8,
    borderRadius:5
  },
  buttonText: {
    fontWeight:'bold'
  }
})

export {CustomButton, CustomButton2, CustomButton3, CustomButton4};