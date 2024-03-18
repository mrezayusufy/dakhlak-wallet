import React from "react"
import { Animated, View, Easing, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { icons, images } from "../icons";
import { Image } from 'expo-image';
interface ITabIcon {
  focused: boolean,
  icon: React.ReactNode
}

const TabIcon = ({focused, icon}: ITabIcon) => {
  const topValue = new Animated.Value(0);
  
  React.useEffect(() => {
    if(focused) {
      Animated.timing(topValue, {
        toValue: 20,
        duration: 300, 
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false
      }).start();
    } else {
      Animated.timing(topValue, {
        toValue: 90, 
        duration: 300,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false
      }).start();
    }
  },[])
  
  const size = 20;
  
  return <View style={{position: 'relative'}}>
    {icon}
    {/* <Animated.View style={[styles.box, { top: topValue}]}></Animated.View> */}
    <Image source={images.blob} style={{width: 24, height: 24, left: 10, position: 'absolute', top: focused ? 10 : 90}}/>
  </View>
}

const styles = StyleSheet.create({
  box: {
    width: 10,
    height: 10,
    backgroundColor: Colors.light.tabIconDefault,
    position: 'absolute',
  },
});
export default TabIcon;