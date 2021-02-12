import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator, Image } from 'react-native';
import { CustomButton, CustomButton2, CustomButton3, CustomButton4 } from './components/buttons';

export default function App() {

  const clickHandler = () => {
    console.log("Button was clicked.")
  }

  return (
    <View style={styles.container}>
      <Text>Buttons</Text>
      <View style={{width:'80%'}}>
        <Button title="Click Me" onPress={clickHandler} />
      </View>
      <View style={{width:'80%'}}>
        <Button title="Click Me" color="red" onPress={clickHandler} />
      </View>
      <View style={{width:'80%', marginBottom:40}}>
        <Button title="Click Me" color="red" disabled onPress={clickHandler} />
      </View>
      <CustomButton color="red" textColor="white" title="TouchableOpacity" onButtonPlaceCustomEventHandler={clickHandler} />
      <Text>Custom Buttons</Text>
      <CustomButton2 color="green" textColor="white" title="TouchableHighlight" onButtonPlaceCustomEventHandler={clickHandler} />
      <Text>Custom Buttons</Text>
      <CustomButton3 color="blue" textColor="white" title="TouchableNativeFeedback" onButtonPlaceCustomEventHandler={clickHandler} />
      <Text>Custom Buttons</Text>
      <CustomButton4 color="pink" textColor="black" title="TouchableWithoutFeedback" onButtonPlaceCustomEventHandler={clickHandler} />
      <ActivityIndicator color="red" size="large" />
      <Image style={styles.image} source={{uri:"https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png"}}/>
      <Image style={styles.image} source={require('./assets/favicon.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:50,
    resizeMode:'cover'
  }
});
