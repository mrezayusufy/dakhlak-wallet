import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '@/src/theme/style'
import { Colors } from '@/src/theme/color'
import {Ionicons as Icon} from '@expo/vector-icons';import { router } from 'expo-router'
;
import { icons } from '@/src/icons'
 

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function ErrorS() {
    
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} >
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: 40, marginHorizontal: 10 ,justifyContent:'center'}]}>
                    <Image source={{uri: icons.cardInfo}} width={24} height={24}  style={{ alignSelf: 'center',  }}/>
                    <Text style={[style.s33,{color:Colors.active,fontSize:38,textAlign:'center'}]}>Payment Failed</Text>
                    <Text style={[style.r18,{color:Colors.txt1,textAlign:'center'}]}>Looks Like, You Didn’t Entered Card Successfuly.</Text>
                </View>

                <TouchableOpacity  onPress={() => router.navigate('Withdraw')}
                    style={[style.btn, { marginTop: 40 ,width:width/2.5,marginBottom:50,alignSelf:'center'}]}>
                    <Text style={[style.btntxt, { marginBottom: -4 }]}>Back</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}