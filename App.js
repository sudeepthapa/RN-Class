import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';
import COLORS from './constants/COLOR';
import {Ionicons} from '@expo/vector-icons'
import TodoForm from './components/TodoForm';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [todos, addTodo] = React.useState([])

  const handleSubmit = (data) => {
    addTodo([{...data, isComplete:false, id: Math.random().toString()}, ...todos])
    setIsOpen(false)
  }

  const switchIsComplete = (todoId, value) => {
    console.log(todoId, value);
    const todosCopy = [...todos];
    const updatedTodos = todosCopy.map(todo => {
      if (todo.id == todoId) {
        todo.isComplete = value;
        return todo;
      }
      return todo;
    })
    addTodo(updatedTodos)
  }

  const completeTodos = todos.filter(todo=>todo.isComplete)

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header noOfTodos = {todos.length} completed = {completeTodos.length} />
      <Todos todos={todos} changeIsComplete = {switchIsComplete} />
      <View style={styles.floatingActionButton}>
        <Ionicons name="add" onPress={()=>setIsOpen(true)} color={COLORS.white} size={28}/>
      </View>
      <Modal visible ={isOpen} statusBarTranslucent>
        <TodoForm cancel={() => setIsOpen(false)} submit={ handleSubmit } /> 
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    paddingTop: 20,
    position: 'relative'
  },
  floatingActionButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 30,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.primary
  },
  
});
