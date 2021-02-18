import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Todos from './components/Todos';
import COLORS from './constants/COLOR';
import {Ionicons, Entypo} from '@expo/vector-icons'
import TodoForm from './components/TodoForm';

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [todos, addTodo] = React.useState([
    {
      id: 1,
      title: 'Cook Food',
      note: 'Cooking food is not easy.',
      isComplete: false
    },
    {
      id: 2,
      title: 'Learn RN',
      note: 'Learning is easy.',
      isComplete: true
    }
  ])

  const handleSubmit = () => {
    addTodo([...todos, {
      id: Math.random(),
      title: 'Learn JAVA',
      note: 'Learning is easy.',
      isComplete: true
    }])
    setIsOpen(false)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header noOfTodos = {todos.length} />
      <Todos todos={todos} />
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
