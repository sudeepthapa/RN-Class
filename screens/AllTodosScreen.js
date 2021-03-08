import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Appbar, Modal, TextInput, Checkbox, Button, List, Paragraph, Dialog, Portal, Text } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, markAsComplete } from '../store/actions/todos';

const AllTodosScreen = props => {

  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [selectedTodoId, setSelectedTodoId] = React.useState('');
  const [priority, setPriority] = React.useState(false);

  const [openDialog, setOpenDialog] = React.useState(false);

  const hideDialog = () => setOpenDialog(false);


  const dispatch = useDispatch();
  const todos = useSelector(state => state.todosState.todos)
  
  const showModal = () => setVisible(true);
  const hideModal = () => {
    setDescription('')
    setTitle('')
    setPriority(false)
    setVisible(false)
  };

  const submitForm = () => {
    const todo = {
      id: Math.random().toString(),
      title,
      description,
      priority,
      isComplete: false,
    }
    dispatch(addTodos(todo))
    hideModal();
  }

  const handleListTap = (id) => {
    setOpenDialog(true);
    setSelectedTodoId(id)
  }

  const { colors } = useTheme();
  return <View style={{ flex: 1 }}>
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      <Appbar.Content titleStyle={{ color: '#fff' }} title="All Todos" />
      <Appbar.Action icon="plus" color="#fff" size={30} onPress={showModal} />
    </Appbar.Header>
    {
      todos.map(todo => {
        return <List.Item
          onPress={()=>handleListTap(todo.id)}
          key={todo.id}
        title={todo.title}
        description={todo.description}
        left={props => <List.Icon {...props} icon={todo.isComplete?'check':'clipboard-list'} />}
        right={props => todo.priority ? <List.Icon {...props} icon={'priority-high'} /> : <View></View>}
      />
      })
    }

    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ padding: 20, margin: 20, backgroundColor: '#fff' }}>
      <TextInput
        mode="outlined"
        placeholder="Title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        mode="outlined"
        placeholder="Description"
        multiline
        numberOfLines={3}
        value={description}
        onChangeText={text => setDescription(text)}
      />
      <Checkbox.Item labelStyle={{ color: '#444' }} label="High Priority" status={priority ? 'checked' : 'unchecked'} onPress={() => { setPriority(!priority) }} />
      <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:30}}>
        <Button  icon="cancel" mode="contained" style={{marginRight:10}} color="#aa0000" onPress={hideModal}>
          Cancel
        </Button>
        <Button icon="content-save"  mode="contained" onPress={submitForm}>
          Save
        </Button>
      </View>
    </Modal>
    <Portal>
      <Dialog visible={openDialog} onDismiss={hideDialog}>
        <Dialog.Title>Do you want to mark this todo as complete?</Dialog.Title>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Cancel</Button>
          <Button onPress={() => {
            dispatch(markAsComplete(selectedTodoId))
            setOpenDialog(false)
          }}>Yes</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  </View>
}

const styles = StyleSheet.create({})

export default AllTodosScreen;