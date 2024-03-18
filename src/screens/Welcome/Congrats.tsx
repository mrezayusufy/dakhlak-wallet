import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity, Pressable, Image } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { router } from 'expo-router'
import { icons } from '@/src/icons'



export default function CongratsScreen() {
  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40, marginHorizontal: 10 ,justifyContent:'center'}]}>
                    <Image source={{uri: icons.tick}} width={24} height={24} style={{ alignSelf: 'center',  }}/>
                    <Text style={[style.title,{color:Colors.active,marginTop:30,textAlign:'center'}]}>Congrats!</Text>
                    <Text style={[style.r18,{color:'#191C3275',textAlign:'center'}]}>Account Ceated Succesfully</Text>
                </View>
                <Pressable  onPress={() => router.navigate('(tabs)')}
                    style={[style.btn, { marginTop: 40 ,marginHorizontal:60,marginBottom:50}]}>
                    <Text style={[style.btntxt, { marginBottom: -4 }]}>Get Started</Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
  )
}