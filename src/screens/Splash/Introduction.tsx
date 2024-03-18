import { View, Text, Dimensions, TouchableOpacity, FlatList, SafeAreaView, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '@/src/theme/color'
import style from '@/src/theme/style'
import { useNavigation } from '@react-navigation/native'
import IntroItem from './IntroItem'
import { Slides, ISlide} from './Slides'
import { router } from 'expo-router'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Introduction() {
    
    const ref = React.useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        return <View style={{ backgroundColor: Colors.bg,marginHorizontal:20 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center',justifyContent:'center' ,marginBottom:20}}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            height: 12,
                            width: 50,
                            borderRadius: 10,
                            backgroundColor: Colors.primary,
                            alignItems: 'center',
                            marginHorizontal: 5
                        },]}
                    />

                ))}

            </View>

            {currentSlideIndex == 0 ?
                (
                    <TouchableOpacity onPress={goNextSlide} style={[style.btn,{marginVertical:20}]}>
                        <Text style={[style.btntxt,]}>Next</Text>
                    </TouchableOpacity>
                ) : currentSlideIndex == 1 ? (
                    <TouchableOpacity onPress={goNextSlide} style={[style.btn,{marginVertical:20}]}>
                        <Text style={[style.btntxt]}>Next</Text>
                    </TouchableOpacity>
                ) : (
                    <Pressable onPress={()=> router.navigate('(auth)/login')} 
                    style={[style.btn,{marginVertical:20}]}>
                        <Text style={[style.btntxt]}>Get Started</Text>
                    </Pressable>
                )
            }

        </View>
    }

    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };
    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={ item => item?.id }
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />
        </SafeAreaView>
    )
}