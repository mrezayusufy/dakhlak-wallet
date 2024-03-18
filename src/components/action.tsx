import React from "react";
import {View} from "react-native";
import { Ionicons as Icon } from "@expo/vector-icons";
export default function Action({name}: {name: any}){
  return <View style={{backgroundColor: "white", borderRadius: 32, padding: 7, marginEnd: 20, marginStart: 20, elevation: 5}}>
  <Icon name={name} size={24} color="gray"  />
</View>
}