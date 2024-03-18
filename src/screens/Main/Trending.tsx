import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';
import Action from "@/src/components/action"
import { router, Stack } from 'expo-router';
import { icons } from '@/src/icons';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function TrendingScreen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
             <Stack.Screen options={{ 
                headerShown: true,
                headerShadowVisible: false,
                headerRight: () => <Action name="ellipsis-horizontal"></Action>,
                headerStyle: {
                    backgroundColor: Colors.bg
                },
                headerTitle: () => <Text style={{fontSize: 28, fontWeight: "bold"}}>Trending</Text>,
            }}/>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={style.main}>
                    <View style={[style.inputcontainer, { marginTop: 10, height: 55, borderRadius: 30, paddingHorizontal: 15 }]}>
                        <Icon name='search-outline' size={20} color={Colors.disable1} />
                        <TextInput placeholder='Search' placeholderTextColor={Colors.disable1}
                            selectionColor={Colors.primary}
                            style={[style.r15, { color: Colors.active, marginLeft: 5, flex: 1 }]}
                        />
                        <Image source={require('@/assets/image/s1.png')} resizeMode='stretch' style={{ height: 17, width: 21 }} />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={require('@/assets/image/s4.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>Bitcoin</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>BTC</Text>
                            </View>
                            <Image source={{uri:icons.tradeOrange}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-down' size={20} color='#FC928C' style={{}} />
                                    <Text style={[style.r12, { color: '#FC928C', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s7.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>Tether</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>USDT</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.r12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s2.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>Etherium</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>ETH</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.r12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s3.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>Binance</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>BNB</Text>
                            </View>
                            <Image source={{uri: icons.tradeRed}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-down' size={20} color='#FC928C' style={{}} />
                                    <Text style={[style.r12, { color: '#FC928C', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s10.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>XRP</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>XRP</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.r12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s11.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>Achain</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>ACT</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.r12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s12.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>IoT Chain</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>ITC</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.r12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('BTC1')}
                            style={{marginBottom:80, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s13.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>Origin</Text>
                                <Text style={[style.r14, { color: Colors.disable, marginTop: -5 }]}>OGN</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}} width={24} height={24} />
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.m16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.r12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}