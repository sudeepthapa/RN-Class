import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

const BodyText = (props) => {
  return <Text style={{fontFamily:'Inter_400Regular', fontSize:14}}>{ props.children }</Text>
}
const H1 = (props) => {
  return <Text style={{fontFamily:'ubuntu-regular', fontSize:24}}>{ props.children }</Text>
}

import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular,
    // @ts-ignore
    'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
    // @ts-ignore
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
  });
  if (!fontsLoaded) {
    return <Text>LOADING</Text>
  }
  return (
    <View style={styles.container}>
      <BodyText>Open up App.js to start working on your app!</BodyText>
      <StatusBar style="auto" />
      <Ionicons name={Platform.OS === 'android' ? 'md-add' : 'ios-add'} />
      <H1>
        {JSON.stringify(Dimensions.get('screen'))}
      </H1>
      <Text>
        {JSON.stringify(Dimensions.get('window'))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS==='android' ? 'lightgreen' : '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
