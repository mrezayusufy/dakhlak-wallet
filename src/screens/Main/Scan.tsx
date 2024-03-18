import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { Stack } from 'expo-router'
import Action from '@/src/components/action'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ScanScreen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <Stack.Screen options={{ 
                headerShown: true,
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: Colors.bg
                },
                headerTitle: () => <Text style={{fontSize: 28, fontWeight: "bold"}}>Scan</Text>,
            }}/>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />

            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={style.main}>
                    <View style={{ flex: 1, marginTop:80 }}>
                        <Image source={require('@/assets/image/s30.png')} resizeMode='stretch' style={{ height: height / 2.5, width: width - 40, }} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}