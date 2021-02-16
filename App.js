import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Button, Text, Alert, Modal } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isOpen, setIsOpen] = useState(false)

  const onSubmitHandler = () => {
    Alert.alert(
      'Do you want to submit?',
      'Submitting this form will lead to login of user.',
      [
        {
          text: "Cancel",
          onPress: () => { },
          style:"cancel"
        },
        {
          text: "OK",
          onPress: () => {
            console.log("You have successfully loggedIn")
          }
        }
      ]
    )
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="words"
        placeholder="Username"
        placeholderTextColor="#777"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#777"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={onSubmitHandler} />
      <Button title="OpenModal" onPress={()=>setIsOpen(true)} />
      <Modal visible={isOpen} transparent animationType="fade" statusBarTranslucent>
        <View style={styles.modalView}>
          <View style={styles.modalBody}>
            <Text>Hello </Text>
            <Text>Hello1 </Text>
            <Text>Hello 2</Text>
            <Text>Hello 3</Text>
            <Text>Hello 4</Text>
            <Text>Hello 55</Text>
            <Button title="CloseModal" onPress={()=>setIsOpen(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    borderColor: '#777',
    borderWidth: 1,
    width: 300,
    height:40,
    paddingHorizontal: 15,
    marginBottom:20
  },
  modalView: {
    flex:1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBody: {
    padding:30,
    backgroundColor:'#fff'
  }
});
