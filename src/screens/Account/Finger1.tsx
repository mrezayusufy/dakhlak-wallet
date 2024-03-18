import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { router } from 'expo-router'
import { icons } from '@/src/icons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Finger1() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40, marginHorizontal: 10 ,justifyContent:'center'}]}>
                    <Image source={{uri: icons.fingerPrint}} width={width} height={200} style={{ alignSelf: 'center',  }} />
                </View>
                <TouchableOpacity  onPress={() => router.navigate('MyTabs')}
                    style={[style.btn, { marginTop: 40 ,marginHorizontal:40,marginBottom:50}]}>
                    <Text style={[style.btntxt, { marginBottom: -4 }]}>Sign Up By Fingers</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}