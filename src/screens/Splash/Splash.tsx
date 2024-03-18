import { View, Text,SafeAreaView,StatusBar, Image } from 'react-native'
import React from 'react'
import style from '@/src/theme/style'
import Colors from '@/constants/Colors';
import { icons } from '@/src/icons';

export default function Splash() {

    return (
        <SafeAreaView style={[style.area, {}]}>
            <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={{uri: icons.logo}} width={100} height={100} style={{tintColor: Colors.light.tint}}/>

                <Text style={[style.title,{color:'#10BCB1',fontSize:45}]}>Dakhlak</Text>
            </View>
        </SafeAreaView>
    )
}