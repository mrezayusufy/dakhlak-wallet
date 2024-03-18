import { View, Text, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native'
import React, { useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { router, useRouter } from 'expo-router'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PhoneScreen() {
    const navigate = useRouter();
    const [phoneNumber, setPhoneNumber] = useState('')
    const phoneInput = useRef(null);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40, marginHorizontal: 10 }]}>

                    <Text style={[style.title, { color: Colors.active }]}>Register</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{marginTop:15}}>
                    <Text style={[style.r16, { color: Colors.active, marginTop: 15 }]}>Please enter <Text style={[style.b16]}>your phone number,</Text> so we can verify you.</Text>


                    <Text style={[style.s18, { color: Colors.active, marginTop: 30 }]}>enter your phone number</Text>

                    {/* <View style={{ paddingTop: 20 }}>
                            <PhoneInput
                                ref={phoneInput}
                                defaultValue={phoneNumber}
                                defaultCode="IN"
                                layout="first"
                                codeTextStyle={{ color: Colors.active }}
                                textInputProps={{ placeholderTextColor: '#9E9E9E' }}
                                textInputStyle={{ color: Colors.active }}
                                containerStyle={{
                                    height: 50,
                                    width: '100%',
                                    borderRadius: 10,
                                    backgroundColor: Colors.secondary
                                }}
                                textContainerStyle={{
                                    paddingVertical: 0,
                                    borderRadius: 10,
                                    backgroundColor: Colors.secondary
                                }}
                                onChangeFormattedText={text => {
                                    setPhoneNumber(text);
                                }}
                            />
                        </View> */}


                    <Pressable onPress={() => navigate.navigate('(auth)/otp-page')}
                        style={[style.btn, { marginTop: 40 }]}>
                        <Text style={[style.btntxt, { marginBottom: -4 }]}>Next</Text>
                    </Pressable>

                    <Text style={[style.r14, { color: Colors.active, textAlign: 'center', marginTop: 30 }]}>Already Have An Account?</Text>
                    <Pressable onPress={() => router.navigate('(auth)/login')}>
                        <Text style={[style.m14, { color: Colors.primary, textAlign: 'center', marginTop: 10 }]}>LOGIN</Text>
                        <View style={[style.divider, { width: width / 15, backgroundColor: Colors.primary, alignSelf: 'center' }]}></View>
                    </Pressable>
                    
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}