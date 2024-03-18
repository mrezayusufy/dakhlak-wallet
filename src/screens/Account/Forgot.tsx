import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput, Modal, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { router } from 'expo-router';
 


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ForgotScreen() {
    const [isFocused, setIsFocused] = React.useState({
        name: "",
        status: false
    })
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 40, marginHorizontal: 10 }]}>
                     
                    <Text style={[style.title, { color: Colors.active }]}>Forget Password</Text>
                    <Text style={[style.r17, { color: Colors.active }]}>Please enter your<Text style={[style.b17, { color: Colors.active }]}> email adress /phone number </Text>to reset your password</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={[style.inputcontainer, { marginTop: 30, borderColor: isFocused.name === 'phone' ? Colors.primary : Colors.input, backgroundColor: Colors.input, borderWidth: 1 }]}>
                            <TextInput placeholder='Enter email / phone number'
                                placeholderTextColor={Colors.lable}
                                selectionColor={Colors.primary}
                                onFocus={() => setIsFocused({name: 'phone', status: true})}
                                onBlur={() => setIsFocused({name: 'phone', status: false})}
                                style={[style.m14, { color: Colors.active, flex: 1, marginBottom: -4 }]}
                            />
                        </View>

                        <TouchableOpacity onPress={() => router.navigate('Finger1')}
                            style={[style.btn, { marginTop: 40 }]}>
                            <Text style={[style.btntxt, { marginBottom: -4 }]}>Send</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}