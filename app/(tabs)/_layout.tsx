import React from 'react';
import {StyleSheet, Text} from 'react-native';
// import {Image} from "react-native"
import { Link, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import TabIcon from '@/src/components/tabIcon';
import { icons } from '@/src/icons';
import { Image } from 'expo-image';
import { Icon } from '../_layout';

export default function TabLayout() {
   

  const colorScheme = useColorScheme();
  const headerStyle = {
    fontSize: 0,
    height: 0,
    width: 0,
    padding: 0,
    margin: 0,
  }
 
  const size = 32;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.text,
        tabBarStyle: {
          height: 64,
          paddingVertical: 10,
        },
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{  
          title: '',
          tabBarIcon: ({focused, color}) => {  
            return (
              <TabIcon focused={focused} icon={<Icon name='home' size={size} color={color}/>} />
            );
          }
        }}
      />
      <Tabs.Screen
        name="trending"
        options={{
          title: '',
          headerShown: false,
          headerTitleStyle: headerStyle,
          tabBarIcon:({focused, color}) => (
            <TabIcon  focused={focused} icon={<Icon name='trending' size={size} color={color} />} />
          )
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          headerShown: false,
          title: '',
          headerTitleStyle: headerStyle,
          tabBarIcon:({focused, color}) => (
            <TabIcon  focused={focused} icon={<Icon name='wallet' size={size} color={color}/>} />
          ),
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          headerShown: false,
          title: '',
          headerTitleStyle: headerStyle,
          tabBarIcon:({focused, color}) => (
          <TabIcon focused={focused}  icon={<Icon name='scan' size={size} color={color}/>} />),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          headerShown: false,
          title: '',
          headerTitleStyle: headerStyle,
          tabBarIcon:({focused, color}) => (
            <TabIcon  focused={focused} icon={<Icon name='account' size={size} color={color}/>} />
          ),
        }}
      />
    </Tabs>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blob: {
    position: 'absolute',
    top: 10
  },
  icon: {
    fontSize: 24,
    color: 'black',
    top: 5,
  },
});