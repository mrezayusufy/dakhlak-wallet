import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Modal, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';import { router } from 'expo-router'
;

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function IdV() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop:  Platform.OS === 'ios' ? 10 : 40 , marginHorizontal: 10 }]}>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' ,marginHorizontal:20,marginTop:150}}>
                        <View >
                            <View style={{ height: 100, width: 95, backgroundColor: '#11CABE30', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='cloud-upload' size={27} color={Colors.primary}></Icon>
                            </View>
                            <Text style={[style.s24, { color: Colors.active }]}>Your {'\n'}Passport</Text>
                        </View>
                        <View >
                            <View style={{ height: 100, width: 95, backgroundColor: '#11CABE30', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon name='cloud-upload' size={27} color={Colors.primary}></Icon>
                            </View>
                            <Text style={[style.s24, { color: Colors.active }]}>Driving {'\n'}Licence</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.navigate('CurrencyC')}
                    style={[style.btn, { marginTop: 40, width: width / 2.8, alignSelf: 'center', marginBottom: 100, height: 56 }]}>
                    <Text style={[style.btntxt, { marginBottom: -4 }]}>Next</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}