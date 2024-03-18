import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { useNavigation } from '@react-navigation/native'
import { Avatar } from 'react-native-paper'
import {Ionicons as Icon} from '@expo/vector-icons';

import { router } from 'expo-router'
import { images } from '@/src/icons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Edit() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                   

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ alignSelf: 'center' }}>
                            <Image source={images.profile} width={24} height={24} />
                        </View>
                        <Text style={[style.m15, { color: Colors.active, textAlign: 'center', marginTop: 10 }]}>Change Profile Picture</Text>

                        <Text style={[style.s12, { color: Colors.active, marginTop: 20 }]}>Name</Text>

                        <View style={[style.inputcontainer, { marginTop: 10, paddingHorizontal: 15 }]}>
                            <TextInput placeholder='Matt Revas' placeholderTextColor='#191C3240'
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.active, flex: 1 }]}
                            />
                            <Icon name='pencil' size={14} color={Colors.active} />
                        </View>

                        <Text style={[style.s12, { color: Colors.active, marginTop: 20 }]}>Location</Text>

                        <View style={[style.inputcontainer, { marginTop: 10, paddingHorizontal: 15 }]}>
                            <TextInput placeholder='US(United State)' placeholderTextColor='#191C3240'
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.active, flex: 1 }]}
                            />
                            <Icon name='pencil' size={14} color={Colors.active} />
                        </View>

                        <Text style={[style.s12, { color: Colors.active, marginTop: 20 }]}>Address</Text>

                        <View style={[style.inputcontainer, { marginTop: 10, paddingHorizontal: 15 }]}>
                            <TextInput placeholder='321 Street/WA' placeholderTextColor='#191C3240'
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.active, flex: 1 }]}
                            />
                            <Icon name='pencil' size={14} color={Colors.active} />
                        </View>

                        <Text style={[style.s12, { color: Colors.active, marginTop: 20 }]}>Phone Number</Text>

                        <View style={[style.inputcontainer, { marginTop: 10, paddingHorizontal: 15 }]}>
                            <TextInput placeholder='+000 000 00000' placeholderTextColor='#191C3240'
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.active, flex: 1 }]}
                            />
                            <Icon name='pencil' size={14} color={Colors.active} />
                        </View>

                        <TouchableOpacity onPress={() => router.navigate('MyTabs')}
                            style={[style.btn, { marginVertical: 20 }]}>
                            <Text style={[style.btntxt]}>Save Changes</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}