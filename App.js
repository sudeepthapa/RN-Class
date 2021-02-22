import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Platform, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Container, Header, Content, Button, Text, Spinner } from 'native-base';

// const BodyText = (props) => {
//   return <Text style={{fontFamily:'Inter_400Regular', fontSize:14}}>{ props.children }</Text>
// }
// const H1 = (props) => {
//   return <Text style={{fontFamily:'ubuntu-regular', fontSize:24}}>{ props.children }</Text>
// }

import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import { loadAsync } from 'expo-font';

export default function App() {
  const [isReady, setIsReady] = React.useState(false)

  const loadFont = async () => {
    await loadAsync({
      Inter_700Bold,
      Inter_400Regular,
      // @ts-ignore
      'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
      // @ts-ignore
      'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
      // @ts-ignore
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      // @ts-ignore
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    })
    setIsReady(true)
  }

  React.useEffect(() => {
    loadFont()
  }, [])
  
  if (!isReady) {
    return <Button><Text>Loading</Text></Button>
  }
  return (
    <Container>
        <Header />
        <Content>
          <Button bordered light>
            <Text>Light</Text>
          </Button>
          <Button bordered>
            <Text>Primary</Text>
          </Button>
          <Button bordered success>
            <Text>Success</Text>
          </Button>
          <Button bordered info>
            <Text>Info</Text>
          </Button>
          <Button bordered warning>
            <Text>Warning</Text>
          </Button>
          <Button bordered danger>
            <Text>Danger</Text>
          </Button>
          <Button bordered dark>
            <Text>Dark</Text>
        </Button>
        <Spinner />
          <Spinner color='green' />
          <Spinner color='blue' />
        </Content>
      </Container>
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
