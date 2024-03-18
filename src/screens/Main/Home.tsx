import { View, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { Text } from "react-native-paper"
import {Ionicons as Icon} from '@expo/vector-icons';
import { router, Stack } from 'expo-router'
import { icons, images } from '@/src/icons'
import Action from "@/src/components/action"
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
export default function HomeScreen() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <Stack.Screen options={{ 
                headerShown: true,
                headerShadowVisible: false,
                headerRight: () => <Action name="ellipsis-horizontal"></Action>,
                headerStyle: {
                    backgroundColor: Colors.bg
                },
                headerTitle: () => <Text style={{fontSize: 28, fontWeight: "bold"}}>Home</Text>,
            }}/>
              
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={style.main}>
                    
                    <View style={[style.inputcontainer, {marginTop:10, height: 55, borderRadius: 30, paddingHorizontal: 15 }]}>
                        <Icon name='search-outline' size={20} color={Colors.disable1} />
                        <TextInput placeholder='Search' placeholderTextColor={Colors.disable1}
                            selectionColor={Colors.primary}
                            style={[style.r15, { color: Colors.active, marginLeft: 5, flex: 1 }]}
                        />
                        <Image source={images.option} resizeMode='stretch' style={{ height: 17, width: 21 }} />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ marginTop: 10 }}>
                            <View style={{ marginTop: 80 }}>
                                <View style={{ height: 80, backgroundColor: '#FFFFFF80', borderRadius: 25, marginHorizontal: 20, }}></View>
                            </View>
                            <View style={{ marginTop: Platform.OS === 'ios' ? -140 : -160, padding: 16, backgroundColor: Colors.secondary, borderRadius: 25, }}>
                                <Text style={[style.m14, { color: '#545454' }]}>My Balance</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <Text style={[style.m28, { color: Colors.active, flex: 1 }]}>$32,128.80</Text>
                                    <View style={{ paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#82E0DA35', borderRadius: 10, flexDirection: 'row', }}>
                                        <Icon name='chevron-up' size={15} color={Colors.primary} style={{ marginTop: 2 }} />
                                        <Text style={[style.m14, { color: Colors.primary, marginLeft: 2 }]}>0.56%</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                                    <Icon name='trending-up' size={15} color={Colors.primary} style={{}} />
                                    <Text style={[style.r10, { color: '#626262', marginLeft: 2 }]}>$2.104</Text>
                                </View>
                            </View>
                        </View>

                        <Text style={[style.subtitle, { color: Colors.active, marginTop: 30 }]}>Portfolio</Text>

                        <View style={{ marginTop: 10 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <TouchableOpacity onPress={() => router.navigate('portfolio')}
                                style={{ width: width / 1.6, backgroundColor: Colors.secondary, padding: 15, borderRadius: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.r14, { color: Colors.disable, }]}>Ethereum</Text>
                                            <Text style={[style.s18, { color: Colors.active, marginTop: -5 }]}>ETH</Text>
                                        </View>
                                        <Image source={images.eth} resizeMode='stretch' style={{ height: 32, width: 32 }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={[style.s20, { color: Colors.active, flex: 1 }]}>$29,192.14</Text>
                                        <View style={{ paddingHorizontal: 6, paddingVertical: 4, backgroundColor: '#7F6EE935', borderRadius: 10, flexDirection: 'row', }}>
                                            <Icon name='chevron-up' size={15} color='#7F6EE9' style={{ marginTop: 2 }} />
                                            <Text style={[style.m14, { color: '#7F6EE9', marginLeft: 2 }]}>0.56%</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => router.navigate('portfolio')}
                                 style={{ marginLeft: 10, width: width / 1.6, backgroundColor: Colors.secondary, padding: 15, borderRadius: 15 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.r14, { color: Colors.disable, }]}>Bitcoin</Text>
                                            <Text style={[style.s18, { color: Colors.active, marginTop: -5 }]}>BTC</Text>
                                        </View>
                                        <Image source={images.btc} resizeMode='stretch' style={{ height: 32, width: 32 }} />
                                    </View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={[style.s20, { color: Colors.active, flex: 1 }]}>$55,289.25</Text>
                                        <View style={{ paddingHorizontal: 6, paddingVertical: 4, backgroundColor: '#F9A23A35', borderRadius: 10, flexDirection: 'row', }}>
                                            <Icon name='chevron-up' size={15} color='#F9A23A' style={{ marginTop: 2 }} />
                                            <Text style={[style.m14, { color: '#F9A23A', marginLeft: 2 }]}>0.56%</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>

                        <Text style={[style.subtitle, { color: Colors.active, marginTop: 20 }]}>Trending</Text>

                        <TouchableOpacity onPress={() => router.navigate('bitcoin')}
                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <Image source={images.btc} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active, }]}>Bitcoin</Text>
                                <Text style={[style.m14, { color: Colors.disable, marginTop: -5 }]}>BTC</Text>
                            </View>
                            <Image source={{uri: icons.tradeOrange}}/>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.s16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-down' size={20} color='#FC928C' style={{}} />
                                    <Text style={[style.m12, { color: '#FC928C', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => router.navigate('bitcoin')}
                        style={{marginBottom:80, flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <Image source={require('@/assets/image/s7.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <View style={{ marginLeft: 12, flex: 1 }}>
                                <Text style={[style.s16, { color: Colors.active, }]}>Tether</Text>
                                <Text style={[style.m14, { color: Colors.disable, marginTop: -5 }]}>USDT</Text>
                            </View>
                            <Image source={{uri: icons.tradeGreen}}/>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[style.s16, { color: Colors.active, }]}>$29,192.14</Text>
                                <View style={{ flexDirection: 'row', marginBottom: 15, alignItems: 'center' }}>
                                    <Icon name='chevron-up' size={20} color='#11CABE' style={{}} />
                                    <Text style={[style.m12, { color: '#11CABE', marginLeft: 2 }]}>0.67%</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}