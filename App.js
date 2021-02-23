import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { Spinner } from 'native-base';

// const BodyText = (props) => {
//   return <Text style={{fontFamily:'Inter_400Regular', fontSize:14}}>{ props.children }</Text>
// }
// const H1 = (props) => {
//   return <Text style={{fontFamily:'ubuntu-regular', fontSize:24}}>{ props.children }</Text>
// }

import {
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter';
import { loadAsync } from 'expo-font';
import MainNavigator from './navigation/MainNavigator';

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
    return <Spinner color='green' />
  }
  return (
    <MainNavigator />
  );
}
