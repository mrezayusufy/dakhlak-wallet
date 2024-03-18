import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';
import { icons } from '@/src/icons';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function BTC2Screen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
       
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <View style={{ alignItems: 'center' }}>
                            <Image source={{uri: icons.bitcoin}} width={width} height={100}/>
                        </View>
                        <Text style={[style.title, { color: Colors.active, textAlign: 'center' }]}>$60,878.25</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
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

                        <View style={{ marginTop: 30, marginBottom: 50 }}>
                            <View style={{ marginTop: 40, marginHorizontal: 15, height: 50, backgroundColor: '#FAFBFB', borderRadius: 15, }}></View>

                            <View style={{ marginTop: Platform.OS === 'ios' ? -75 : -90, padding: 15, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={[style.s15, { color: Colors.active }]}>Your Bitcoin Address:</Text>
                                    <Text style={[style.r12, { color: Colors.txt }]}>0x5cc9f177usa55a0e99e87qr0599...</Text>
                                </View>
                                <Icon name='document-outline' size={20} color={Colors.primary} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}