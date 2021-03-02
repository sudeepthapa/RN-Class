import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

const CustomDrawer = props => {
  return <DrawerContentScrollView {...props}>
    <View style={{flex:1}}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <View style={{
          width: 60, height: 60, borderRadius: 30, borderWidth: 1, borderColor: 'grey',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <Ionicons name="person" size={40} />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text>Sudip Thapa</Text>
          <Text>testemail@gmail.com</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </View>

    <DrawerItem label="Logout" onPress={null} icon={(props) => <Ionicons size={props.size} color={props.color} name="log-out" />} />

  </DrawerContentScrollView>
}

const styles = StyleSheet.create({})

export default CustomDrawer;