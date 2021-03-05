import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllTodosScreen from '../screens/AllTodosScreen';
import PriorityTodos from '../screens/PriorityTodos';
import CompletedTodosScreen from '../screens/CompletedTodosScreen';
import { Ionicons } from '@expo/vector-icons';

const CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#07BEB8',
    text: '#333'
  }
}

const AppNavigator = () => {
  return (
    <NavigationContainer theme={CustomTheme}>
      <TabNavigator />
    </NavigationContainer>
  )
}

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel:false
    }}>
      <Tab.Screen name="AllTodos" component={AllTodosScreen} options={{
        tabBarIcon: (props)=> <Ionicons name="list" color={props.color} size={props.focused ? props.size*1.3 : props.size} />
      }} />
      <Tab.Screen name="PriorityTodos" component={PriorityTodos} options={{
        tabBarIcon: (props)=> <Ionicons name="flash" color={props.color} size={props.focused ? props.size*1.3 : props.size} />
      }}/>
      <Tab.Screen name="CompletedTodos" component={CompletedTodosScreen} options={{
        tabBarIcon: (props)=> <Ionicons name="checkmark" color={props.color} size={props.focused ? props.size*1.3 : props.size} />
      }}/>
    </Tab.Navigator>
  )
}

export default AppNavigator;