import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import COLORS from '../constants/COLOR'

const Todo = ({todo}) => {
  return <View style={styles.todo}>
    <View>
      <Text style={styles.title}>{todo.title}</Text>
      <Text style={styles.date}>{ todo.note }</Text>
    </View>
    <View>
      <Switch value={todo.isComplete} />
    </View>
  </View>
}

const styles = StyleSheet.create({
  todo: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  title: {
    color: '#333',
    fontWeight: 'bold'
  },
  date: {
    color: COLORS.textDark,
    fontWeight: 'bold',
    fontSize: 12
  },
})

export default Todo;