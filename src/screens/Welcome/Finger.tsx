import { View, Text, SafeAreaView, Image, KeyboardAvoidingView, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'

import { router } from 'expo-router'
import { icons } from '@/src/icons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function FingerScreen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40, marginHorizontal: 10 ,justifyContent:'center'}]}>
                    <Image source={{uri: icons.fingerPrint}} style={{ alignSelf: 'center',  }} width={width} height={120} />
                </View>
                <TouchableOpacity onPress={() => router.navigate('(auth)/congrats')}
                    style={[style.btn, { marginTop: 40 ,marginHorizontal:40,marginBottom:50}]}>
                    <Text style={[style.btntxt, { marginBottom: -4 }]}>Sign Up By Fingers</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}