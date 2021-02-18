import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native'
import {Picker} from '@react-native-community/picker'
import { Entypo } from '@expo/vector-icons'
import COLORS from '../constants/COLOR'
import { CATEGORIES } from '../constants/DATA'

const TodoForm = props => {

  const [title, setTitle] = React.useState('');
  const [note, setNote] = React.useState('');
  const [category, setCategory] = React.useState(null);

  return <ScrollView>
    <View style={styles.form}>
    <View style={styles.formHeader}>
      <View style={styles.textContainer}>
        <Text style={styles.text}> New Task</Text>
      </View>
      <Entypo onPress={props.cancel} name="cross" color={COLORS.textDark} size={28} />
    </View>
    <View style={styles.formBody}>
      <View style={styles.formGroup}>
        <Text style={{ color: COLORS.textDark }}>What are you planning?</Text>
        <TextInput multiline numberOfLines={5} style={styles.input} value={title} onChangeText={(text)=>setTitle(text)} />
      </View>
      <View style={styles.formGroup}>
        <Text style={{ color: COLORS.textDark }}>Add Note</Text>
        <TextInput multiline numberOfLines={5} style={styles.input} value={note} onChangeText={(text)=>setNote(text)} />
      </View>
      <View style={styles.formGroup}>
        <Text style={{ color: COLORS.textDark }}>Category</Text>
        <Picker
          style={{ height: 50, width: '100%', marginBottom: 30, borderBottomColor: COLORS.textDark, borderBottomWidth: 1 }}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}
            selectedValue={category}
            mode="dropdown"
        >
          <Picker.Item label="Select Category" color="#aaa" value={null} />
          {
            CATEGORIES.map(category => {
              return <Picker.Item key={category.id} label={category.title} value={category.title} />
            })
          }
      </Picker>
      </View>
      <Button title="Submit" onPress={()=>props.submit({title, note, category})}></Button>
    </View>
  </View>
  </ScrollView>
}

const styles = StyleSheet.create({
  form: {
    padding: 30
  },
  formHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    alignContent: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#444',
    textAlign: 'center'
  },
  formBody: {
    paddingVertical:20
  },
  input: {
    borderBottomColor: COLORS.textDark,
    borderBottomWidth:1
  },
  formGroup: {
    marginBottom:15
  }
})

export default TodoForm;