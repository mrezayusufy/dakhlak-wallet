import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: Colors.bg
    },
    main: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: Colors.bg,
    },
    title: {
        fontSize: 40,
        color: Colors.secondary,
        fontFamily: 'Poppins_700Bold'
    },
    apptitle: {
        fontSize: 24,
        color: Colors.secondary,
        fontFamily: 'Poppins_500Medium'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Poppins_500Medium',
        color: Colors.secondary,
    },

    s33: {
        fontSize: 33,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.secondary,
    },

    m28: {
        fontSize: 28,
        fontFamily: 'Poppins_500Medium',
        color: Colors.secondary,
    },
    m25: {
        fontSize: 25,
        fontFamily: 'Poppins_500Medium',
        color: Colors.secondary,
    },
    s25: {
        fontSize: 25,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.secondary,
    },
    s26: {
        fontSize: 26,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.secondary,
    },
    s20: {
        fontSize: 20,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.secondary,
    },
    s22: {
        fontSize: 22,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.secondary,
    },
    s24: {
        fontSize: 24,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.secondary,
    },


    r10: {
        fontSize: 10,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m10: {
        fontSize: 10,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },

    r12: {
        fontSize: 12,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m12: {
        fontSize: 12,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b12: {
        fontSize: 12,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s12: {
        fontSize: 12,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },

    r13: {
        fontSize: 13,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m13: {
        fontSize: 13,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b13: {
        fontSize: 13,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s13: {
        fontSize: 13,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },

    r14: {
        fontSize: 14,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m14: {
        fontSize: 14,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b14: {
        fontSize: 14,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s14: {
        fontSize: 14,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },

    r15: {
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m15: {
        fontSize: 15,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b15: {
        fontSize: 15,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s15: {
        fontSize: 15,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },

    r16: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m16: {
        fontSize: 16,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b16: {
        fontSize: 16,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s16: {
        fontSize: 16,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },

    r17: {
        fontSize: 17,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m17: {
        fontSize: 17,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b17: {
        fontSize: 17,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s17: {
        fontSize: 17,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },


    r18: {
        fontSize: 18,
        fontFamily: 'Poppins_400Regular',
        color: Colors.active,
    },
    m18: {
        fontSize: 18,
        fontFamily: 'Poppins_500Medium',
        color: Colors.active,
    },
    b18: {
        fontSize: 18,
        fontFamily: 'Poppins_700Bold',
        color: Colors.active,
    },
    s18: {
        fontSize: 18,
        fontFamily: 'Poppins_600SemiBold',
        color: Colors.active,
    },



    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },



    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 57,
        borderRadius: 15,
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 18,
        color: Colors.secondary,
        fontFamily: 'Poppins_700Bold',
    },
    btnoutline: {
        alignItems: 'center',
        height: 57,
        borderRadius: 15,
        justifyContent: 'center',
        borderColor: Colors.primary,
        borderWidth: 1,

    },
    txtinput: {
        paddingHorizontal: 10,
        height: 57,
        alignItems: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#E5E9EF',
        borderRadius: 15
    },
    inputcontainer: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 57,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10
    },

    indicator: {
        height: 12,
        width: 28,
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 5,
        backgroundColor: Colors.bg,

    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Poppins_400Regular'
    },

    verticaldivider: {
        height: '60%',
        width: 1,
    },


    follow: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },
    following: {
        paddingVertical: 10, borderRadius: 6, backgroundColor: Colors.bg1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15
    },

    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 7,
        // borderWidth: 0,
        backgroundColor: Colors.primary,
        borderColor: Colors.primary,
        color: Colors.secondary,
        fontFamily: 'Poppins_500Medium'
    },
    categoryText: {
        fontSize: 19,
        color: Colors.active,
        borderWidth: 0,
        backgroundColor: Colors.secondary,
        borderRadius: 7,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'Poppins_500Medium'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 0,
        justifyContent: 'space-between',
    },

    icon: {
        height: 42, width: 42, borderRadius: 21,
        backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center'
    },

    icon1: {
        height: 31, width: 31, borderRadius: 10,
        backgroundColor: Colors.secondary, justifyContent: 'center', alignItems: 'center'
    },

}
);