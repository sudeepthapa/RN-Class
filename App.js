import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heading, Title } from './components/typography'

const App = () => {
  const data = ['Alex', 'Vijay', 'Ram'];
  return (
    <View style={styles.screen}>
      <Heading>Notifications!</Heading>
      {
        data.map(a => {  
          return <View key={a} style={styles.card}>
            <Text style={{color:'#444'}}> <Text style={{fontWeight:'bold'}}>{a}</Text> likes your photo.</Text>
          </View>
        })
      }
      <Title color="dark">Flutter</Title>
      <Text numberOfLines={3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,
    padding:20
  },
  title: {
    fontSize: 20,
    fontWeight:'bold'
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    marginVertical:10,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 1,
    shadowOffset: {
      height: 10,
      width:0
    }
    
  }
})


export default App;