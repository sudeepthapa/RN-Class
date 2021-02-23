import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';

const ProductDetailScreen = props => {
  return <View style={styles.screen}>
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' onPress={() => props.navigation.goBack()} />
        </Button>
      </Left>
      <Body>
        <Title>Details</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='search' />
        </Button>
        <Button transparent>
          <Icon name='heart' />
        </Button>
        <Button transparent>
          <Icon name='more' />
        </Button>
      </Right>
    </Header>
    <Text style={styles.title}> PRODUCT DETAIL PAGE </Text>
    {/* <Button bordered onPress={() => props.navigation.goBack()}> <Text>GO BACK</Text> </Button> */}

  </View>
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: Dimensions.get('window').width
  },
  title: {
    fontFamily: 'ubuntu-bold',
    fontSize: 22
  }
})

export default ProductDetailScreen;