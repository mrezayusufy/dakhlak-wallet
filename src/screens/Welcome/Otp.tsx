import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import OtpInputs from 'react-native-otp-inputs'
import { router } from 'expo-router'

export default function OtpScreen() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <View style={[style.main, { backgroundColor: Colors.bg,marginTop: Platform.OS === 'ios' ? 10 : 40, marginHorizontal: 10 }]}>
       

<              ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}}>

                    <Text style={[style.title, { color: Colors.active }]}>Verify Code</Text>
                    <Text style={[style.r18, { color: Colors.active, marginTop: 15 }]}>check your sms inbox, we have sent you the code at <Text style={[style.b18]}>+00 000 0000</Text></Text>


                    <View style={{ paddingTop: 50 }}>
                        {/* <OtpInputs
                            numberOfInputs={4}
                            handleChange={(e) => console.log("e", e)}
                            selectionColor={Colors.primary}
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                            inputStyles={{

                                borderBottomColor: '#A1A1A1',
                                
                                textAlign: 'center',
                                height: 56,
                                width: 56,
                                fontSize: 24,
                                borderBottomWidth: 1,
                                color: Colors.active,
                                fontWeight: 'bold',

                            }}
                        /> */}
                    </View>

                    <TouchableOpacity onPress={() => router.navigate('(auth)/finger')}
                        style={[style.btn, { marginTop: 40 }]}>
                        <Text style={[style.btntxt, { marginBottom: -4 }]}>Next</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 ,marginBottom:20}}>
                        <Text style={[style.r14, { color: Colors.active, textAlign: 'center', }]}>Didn’t Receive a code?</Text>
                        <TouchableOpacity onPress={() => router.navigate('Finger')}>
                            <Text style={[style.m14, { color: Colors.primary, textAlign: 'center', textDecorationLine: 'underline' }]}> resend code</Text>
                        </TouchableOpacity>
                    </View>
            </ScrollView>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}