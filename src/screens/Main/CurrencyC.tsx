import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Modal, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

import { router } from 'expo-router'
import { icons } from '@/src/icons'

export default function CurrencyC() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop:  Platform.OS === 'ios' ? 10 : 30 , marginHorizontal: 10 }]}>
                    
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                            <Image source={{uri: icons.usdCard}} width={24} height={24} style={{ marginLeft: -10 }} />

                            <Image source={require('@/assets/image/a9.png')} resizeMode='stretch' style={{ height: 20, width: 20, marginBottom: 50 }}></Image>
                            <Image source={{uri: icons.euroCard}} width={24} height={24} style={{ marginTop: -10 }} />
                        </View>

                        <View style={{ backgroundColor: Colors.primary, borderRadius: 8, height: 95, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[style.r12, { fontSize: 30, color: Colors.secondary }]}>1 EUR  = 0,70 USD</Text>
                            <Text style={[style.b15, { color: Colors.secondary, marginTop: -10 }]}>- 0.78 past month</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40 }}>
                            <Text style={[style.s15, { color: Colors.active }]}>Fee</Text>
                            <Text style={[style.s14, { color: Colors.active }]}>3.43 USD</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.s15, { color: Colors.active }]}>Amount converted</Text>
                            <Text style={[style.s14, { color: Colors.active }]}>307.02 USD</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={[style.s15, { color: Colors.active }]}>Rate</Text>
                            <Text style={[style.s14, { color: Colors.active }]}>0.78</Text>
                        </View>

                        <TouchableOpacity onPress={() => router.navigate('Transfer')}
                            style={[style.btn, { marginTop: 50, marginBottom:20}]}>
                            <Text style={[style.btntxt, { marginBottom: -4 }]}>Continue</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}