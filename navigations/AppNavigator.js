import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import COLORS from '../constants/colors';
import {Ionicons} from '@expo/vector-icons'
import BioScreen from '../screens/BioScreen';
import PersonalScreen from '../screens/PersonalScreen';
import AccountScreen from '../screens/AccountSetting';
import SettingScreen from '../screens/SettingScreen';

const FoodStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileTabs = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
}

const FoodStackNavigator = () => {
  return <FoodStack.Navigator>
  <FoodStack.Screen name="Home" component={HomeScreen} />
  <FoodStack.Screen name="Detail" component={DetailScreen} />
</FoodStack.Navigator>
}

const ProfileStackNavigator = () => {

  return <ProfileStack.Navigator screenOptions={{
    headerTitleAlign:'center'
  }} >
    <ProfileStack.Screen name="Profile" component={ProfileTabsNavigator} options={({ navigation, route }) => ({
          headerLeft: props => <Ionicons name="menu" onPress={()=>navigation.openDrawer()} size={30} style={{paddingLeft:10}} />,
        })} />
  </ProfileStack.Navigator>
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ 
      activeTintColor: COLORS.primary,
      showLabel:false
    }}
    >
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
        tabBarBadge: '22',
        tabBarBadgeStyle: {
          backgroundColor: COLORS.primary,
          fontSize: 9
        },
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

const ProfileTabsNavigator = () => { 
  return <ProfileTabs.Navigator screenOptions={{}}>
    <ProfileTabs.Screen name="Bio" component={BioScreen} options={{}} />
    <ProfileTabs.Screen name="Personal" component={PersonalScreen} />
    <ProfileTabs.Screen name="Contacts" component={PersonalScreen} />
  </ProfileTabs.Navigator>
}

const DrawerNavigator = () => {  
  return <Drawer.Navigator drawerType="slide" initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Account" component={AccountScreen} />
    <Drawer.Screen name="Settings" component={SettingScreen} />
    <Drawer.Screen name="Profile" component={ProfileStackNavigator} />
  </Drawer.Navigator>
}



export default AppNavigator;