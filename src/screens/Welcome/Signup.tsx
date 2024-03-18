import { View, Text, Image, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, Platform, TouchableOpacity, Pressable, ScrollView, TextInput, Modal } from 'react-native'
import React, { useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';

import { router } from 'expo-router'
import { icons } from '@/src/icons'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Signup() {
    const [isFocused, setIsFocused] = useState({
        name: "",
        state: false
    })
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false)
    const [visible1, setvisible1] = useState(false)
    const [visible2, setvisible2] = useState(false)
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40, marginHorizontal: 10 }]}>

                    <Text style={[style.title, { color: Colors.active }]}>Register</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>

                        <TouchableOpacity onPress={() => setvisible1(true)}
                            style={{ flex: 1, backgroundColor: Colors.rbg, alignItems: 'center', justifyContent: 'center', borderRadius: 5, height: 50 }}>

                            <Modal transparent={true} visible={visible1}>
                                <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
                                <View
                                    style={{ flex: 1, backgroundColor: '#191C3215', justifyContent: 'center', alignSelf: 'center', width: width }}>

                                    <View style={{ padding: 25, backgroundColor: Colors.bg, borderRadius: 40, marginHorizontal: 50 }}>
 
                                        <Image source={{uri: icons.googleIcon}} width={24} height={24} style={{ alignSelf: 'center', marginTop: 10 }}/>
                                        <Text style={[style.s22, { color: Colors.active, textAlign: 'center', marginTop: 15 }]}>Sign Up</Text>
                                        <Text style={[style.r16, { color: '#646273', textAlign: 'center', }]}>Continue to Gmail</Text>

                                        <View style={[style.inputcontainer, { borderColor: isFocused.name === 'email' ? Colors.primary : Colors.secondary, backgroundColor: Colors.secondary, borderRadius: 15, borderWidth: 1, height: 55, marginTop: 15 }]}>
                                            <TextInput placeholder='Enter Email'
                                                placeholderTextColor={Colors.lable}
                                                selectionColor={Colors.primary}
                                                onFocus={() => setIsFocused({name: 'email', state: true})}
                                                onBlur={() => setIsFocused({name: 'email', state: true})}
                                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                                            />
                                        </View>

                                        <Text style={[style.m12, { color: Colors.primary, textAlign: 'center', marginTop: 15 }]}>Forget Account?</Text>

                                        <TouchableOpacity onPress={() => { setvisible1(false) }}
                                            style={[style.btn, { marginBottom: 20, width: width / 2.5, alignSelf: 'center', marginTop: 30 }]}>
                                            <Text style={[style.btntxt]}>Next</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>

                            <Text style={[style.s14, { color: Colors.red, marginTop: 3 }]}>GOOGLE</Text>
                        </TouchableOpacity>
                        <View style={{ margin: 8 }}></View>
                        <TouchableOpacity onPress={() => setvisible2(true)}
                            style={{ flex: 1, backgroundColor: Colors.blbg, alignItems: 'center', justifyContent: 'center', borderRadius: 5, height: 50 }}>
                            <Modal transparent={true} visible={visible2}>
                                <StatusBar backgroundColor={'transparent'} translucent={true}></StatusBar>
                                <View
                                    style={{ flex: 1, backgroundColor: '#191C3215', justifyContent: 'center', alignSelf: 'center', width: width }}>

                                    <View style={{ padding: 25, backgroundColor: Colors.bg, borderRadius: 40, marginHorizontal: 50 }}>

                                        {/* <A5 /> */}
                                        <Image source={{uri: icons.facebookIcon}} width={24} height={24} style={{ alignSelf: 'center', marginTop: 10 }} />

                                        <Text style={[style.s22, { color: Colors.active, textAlign: 'center', marginTop: 15 }]}>Sign Up</Text>
                                        <Text style={[style.r16, { color: '#646273', textAlign: 'center', }]}>Continue to Facebook</Text>

                                        <View style={[style.inputcontainer, { borderColor: isFocused.name === 'password' ? Colors.primary : Colors.secondary, backgroundColor: Colors.secondary, borderRadius: 15, borderWidth: 1, height: 55, marginTop: 15 }]}>
                                            <TextInput placeholder='Enter Email'
                                                placeholderTextColor={Colors.lable}
                                                selectionColor={Colors.primary}
                                                onFocus={() => setIsFocused({name: 'password', state: true})}
                                                onBlur={() => setIsFocused({name: 'password', state: false})}
                                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                                            />
                                        </View>

                                        <View style={[style.inputcontainer, { borderColor: isFocused.name === 'Password' ? Colors.primary : Colors.secondary, backgroundColor: Colors.secondary, borderRadius: 15, borderWidth: 1, height: 55, marginTop: 15 }]}>
                                            <TextInput placeholder='Password'
                                                placeholderTextColor={Colors.lable}
                                                selectionColor={Colors.primary}
                                                onFocus={() => setIsFocused({name: 'password', state: true})}
                                                onBlur={() => setIsFocused({name: 'password', state: false})}
                                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                                            />
                                        </View>

                                        <Text style={[style.m12, { color: Colors.primary, marginTop: 15 }]}>Forget Account?</Text>

                                        <TouchableOpacity onPress={() => { setvisible2(false) }}
                                            style={[style.btn, { marginBottom: 20, width: width / 2.5, alignSelf: 'center', marginTop: 30 }]}>
                                            <Text style={[style.btntxt]}>Next</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </Modal>

                            <Text style={[style.s14, { color: Colors.blue, marginTop: 3 }]}>FACEBOOK</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[style.s14, { color: Colors.lable, textAlign: 'center', marginVertical: 30 }]}>OR</Text>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={[style.inputcontainer, { borderColor: isFocused.name === 'fullname' ? Colors.primary : Colors.input, backgroundColor: Colors.input,  borderWidth: 1 }]}>
                            <TextInput placeholder='Full Name'
                                placeholderTextColor={Colors.lable}
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused({name: 'fullname', state: true})}
                                onBlur={() => setIsFocused({name: 'fullname', state: false})}
                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                            />
                        </View>

                        <View style={[style.inputcontainer, { marginTop: 20, borderColor: isFocused.name === 'phone' ? Colors.primary : Colors.input, backgroundColor: Colors.input,  borderWidth: 1 }]}>
                            <TextInput placeholder='Enter email / phone number'
                                placeholderTextColor={Colors.lable}
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused({name: 'phone', state: true})}
                                onBlur={() => setIsFocused({name: 'phone', state: false})}
                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                            />
                        </View>

                        <View style={[style.inputcontainer, { marginTop: 20, borderColor: isFocused.name === 'password' ? Colors.primary : Colors.input, backgroundColor: Colors.input,  borderWidth: 1 }]}>
                            <TextInput placeholder='Password'
                                placeholderTextColor={Colors.lable}
                                selectionColor={Colors.primary}
                                secureTextEntry={isPasswordVisible1}
                                onFocus={() => setIsFocused({name: 'password', state: true})}
                                onBlur={() => setIsFocused({name: 'password', state: false})}
                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible1(!isPasswordVisible1)} >
                                <Icon name={isPasswordVisible1 ? 'eye-off' : 'eye'} color={Colors.lable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.inputcontainer, { marginTop: 20, borderColor: isFocused.name === 'confirm' ? Colors.primary : Colors.input, backgroundColor: Colors.input,  borderWidth: 1 }]}>
                            <TextInput placeholder='Confirm password'
                                placeholderTextColor={Colors.lable}
                                selectionColor={Colors.primary}
                                secureTextEntry={isPasswordVisible}
                                onFocus={() => setIsFocused({name: 'confirm', state: true})}
                                onBlur={() => setIsFocused({name: 'confirm', state: false})}
                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.lable} size={20} />
                            </TouchableOpacity>
                        </View>

                        <Pressable onPress={() => router.navigate("(auth)/phone")}
                            style={[style.btn, { marginTop: 40 }]}>
                            <Text style={[style.btntxt, { marginBottom: -4 }]}>Register</Text>
                        </Pressable>

                        <Text style={[style.r14, { color: Colors.disable, textAlign: 'center', marginTop: 30 }]}>Already Have An Account?</Text>
                        <Pressable onPress={() => router.navigate("(auth)/login")} style={{marginBottom:20}}>
                            <Text style={[style.m14, { color: Colors.primary, textAlign: 'center', marginTop: 10 }]}>LOGIN</Text>
                            <View style={[style.divider, { width: width / 15, backgroundColor: Colors.primary, alignSelf: 'center' }]}></View>
                        </Pressable>
                       
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}