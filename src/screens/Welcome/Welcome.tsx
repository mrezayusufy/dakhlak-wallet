import { View, Text, Pressable, Platform, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, Image } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import Ionicon from "@expo/vector-icons/Ionicons"
 
import { router } from 'expo-router'
import { icons } from '@/src/icons'

export default function Welcome() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                {/* <A1/> */}
                <Image source={{uri: icons.a1}} width={24} height={24} style={{ alignSelf: 'center', marginTop: 10 }}/>

                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40 ,marginHorizontal:10}]}>
                    <Text style={[style.title,{color:Colors.active}]}>Welcome</Text>
                    <Text style={[style.r18,{color:Colors.txt}]}>Stay on top by giving the best crypto service to the customers </Text>

                    <Pressable onPress={() => router.navigate('on-boarding')}
                    style={{padding:8,position:'absolute',bottom:50,right:20}}>
                        <View style={[style.shadow,{backgroundColor:Colors.secondary,alignItems:'center',justifyContent:'center',shadowColor:Colors.active,height:80,width:80,borderRadius:50}]}>
                            <Ionicon name='arrow-forward-sharp' size={30} color={Colors.primary}></Ionicon>
                        </View>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}