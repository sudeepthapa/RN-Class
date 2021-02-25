import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';

const FoodStack = createStackNavigator();

const AppNavigator = () => {
  return <NavigationContainer>
    <FoodStack.Navigator>
        <FoodStack.Screen name="Home" component={HomeScreen} />
        <FoodStack.Screen name="Detail" component={DetailScreen} />
    </FoodStack.Navigator>
  </NavigationContainer>
}

export default AppNavigator;