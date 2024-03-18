import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { useNavigation } from '@react-navigation/native'
import {Ionicons as Icon} from '@expo/vector-icons';


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Chat() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                            <View style={{ padding: 15, backgroundColor: '#11CABE15', borderRadius: 15, width: width / 1.7 }}>
                                <Text style={[style.r14, { color: Colors.primary }]}>Hi, Aneeta, How’re You. I’m Jackson From College. Hope You’ll Be Fine And Also Your Family Aneeta. Waiting for your Reply ! </Text>
                            </View>
                            <Text style={[style.r12, { color: Colors.disable1, marginTop: 5 }]}>10:52</Text>
                        </View>

                        <View style={{marginTop:10, padding: 15, backgroundColor: Colors.secondary, borderRadius: 15, width: width / 1.4 }}>
                            <Text style={[style.r14, { color: Colors.primary }]}>Yes we are fine, wow really nice</Text>
                        </View>
                        <Text style={[style.r12, { color: Colors.disable1, marginTop: 5 }]}>11:25</Text>

                        <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                            <View style={{ padding: 15, backgroundColor: '#11CABE15', borderRadius: 15, }}>
                                <Text style={[style.r14, { color: Colors.primary }]}>Please, Can you give me Notes</Text>
                            </View>
                            <Text style={[style.r12, { color: Colors.disable1, marginTop: 5 }]}>11:29</Text>
                        </View>

                        <View style={{marginTop:10, padding: 15, backgroundColor: Colors.secondary, borderRadius: 15, width: width / 1.7 }}>
                            <Text style={[style.r14, { color: Colors.primary }]}>Ok, I give you But Where!</Text>
                        </View>
                        <Text style={[style.r12, { color: Colors.disable1, marginTop: 5 }]}>11:30</Text>

                        <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                            <View style={{ padding: 15, backgroundColor: '#11CABE15', borderRadius: 15, }}>
                                <Text style={[style.r14, { color: Colors.primary }]}>Thanks, At College</Text>
                            </View>
                            <Text style={[style.r12, { color: Colors.disable1, marginTop: 5 }]}>11:32</Text>
                        </View>

                        <View style={{marginBottom:10,marginTop:10, padding: 15, backgroundColor: Colors.secondary, borderRadius: 15, width: width / 1.7 }}>
                            <Image source={require('@/assets/image/s41.png')} resizeMode='stretch' style={{ height: 32, width: width / 2 }} />
                        </View>

                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                        <View style={[style.icon, { height: 52, width: 52, borderRadius: 15 }]}>
                            <Icon name='add' size={30} color={Colors.primary} />
                        </View>
                        <View style={[style.icon, { marginHorizontal: 10, height: 52, width: 52, borderRadius: 15 }]}>
                            <Icon name='mic' size={30} color={Colors.primary} />
                        </View>
                        <View style={[style.inputcontainer, { flex: 1 }]}>
                            <TextInput placeholder='Write now…' placeholderTextColor={Colors.disable1}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1 }]}
                            />
                            <Icon name='send-sharp' size={20} color={Colors.primary} />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}