import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';
import { router } from 'expo-router';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function BTC1Screen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.m14, { color: Colors.active, marginTop: 10 }]}>Bitcoin (BTC)</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.subtitle, { color: Colors.active, marginRight: 10 }]}>$60,878.25</Text>
                            <Icon name='chevron-up' size={15} color={Colors.primary} style={{ marginTop: -5 }} />
                            <Text style={[style.m14, { color: Colors.disable1, marginLeft: 2 }]}>2.5%</Text>
                        </View>
                        
                        <Image source={require('@/assets/image/s14.png')} resizeMode='stretch' style={{ marginTop: 10, height: height / 4, width: width - 40 }} />

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <Text style={[style.r12, { color: Colors.active }]}>1D</Text>
                            <View style={{ paddingHorizontal: 8, paddingVertical: 2, backgroundColor: '#11CABE35', borderRadius: 5 }}>
                                <Text style={[style.r12, { color: Colors.primary }]}>5D</Text>
                            </View>
                            <Text style={[style.r12, { color: Colors.active }]}>1M</Text>
                            <Text style={[style.r12, { color: Colors.active }]}>6M</Text>
                            <Text style={[style.r12, { color: Colors.active }]}>1Y</Text>
                            <Text style={[style.r12, { color: Colors.active }]}>5Y</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20, }}>
                            <View style={{ flex: 1 }}>
                                <View style={{ marginTop: 24, height: 40, borderRadius: 30, marginHorizontal: 10, backgroundColor: '#FFFFFF' }}></View>
                                <TouchableOpacity onPress={() => router.navigate('bitcoin2')}
                                style={[style.btn, { marginTop: -64, height: 55, borderRadius: 30 }]}>
                                    <Text style={[style.s15, { color: Colors.secondary }]}>Sell</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => router.navigate('bitcoin2')}
                            style={[style.btn, {flex:1, height: 55, borderRadius: 30, backgroundColor: '#A4E6E2' }]}>
                                <Text style={[style.s15, { color: '#16A89E' }]}>Buy</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ padding: 18, paddingVertical: 22, backgroundColor: Colors.secondary, borderRadius: 20, marginTop: 20, marginBottom: 20 }}>
                            <Text style={[style.subtitle, { color: Colors.active }]}>Past Day</Text>
                            <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m14, { color: Colors.disable1, flex: 1 }]}>Start</Text>
                                        <Text style={[style.s14, { color: Colors.active }]}>$25,532.87</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                        <Text style={[style.m14, { color: Colors.disable1, flex: 1 }]}>High</Text>
                                        <Text style={[style.s14, { color: Colors.active }]}>$88,289</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m14, { color: Colors.disable1, flex: 1 }]}>Risk</Text>
                                        <Text style={[style.s14, { color: Colors.active }]}>39.87%</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginLeft: 12 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.m14, { color: Colors.disable1, flex: 1 }]}>Volume</Text>
                                        <Text style={[style.s14, { color: Colors.active }]}>$50.41</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                                        <Text style={[style.m14, { color: Colors.disable1, flex: 1 }]}>Low</Text>
                                        <Text style={[style.s14, { color: Colors.active }]}>$24,494</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}