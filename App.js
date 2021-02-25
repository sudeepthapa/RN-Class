import React from 'react';
import * as Fonts from 'expo-font'
import AppLoading from 'expo-app-loading'
import AppNavigator from './navigations/AppNavigator';

const fetchFonts = () => {
  return Fonts.loadAsync({
    // @ts-ignore
    'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
    // @ts-ignore
    'ubuntu': require('./assets/fonts/Ubuntu-Regular.ttf')
  });
}

export default function App() {

  const [isReady, setIsReady] = React.useState(false);

  if (!isReady) return <AppLoading onError={(err)=>console.log(err)} startAsync={fetchFonts} onFinish={()=>setIsReady(true)} />
  return <AppNavigator />;
}
