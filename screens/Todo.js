import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Badge, Card, IconButton } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { markAsFav } from '../store/actions/todos'

const Todo = props => {
  const dispatch = useDispatch()
  return <View>
    <Card style={{margin:30, padding:30, flexDirection:'row'}}>
      <Text>{props.route.params.todo.title}</Text>
      <IconButton
        icon="heart"
        size={20}
        onPress={() => dispatch(markAsFav(props.route.params.todo))}
      />
    </Card>
</View>
 }

const styles = StyleSheet.create({})

export default Todo;