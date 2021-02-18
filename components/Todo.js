import React from 'react'
import { View, Text, StyleSheet, Switch } from 'react-native'
import COLORS from '../constants/COLOR'

const Todo = ({todo, handleToggle}) => {
  return <View style={styles.todo}>
    <View>
      <Text style={{...styles.title, textDecorationLine: todo.isComplete ? 'line-through':'none'}}>{todo.title}</Text>
      <Text style={{...styles.date, textDecorationLine: todo.isComplete ? 'line-through':'none'}}>{ todo.note }</Text>
    </View>
    <View>
      <Switch value={todo.isComplete} onValueChange={ (value) => handleToggle(todo.id, value) }/>
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