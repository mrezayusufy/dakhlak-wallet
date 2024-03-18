import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Dimensions, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';
import { router, Stack } from 'expo-router'
import { icons, images } from '@/src/icons';
import {Image} from "expo-image"
import Action from '@/src/components/action';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function AccountScreen() {
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <Stack.Screen options={{ 
                headerShown: true,
                headerShadowVisible: false,
                headerLeft: (props) => <Action name="arrow-back"></Action>,
                headerStyle: {
                    backgroundColor: Colors.bg,
                },
                headerTitle: () => <Text style={{fontSize: 28, fontWeight: "bold"}}>Account</Text>,
            }}/>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={style.main}>
            

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        <TouchableOpacity onPress={() => router.navigate('Edit')}
                        style={{ alignSelf: 'center' }}>
                            <Image source={images.profile} style={{width: 64, height: 64, borderRadius: 32  }}/>
                        </TouchableOpacity>
                        <Text style={[style.s26, { color: Colors.active, textAlign: 'center', marginTop: 10 }]}>Matt Revas</Text>
                        <Text style={[style.m16, { color: '#191C3240', textAlign: 'center', marginTop: -8 }]}>ID : 56456941</Text>
                        <TouchableOpacity onPress={() => router.navigate('Chat')}
                        style={[style.btn, { marginTop: 10, height: 60, width: width / 1.7, alignSelf: 'center', backgroundColor: '#AFE8E5' }]}>
                            <Image source={images.message} style={{width: 32, height: 32}}/>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
                            <Image source={require('@/assets/image/s33.png')} resizeMode='stretch' style={{ height: 30, width: 30 }} />
                            <Text style={[style.m18, { color: Colors.active, marginLeft: 15, flex: 1, }]}>Preferences</Text>
                            <Icon name='chevron-forward' size={24} color={Colors.disable1} />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Image source={require('@/assets/image/s34.png')} resizeMode='stretch' style={{ height: 30, width: 30 }} />
                            <View style={{ marginLeft: 15, flex: 1, }}>
                                <Text style={[style.m18, { color: Colors.active, }]}>Account Security</Text>
                                <View style={{ height: 8, borderRadius: 10, backgroundColor: '#11CABE20',width:width/1.8,marginVertical:10 }}>
                                <View style={{ height: 8, borderRadius: 10, backgroundColor: '#11CABE',width:width/4, }}></View>
                                </View>
                                <Text style={[style.m16, { color: Colors.disable1, }]}>Intermediate</Text>
                            </View>
                            <Icon name='chevron-forward' size={24} color={Colors.disable1} />
                        </View>

                        <TouchableOpacity onPress={() => router.navigate('IdV')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Image source={require('@/assets/image/s35.png')} resizeMode='stretch' style={{ height: 30, width: 30 }} />
                            <Text style={[style.m18, { color: Colors.active, marginLeft: 15, flex: 1, }]}>Help</Text>
                            <Icon name='chevron-forward' size={24} color={Colors.disable1} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('Login')}
                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom:90 }}>
                            <Image source={require('@/assets/image/s36.png')} resizeMode='stretch' style={{ height: 26, width: 26 }} />
                            <Text style={[style.m18, { color: Colors.active, marginLeft: 17, flex: 1, }]}>Logout</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}