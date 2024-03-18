import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Modal, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


import { router } from 'expo-router'
import { icons } from '@/src/icons'


export default function Withdraw() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop:  Platform.OS === 'ios' ? 10 : 40 , marginHorizontal: 10 }]}>
                    
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 10 }]}>$ 1000</Text>
                        <Text style={[style.r17, { color: Colors.disable, textAlign: 'center', marginTop: -10 }]}>Transfer Amount</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 8, height: 44 }}>
                                <Text style={[style.b18, { color: '#191C3230' }]}>50</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 8, height: 44, marginHorizontal: 15 }}>
                                <Text style={[style.b18, { color: '#191C3230' }]}>100</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 8, height: 44 }}>
                                <Text style={[style.b18, { color: '#191C3230' }]}>200</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 17 }}>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 8, height: 44 }}>
                                <Text style={[style.b18, { color: '#191C3230' }]}>400</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 8, height: 44, marginHorizontal: 15 }}>
                                <Text style={[style.b18, { color: '#191C3230' }]}>700</Text>
                            </View>
                            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#11CABE30', borderRadius: 8, height: 44 }}>
                                <Text style={[style.b18, { color: Colors.primary }]}>1000</Text>
                            </View>
                        </View>

                        <Text style={[style.s20, { color: Colors.active, marginTop: 40 }]}>Choose Card</Text>

                        <View style={{marginTop:10}}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Image source={require('@/assets/image/a13.png')} style={{ height: 178, width: 91 }}></Image>
                                <Image source={{uri: icons.masterCardPlatinum}} width={24} height={24} style={{ marginHorizontal: 12 }}  />
                                <Image source={{uri: icons.masterCardGold}} width={24} height={24} />
                            </ScrollView>
                        </View>

                        <TouchableOpacity onPress={() => router.navigate('ErrorS')}
                            style={[style.btn, { marginTop: 50,marginBottom:20 }]}>
                            <Text style={[style.btntxt, { marginBottom: -4 }]}>Withdraw</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}