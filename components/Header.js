import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons} from '@expo/vector-icons'
import COLORS from '../constants/COLOR'

const Header = props => {
  return <View style={styles.header}>
      <View style={styles.iconButton}>
        <Ionicons name="clipboard-outline" color={COLORS.primary} size={22} />
    </View>
    <Text style={styles.heading}>All - { props.noOfTodos } Tasks</Text>
    <Text style={styles.text}>{props.noOfTodos - props.completed} Remaining </Text>
    <Text style={styles.text}>{ props.completed } Completed</Text>
  </View>
 }

const styles = StyleSheet.create({
  header: {
    height: 200,
    padding: 30,
    justifyContent:'flex-end'
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent:'center'
  },

  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 10,
    letterSpacing:1
  },
  text: {
    color:COLORS.textLight
  }
})

export default Header;