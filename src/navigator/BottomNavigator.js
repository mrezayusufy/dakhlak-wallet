import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from '../screens/Home';
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../theme/color';
import Icon from 'react-native-vector-icons/FontAwesome5'
import style from '../theme/style';
import Home from '../screens/Main/Home';
import Trending from '../screens/Main/Trending';
import MyWallet from '../screens/Main/MyWallet';
import Scan from '../screens/Main/Scan';
import Account from '../screens/Main/Account';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70, backgroundColor: '#FFFFFF', borderTopColor: '#FFFFFF', paddingBottom: 8 },
        tabBarShowLabel: false,

      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t1.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 5 ,tintColor:focused ? Colors.primary  : '#CED0DE'}} />
          },

          headerShown: false,
        }}
      />

      <Tab.Screen name="Trending" component={Trending}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t2.png')} resizeMode='stretch'
              style={{ height: 24, width: 17, marginTop: 5,tintColor:focused ? Colors.primary : '#CED0DE' }} />
          },

          headerShown: false,
        }} />

      <Tab.Screen name="MyWallet" component={MyWallet}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t3.png')} resizeMode='stretch'
              style={{ height: 21, width: 24, marginTop: 5 ,tintColor:focused ? Colors.primary : '#CED0DE'}} />
          },

          headerShown: false,
        }} />

      <Tab.Screen name="Scan" component={Scan}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t4.png')} resizeMode='stretch'
              style={{ height: 20, width: 20, marginTop: 5 ,tintColor:focused ? Colors.primary : '#CED0DE'}} />
          },

          headerShown: false,
        }} />

      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t5.png')} resizeMode='stretch'
              style={{ height: 22, width: 22, marginTop: 5 ,tintColor:focused ? Colors.primary : '#CED0DE'}} />
          },

          headerShown: false,
        }} />


    </Tab.Navigator>
  );
}


