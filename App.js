import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Ionicons name="menu-sharp" size={32} color="white" />
        <MaterialIcons name="search" size={32} color="white" />
        <Text style={styles.text}>Conversation</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>Conversation</Text>
        <Text style={styles.text}>Conversation1</Text>
        <Text style={styles.text}>Conversation2</Text>
        <Text style={styles.text}>Conversation3</Text>
      </View>
      <View style={styles.view3}>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.text}>A</Text>
          </View>
          <View>
            <Text style={styles.text}>B</Text>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View>
            <Text style={styles.text}>C</Text>
          </View>
          <View >
            <Text style={styles.text}>D</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  view1: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#f00'
  },
  view2: {
    flex:8,
    backgroundColor: '#0f0',
    alignItems: 'flex-end',
    justifyContent:'flex-end'
  },
  view3: {
    flex: 2,
    backgroundColor: '#00f',
    justifyContent:'space-between'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'#fff'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent:'space-between'
  }
});
