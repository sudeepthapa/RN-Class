import React from 'react'
import { View, StyleSheet } from 'react-native';
import { Appbar, Modal, TextInput, Checkbox, Button } from 'react-native-paper';
import { useTheme } from '@react-navigation/native'

const AllTodosScreen = props => {
  const [visible, setVisible] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [priority, setPriority] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setDescription('')
    setTitle('')
    setPriority(false)
    setVisible(false)
  };

  const { colors } = useTheme();
  return <View style={{ flex: 1 }}>
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      <Appbar.Content titleStyle={{ color: '#fff' }} title="All Todos" />
      <Appbar.Action icon="plus" color="#fff" size={30} onPress={showModal} />
    </Appbar.Header>

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
        <Button icon="content-save"  mode="contained" onPress={() => console.log('Pressed')}>
          Save
        </Button>
      </View>
    </Modal>
  </View>
}

const styles = StyleSheet.create({})

export default AllTodosScreen;