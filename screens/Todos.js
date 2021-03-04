import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { List, Card } from 'react-native-paper';

const Todos = props => {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      title: 'Hello',
    },
    {
      id: 2,
      title: 'Hello1',
    },
    {
      id: 3,
      title: 'Hello2',
    },
    {
      id: 4,
      title: 'Hello3',
    },
  ])

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