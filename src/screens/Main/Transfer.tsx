import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useContext, useState, useRef } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';

import RBSheet from 'react-native-raw-bottom-sheet';

import { router } from 'expo-router'
import { images } from '@/src/icons';


export default function Transfer() {
    const refRBSheet: any = useRef<any>();
    const RbSheetChildren = () => <KeyboardAvoidingView style={{ flex: 1 }}>
    <View style={{ marginTop: 15, marginHorizontal: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <View style={[style.inputcontainer, { marginTop: 5, height: 55, borderRadius: 30, paddingHorizontal: 15 }]}>
                <Icon name='search-outline' size={20} color={Colors.disable1} />
                <TextInput placeholder='Search' placeholderTextColor={Colors.disable1}
                    selectionColor={Colors.primary}
                    style={[style.r15, { color: Colors.active, marginLeft: 5, flex: 1 }]}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                <Text style={[style.m14, { color: '#191C3250', flex: 1 }]}>Showing 54 Contacts</Text>
                <Text style={[style.m14, { color: Colors.primary }]}>Select All</Text>
            </View>

            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center',  }}>
                <Image source={images.profile} width={24} height={24} />

                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m16, { color: Colors.active }]}>Avicii Ronaldo</Text>
                    <Text style={[style.r12, { color: Colors.txt }]}>@aviciironaldo</Text>
                </View>
                <Icon name='checkmark-circle' size={24} color={Colors.primary} />
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center',  }}>
                <Image source={images.profile} width={24} height={24} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m16, { color: Colors.active }]}>Netia Horaan</Text>
                    <Text style={[style.r12, { color: Colors.txt }]}>@segammagse</Text>
                </View>
            </View>

            <View style={{ marginTop: 15, flexDirection: 'row', alignItems: 'center',  }}>
                <Image source={images.profile} width={24} height={24} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m16, { color: Colors.active }]}>Netia Andry</Text>
                    <Text style={[style.r12, { color: Colors.txt }]}>@netiandry</Text>
                </View>
            </View>

            <View style={{ marginTop: 15,marginBottom:20, flexDirection: 'row', alignItems: 'center',  }}>
                <Image source={images.profile} width={24} height={24} />
                <View style={{ marginLeft: 10, flex: 1 }}>
                    <Text style={[style.m16, { color: Colors.active }]}>Bimo Mahesa</Text>
                    <Text style={[style.r12, { color: Colors.txt }]}>@bimomahesa</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => {router.navigate('Withdraw')}}
            style={[style.btn,{marginVertical:20,marginBottom:70}]}>
                <Text style={[style.btntxt,]}>Continue</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
</KeyboardAvoidingView>
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
       

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.title, { color: Colors.active, textAlign: 'center', marginTop: 10 }]}>$ 1000</Text>
                        <Text style={[style.r17, { color: '#6B6B6B', textAlign: 'center', marginTop: -10 }]}>Transfer Amount</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 12 }}>
                                <Text style={[style.b18, { color: Colors.txt1 }]}>50</Text>
                            </View>
                            <View style={{ marginHorizontal: 15, flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 12 }}>
                                <Text style={[style.b18, { color: Colors.txt1 }]}>100</Text>
                            </View>
                            <View style={{ flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 12 }}>
                                <Text style={[style.b18, { color: Colors.txt1 }]}>200</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 12 }}>
                                <Text style={[style.b18, { color: Colors.txt1 }]}>400</Text>
                            </View>
                            <View style={{ marginHorizontal: 15, flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.secondary, borderRadius: 12 }}>
                                <Text style={[style.b18, { color: Colors.txt1 }]}>700</Text>
                            </View>
                            <View style={{ flex: 1, height: 44, alignItems: 'center', justifyContent: 'center', backgroundColor: '#11CABE30', borderRadius: 12 }}>
                                <Text style={[style.b18, { color: Colors.primary }]}>1.000</Text>
                            </View>
                        </View>

                        <Text style={[style.s20, { color: Colors.active, marginTop: 30 }]}>Send To</Text>

                        <View style={{ marginTop: 10 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <ImageBackground source={require('@/assets/image/s21.png')} resizeMode='stretch' style={{ height: 98, width: 91, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon name='add' size={40} color={Colors.primary} />
                                </ImageBackground>

                                <View style={{ marginHorizontal: 10, height: 98, width: 91, backgroundColor: '#11CABE30', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={images.profile} width={24} height={24} />

                                    <Text style={[style.s15, { color: '#16A89E', marginBottom: -5, marginTop: 3 }]}>Avicii</Text>
                                </View>
                                <View style={{ height: 98, width: 91, backgroundColor: '#11CABE30', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={images.profile} width={24} height={24} />
                                    <Text style={[style.s15, { color: '#16A89E', marginBottom: -5, marginTop: 3 }]}>Netia</Text>
                                </View>
                                <View style={{ marginLeft: 10, height: 98, width: 91, backgroundColor: '#11CABE30', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={images.profile} width={24} height={24} />
                                    <Text style={[style.s15, { color: '#16A89E', marginBottom: -5, marginTop: 3 }]}>Segam</Text>
                                </View>

                            </ScrollView>
                        </View>

                        <TouchableOpacity onPress={() => console.log()}
                            style={[style.btn, { marginVertical: 20, marginTop: 40 }]}>

                            <RBSheet ref={refRBSheet}
                                height={500}
                                openDuration={100}
                                customStyles={{
                                    container: {
                                        borderTopRightRadius: 20,
                                        borderTopLeftRadius: 20,
                                        backgroundColor: Colors.bg
                                    }
                                }}
                                children={<RbSheetChildren/>}
                                />

                            <Text style={[style.btntxt]}>SEND</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}