import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import { Ionicons } from '@expo/vector-icons'
import {Platform, Text, Button, View } from 'react-native';

const HomeStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator mode="card" initialRouteName="Categories" screenOptions={{
        headerStyle: {
          backgroundColor: 'green'
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontFamily:'ubuntu-bold'
        },
        headerBackTitleStyle: {
          fontFamily:'ubuntu-bold'
        }
      }}>
        <HomeStack.Screen name="Categories" component={CategoriesScreen} options={{title:'All Categories'}} />
        <HomeStack.Screen name="Products" component={ProductsScreen} options={{
          headerStyle: {
            backgroundColor: 'orange'
          },
          headerRight: props => <View><Button title="Hello" /></View>
        }} />
        <HomeStack.Screen name="ProductDetail" component={ProductDetailScreen} options={{
          title: "Details",
          headerShown:false
        }} />
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;