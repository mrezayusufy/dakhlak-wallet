import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { useNavigation } from '@react-navigation/native'
import {Ionicons as Icon} from '@expo/vector-icons';


import { router } from 'expo-router'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PortfolioScreen() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Image source={require('@/assets/image/s8.png')} resizeMode='stretch' style={{ height: height / 8, width: width - 40 }} />

                        <Text style={[style.m25, { color: Colors.active, marginTop: 20 }]}>Assets</Text>

                        <TouchableOpacity onPress={() => router.navigate('ethereum')}
                        style={{marginTop:15, backgroundColor: Colors.secondary, padding: 18, borderRadius: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.r16, { color: Colors.disable, }]}>Ethereum</Text>
                                    <Text style={[style.m25, {fontSize:22, color: Colors.active, marginTop: -5 }]}>ETH</Text>
                                </View>
                                <Image source={require('@/assets/image/s2.png')} resizeMode='stretch' style={{ height: 36, width: 36 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={[style.s25, { color: Colors.active, flex: 1 }]}>$29,192.14</Text>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#7F6EE925', borderRadius: 10, flexDirection: 'row', }}>
                                    <Icon name='chevron-up' size={15} color='#7F6EE9' style={{ marginTop: 2 }} />
                                    <Text style={[style.s12, { color: '#7F6EE9', marginLeft: 2 }]}>0.56%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('bitcoin')}
                        style={{marginTop:15, backgroundColor: Colors.secondary, padding: 18, borderRadius: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.r16, { color: Colors.disable, }]}>Bitcoin</Text>
                                    <Text style={[style.m25, {fontSize:22, color: Colors.active, marginTop: -5 }]}>BTC</Text>
                                </View>
                                <Image source={require('@/assets/image/s4.png')} resizeMode='stretch' style={{ height: 36, width: 36 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={[style.s25, { color: Colors.active, flex: 1 }]}>$55,289.25</Text>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#F9A23A25', borderRadius: 10, flexDirection: 'row', }}>
                                    <Icon name='chevron-up' size={15} color='#F9A23A' style={{ marginTop: 2 }} />
                                    <Text style={[style.s12, { color: '#F9A23A', marginLeft: 2 }]}>0.56%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('bitcoin2')}
                        style={{marginTop:15, backgroundColor: Colors.secondary, padding: 18, borderRadius: 15 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.r16, { color: Colors.disable, }]}>Binance</Text>
                                    <Text style={[style.m25, {fontSize:22, color: Colors.active, marginTop: -5 }]}>BNB</Text>
                                </View>
                                <Image source={require('@/assets/image/s3.png')} resizeMode='stretch' style={{ height: 36, width: 36 }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                                <Text style={[style.s25, { color: Colors.active, flex: 1 }]}>$$55,289.25</Text>
                                <View style={{ paddingHorizontal: 10, paddingVertical: 4, backgroundColor: '#F9A23A25', borderRadius: 10, flexDirection: 'row', }}>
                                    <Icon name='chevron-up' size={15} color='#F9A23A' style={{ marginTop: 2 }} />
                                    <Text style={[style.s12, { color: '#F9A23A', marginLeft: 2 }]}>0.56%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}