import { useTheme } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Appbar, List } from 'react-native-paper';
import { useSelector } from 'react-redux'

const CompletedTodosScreen = props => {
  const { colors } = useTheme();
  const allTodos = useSelector(state => state.todosState.todos)
  const completedTodos = allTodos.filter(todo => todo.isComplete);

  return <View style={{ flex:1}}>
    <Appbar.Header style={{backgroundColor: colors.primary}}>
      <Appbar.Content titleStyle={{color:'#fff', textAlign:'center'}} title="Completed" />
    </Appbar.Header>
    {
      completedTodos.map(todo => {
        return <List.Item
          key={todo.id}
        title={todo.title}
        description={todo.description}
        left={props => <List.Icon {...props} icon={todo.isComplete?'check':'clipboard-list'} />}
        right={props => todo.priority ? <List.Icon {...props} icon={'priority-high'} /> : <View></View>}
      />
      })
    }
  </View>
 }

const styles = StyleSheet.create({})

export default CompletedTodosScreen;