import { StyleSheet } from 'react-native';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TEXT_REGULAR = 'Roboto-Light';
const TEXT_BOLD = 'Roboto-Medium'

const HEADING = 30;
const NORMAL = 20;
const SUBTEXT = 12;

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
        height: hp('8%'),
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
        height: hp('13%'),
        flexDirection: 'row',
        borderRadius: 20,
        paddingHorizontal: wp('5%'),
        backgroundColor: colors.lightGreen
    },
    helpIcon: {
        marginRight: wp('4%')
    },
    options: {
        width: '100%',
        height: hp('12%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: hp('10%'),
    },
    separator: {
        borderTopWidth: 1,
        borderColor: colors.lightGrey,
        height: 1,
        width: wp('97%'),
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
})

export const PageLink = StyleSheet.create({
    button: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: wp('6%'),
        justifyContent: 'space-between',
        height: hp('8%'),
        alignItems: 'center',
        marginVertical: hp('0.8%')
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