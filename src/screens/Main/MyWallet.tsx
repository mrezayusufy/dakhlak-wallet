import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';
import {Image} from "expo-image"
import { router, Stack } from 'expo-router'
import { images } from '@/src/icons';
import Action from '@/src/components/action';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function MyWalletScreen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <Stack.Screen options={{ 
                headerShown: true,
                headerShadowVisible: false,
                headerRight: () => <Action name="ellipsis-horizontal"></Action>,
                headerStyle: {
                    backgroundColor: Colors.bg
                },
                headerTitle: () => <Text style={{fontSize: 28, fontWeight: "bold"}}>My Wallet</Text>,
            }}/>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={style.main}>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <Text style={[style.r17, { color: '#191C3290' }]}>Available Balance</Text>
                        <Text style={[style.s25, { color: Colors.active, fontSize: 35, marginTop: -10 }]}>$27,698.87</Text>

                        <Text style={[style.s20, { color: Colors.active, marginTop: 10 }]}>My Cards</Text>

                        <View style={{ marginTop: 10 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <TouchableOpacity onPress={() => router.navigate('/add-card')}>
                                    <ImageBackground source={require('@/assets/image/s19.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 4, justifyContent: 'center', alignItems: 'center' }}>
                                        <Icon name='add' size={40} color={Colors.primary} />
                                    </ImageBackground>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.navigate('/card-details')}>
                                    <Image source={require('@/assets/image/s20.png')} resizeMode='stretch' style={{ marginHorizontal: 10, height: height / 5, width: width / 2, }} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.navigate('/card-details')}>
                                    <Image source={require('@/assets/image/s20.png')} resizeMode='stretch' style={{ height: height / 5, width: width / 2, }} />
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <Text style={[style.s20, { color: Colors.active, marginTop: 30 }]}>Send To</Text>

                        <View style={{ marginTop: 10 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <ImageBackground source={require('@/assets/image/s21.png')} resizeMode='stretch' style={{ height: 98, width: 91, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='add' size={40} color={Colors.primary} />
                                </ImageBackground>

                                <View style={{ marginHorizontal: 10, height: 98, width: 91, backgroundColor: '#11CABE30', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={images.profile} style={{width: 58, height: 58, borderRadius: 20}}/>
                                    <Text style={[style.s15, { color: '#16A89E', marginBottom: -5, marginTop: 3 }]}>Avicii</Text>
                                </View>
                                <View style={{ height: 98, width: 91, backgroundColor: '#11CABE30', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={images.profile} style={{width: 58, height: 58, borderRadius: 20}}/>
                                    <Text style={[style.s15, { color: '#16A89E', marginBottom: -5, marginTop: 3 }]}>Netia</Text>
                                </View>
                                <View style={{ marginLeft: 10, height: 98, width: 91, backgroundColor: '#11CABE30', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={images.profile} style={{width: 58, height: 58, borderRadius: 20}}/>
                                    <Text style={[style.s15, { color: '#16A89E', marginBottom: -5, marginTop: 3 }]}>Segam</Text>
                                </View>

                            </ScrollView>
                        </View>

                        <Text style={[style.s20, { color: Colors.active, marginTop: 30 }]}>Transactions</Text>

                        <View style={{ marginTop: 10,marginBottom:80, padding: 15, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>
                            <Image source={images.profile} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s15, { color: Colors.active }]}>Avicii Ronaldo</Text>
                                <Text style={[style.r13, { color: Colors.txt }]}>26 .11 .2021  -  5:15 AM</Text>
                            </View>
                            <Text style={[style.s15, { color: Colors.primary }]}>-0.056</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
    )
}