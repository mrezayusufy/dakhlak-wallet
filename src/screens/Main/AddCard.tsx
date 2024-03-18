import { View, Text, SafeAreaView, StatusBar, Switch, KeyboardAvoidingView, Image, Dimensions, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React, { useState } from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { useNavigation } from '@react-navigation/native'
import {Ionicons as Icon} from '@expo/vector-icons';
import { icons, images } from '@/src/icons'



const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function AddCardScreen() {
    

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                     
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Image source={require('@/assets/image/s25.png')} resizeMode='stretch' style={{ height: height / 4, width: width - 40 }} />

                        <Text style={[style.s24, { color: Colors.active, marginTop: 20 }]}>Enter Informaton</Text>

                        <Text style={[style.m14, { color: Colors.active, marginTop: 10 }]}>Card Number</Text>

                        <View style={[style.inputcontainer, { marginTop: 10, paddingHorizontal: 15 }]}>
                            <TextInput placeholder='.... .... .... 9979' placeholderTextColor='#191C3240'
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.active, flex: 1 }]}
                            />
                            {/* <S29 /> */}
                            <Image source={{uri: images.profile}} width={24} height={24} />
                        </View>

                        <Text style={[style.m14, { color: Colors.active, marginTop: 20 }]}>Card Holder</Text>

                        <View style={[style.inputcontainer, { marginTop: 10, paddingHorizontal: 15 }]}>
                            <TextInput placeholder='Enter card holder name' placeholderTextColor='#191C3240'
                                selectionColor={Colors.primary}
                                style={[style.m14, { color: Colors.active, flex: 1 }]}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.m14, { color: Colors.active, }]}>Expiration Date</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <View style={[style.inputcontainer, { flex: 1, height: 50, borderRadius: 8, paddingHorizontal: 10 }]}>
                                        <TextInput placeholder='0' placeholderTextColor='#191C3240'
                                            selectionColor={Colors.primary}
                                            style={[style.m14, { color: Colors.active, flex: 1 }]}
                                        />
                                        <Icon name='chevron-down' size={12} color='#898A8D' />
                                    </View>
                                    <View style={[style.inputcontainer, { marginLeft: 10, flex: 1, height: 50, borderRadius: 8, paddingHorizontal: 10 }]}>
                                        <TextInput placeholder='0' placeholderTextColor='#191C3240'
                                            selectionColor={Colors.primary}
                                            style={[style.m14, { color: Colors.active, flex: 1 }]}
                                        />
                                        <Icon name='chevron-down' size={12} color='#898A8D' />
                                    </View>
                                </View>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 0.5 }}>
                                <Text style={[style.m14, { color: Colors.active, }]}>CVC</Text>
                                <View style={[style.inputcontainer, { flex: 1, marginTop: 10, height: 50, borderRadius: 8, paddingHorizontal: 10 }]}>
                                    <TextInput placeholder='0' placeholderTextColor='#191C3240'
                                        selectionColor={Colors.primary}
                                        style={[style.m14, { color: Colors.active, flex: 1 }]}
                                    />
                                    <Icon name='help-circle' size={12} color='#898A8D' />
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom:20 }}>
                            <Switch
                                trackColor={{ false: Colors.disable, true: Colors.primary }}
                                thumbColor={isEnabled ? Colors.secondary : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                             <Text style={[style.r12, { color: Colors.disable1, marginLeft: 5 }]}>Mark as default card</Text>
                        </View>
                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}