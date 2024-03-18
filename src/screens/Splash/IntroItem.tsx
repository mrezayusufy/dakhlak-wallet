import { View, Text, Dimensions, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import { Colors } from '@/src/theme/color'
import style from '@/src/theme/style'

const width = Dimensions.get('screen').width

export default function IntroItem({ item }: any) {
    return (
        <SafeAreaView style={{ width: width, backgroundColor: Colors.bg }}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <View style={{ flex: 1,marginTop:20,justifyContent:'center' }}>
                <Image source={item.bg} style={{ width: 250, height:250, resizeMode: 'stretch' ,alignSelf:'center'}} />
            </View>
            <View style={{ flex: 0.7, marginHorizontal: 20 }} >
                <Text style={[style.s33, { textAlign: 'center', color: Colors.active }]}>{item.title1}</Text>
                <Text style={[style.r17, { color: Colors.txt, textAlign: 'center' }]}>{item.subtitle}</Text>
            </View>
        </SafeAreaView>
    )
}