import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List, Card } from 'react-native-paper';
import { useSelector } from 'react-redux'

const Todos = props => {
  const todos = useSelector(state=>state.todos.todos)
  return <View style={{ flex: 1}}>
    {todos.map(todo => {
      return <Card key={todo.id} style={{marginTop:10}}>
        <List.Item
        onPress={()=>props.navigation.navigate('Todo', {todo:todo})}
      title={todo.title}
      left={props => <List.Icon {...props} icon="folder" />}
    />
   </Card>
    }) }
</View>
 }

const styles = StyleSheet.create({})

export default Todos;