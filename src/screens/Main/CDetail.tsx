import { View, Text, SafeAreaView, StatusBar, KeyboardAvoidingView, Image, Dimensions, ImageBackground, TouchableOpacity, TextInput, ScrollView, Platform } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import { images } from '@/src/icons'


const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function CardDetailsScreen() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                     

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Image source={require('@/assets/image/s25.png')} resizeMode='stretch' style={{ height: height / 4, width: width - 40 }} />
                  
                        <Text style={[style.s20, { color: Colors.active, marginTop: 20 }]}>Transactions</Text>

                        <View style={{ marginTop: 10, padding: 15, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>
                            <Image source={images.profile} width={24} height={24} />
                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s15, { color: Colors.active }]}>Avicii Ronaldo</Text>
                                <Text style={[style.r13, { color: Colors.txt }]}>26 .11 .2021  -  5:15 AM</Text>
                            </View>
                            <Text style={[style.s15, { color: Colors.primary }]}>-0.056</Text>
                        </View>

                        <View style={{ marginTop: 10, padding: 15, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>
                            <Image source={images.profile} width={24} height={24} />

                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s15, { color: Colors.active }]}>Netia Horaan</Text>
                                <Text style={[style.r13, { color: Colors.txt }]}>21 .11 .2021  -  2:15 AM</Text>
                            </View>
                            <Text style={[style.s15, { color: Colors.primary }]}>-0.066</Text>
                        </View>

                        <View style={{ marginTop: 10, padding: 15, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>
                            <Image source={images.profile} width={24} height={24} />

                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s15, { color: Colors.active }]}>Segam Holland</Text>
                                <Text style={[style.r13, { color: Colors.txt }]}>19 .11 .2021  -  4:35 AM</Text>
                            </View>
                            <Text style={[style.s15, { color: Colors.primary }]}>-0.076</Text>
                        </View>

                        <View style={{ marginTop: 10,marginBottom:20, padding: 15, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15 }}>
                            <Image source={images.profile} width={24} height={24} />

                            <View style={{ marginLeft: 10, flex: 1 }}>
                                <Text style={[style.s15, { color: Colors.active }]}>Natia Horaan</Text>
                                <Text style={[style.r13, { color: Colors.txt }]}>13 .11 .2021  -  1:13 PM</Text>
                            </View>
                            <Text style={[style.s15, { color: Colors.primary }]}>-0.026</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}