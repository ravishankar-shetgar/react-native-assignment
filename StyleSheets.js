import { StyleSheet } from 'react-native';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TEXT_REGULAR = 'Roboto-Regular';
const TEXT_BOLD = 'Roboto-Medium'

const HEADING = 28;
const NORMAL = 18;
const SUBTEXT = 14;

const colors = {
    black: '#000000',
    white: '#ffffff',
    darkGrey: '#333333',
    lightGrey: '#DDDDDD',
    green: '#2fc08c',
    darkGreen: '#336553',
    lightGreen: '#edfaf5'
}

export const Settings = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: hp('9.5%'),
        alignItems: 'center',
        paddingHorizontal: wp('4%')
    },
    profileSection: {
        width: '100%',
        height: hp('12%'),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp('3%'),
    },
    profileImg: {
        height: hp('6%'),
        width: hp('6%'),
        borderRadius: 100,
    },
    profileImgView: {
        marginLeft: wp('1%'),
        elevation: 20,
        backgroundColor: colors.white,
        height: hp('6.5%'),
        width: hp('6.5%'),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.darkGrey,
    },
    userName: {
        flexDirection: 'column',
        flex: 3,
        marginHorizontal: wp('3%')
    },
    pageLinks: {
        width: '100%',
        height: hp('40%'),
        alignItems: 'center',
    },
    help: {
        width: '94%',
        alignItems: 'center',
        height: hp('12%'),
        flexDirection: 'row',
        borderRadius: 20,
        paddingHorizontal: wp('5%'),
        backgroundColor: colors.lightGreen
    },
    helpIcon: {
        marginRight: wp('5%')
    },
    options: {
        width: '100%',
        height: hp('12%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp('1%')
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: hp('10%'),
        alignItems: 'center'
    },
    separator: {
        borderTopWidth: 1,
        borderColor: colors.lightGrey,
        height: 1,
        width: wp('95%'),
        marginBottom: hp('1%')
    },
})

export const Profile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    profileImg: {
        height: hp('12%'),
        width: hp('12%'),
        borderRadius: 100,
    },
    profileImgView: {
        elevation: 20,
        backgroundColor: colors.white,
        height: hp('13.5%'),
        width: hp('13.5%'),
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.darkGrey,
    },
    input: {
        width: '100%',
        height: 20,
        borderWidth: 1
    }
})


export const Link = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingHorizontal: wp('6%'),
        alignContent: 'center',
        alignItems: 'center',
    },
})

export const InputWi = StyleSheet.create({
    button: {
        flexDirection: 'row',
        paddingHorizontal: wp('6%'),
        alignContent: 'center',
        alignItems: 'center',
    },
})

export const PageLink = StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: wp('6%'),
        justifyContent: 'space-between',
        height: hp('8%'),
        alignItems: 'center',
        marginVertical: hp('0.8%')
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '80%'
    }
})

export const Text = StyleSheet.create({
    // font style
    bold: {
        fontFamily: TEXT_BOLD,
    },
    regular: {
        fontFamily: TEXT_REGULAR,
    },
    // colors
    black: {
        color: colors.black
    },
    darkGrey: {
        color: colors.darkGrey
    },
    darkGreen: {
        color: colors.darkGreen
    },
    // font size
    heading: {
        fontSize: HEADING,
    },
    normal: {
        fontSize: NORMAL,
    },
    subText: {
        fontSize: SUBTEXT,
    }
})