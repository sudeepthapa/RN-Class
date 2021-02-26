import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import COLORS from '../constants/colors';
import {Ionicons} from '@expo/vector-icons'
import Profile from '../screens/Profile';

const FoodStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
}

const FoodStackNavigator = () => {
  return <FoodStack.Navigator>
  <FoodStack.Screen name="Home" component={HomeScreen} />
  <FoodStack.Screen name="Detail" component={DetailScreen} />
</FoodStack.Navigator>
}

const ProfileStackNavigator = () => {
  return <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
}

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ 
      activeTintColor: COLORS.primary,
      showLabel:false
     }}>
      <Tab.Screen name="Home" component={FoodStackNavigator} options={{
        tabBarIcon: ({ focused, color, size }) => {
          if (focused) {
            return <Ionicons name="home" size={24} color={COLORS.primary} />
          }
          return <Ionicons name="home" size={20} color="#aaa" />
        }
      }} />
      <Tab.Screen name="Search" component={FoodStackNavigator} options={{
        tabBarIcon: ({ focused, color, size }) => {
          if (focused) {
            return <Ionicons name="search" size={30} color={COLORS.primary} />
          }
          return <Ionicons name="search" size={20} color="#aaa" />
        }
      }}  />
      <Tab.Screen name="Favourite" component={FoodStackNavigator} options={{
        tabBarIcon: ({ focused, color, size }) => {
          if (focused) {
            return <Ionicons name="heart" size={24} color={COLORS.primary} />
          }
          return <Ionicons name="heart" size={20} color="#aaa" />
        }
      }} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} options={{
        tabBarIcon: ({ focused, color, size }) => {
          if (focused) {
            return <Ionicons name="person" size={24} color={COLORS.primary} />
          }
          return <Ionicons name="person" size={20} color="#aaa" />
        }
      }} />
    </Tab.Navigator>
  )
}

export default AppNavigator;