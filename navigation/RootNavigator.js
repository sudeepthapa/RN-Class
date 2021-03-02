import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductsScreen from '../screens/ProductsScreen';

import {MaterialIcons} from '@expo/vector-icons'
import CustomDrawer from '../components/CustomDrawer';

// Navigators - Stack, BottomTabs, Drawer, TopTab, 

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SettingStack = createStackNavigator();

const HomeStackNavigator = () => {
  return <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen name="Home" component={HomeScreen} options={(props) => ({
    headerLeft: ()=> <MaterialIcons name="menu" size={30} onPress={()=>{props.navigation.openDrawer()}} />
  })}/>
    <HomeStack.Screen name="Products" component={ProductsScreen} />
  </HomeStack.Navigator>
}

const SettingStackNavigator = () => {
  return <SettingStack.Navigator initialRouteName="Settings" screenOptions={(props) => ({
    headerLeft: ()=> <MaterialIcons name="menu" size={30} onPress={()=>{props.navigation.openDrawer()}} />
  })}>
    <SettingStack.Screen name="Settings" component={SettingsScreen} />
    <SettingStack.Screen name="Products" component={ProductsScreen} />
  </SettingStack.Navigator>
}

const RootNavigator = () => {
  return <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Home"
      
      drawerType="slide"
      drawerContent={(props)=> <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeStackNavigator} options={{
        drawerIcon:(props)=><MaterialIcons name="home" size={props.size} color={props.color}/>
      }} />
      <Drawer.Screen name="Settings" component={SettingStackNavigator} options={{
        drawerIcon:(props)=><MaterialIcons name="settings" size={props.size} color={props.color} />
      }} />
    </Drawer.Navigator>
  </NavigationContainer>
}



export default RootNavigator;