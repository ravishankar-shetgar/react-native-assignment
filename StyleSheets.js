import { StyleSheet } from 'react-native';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const BOLD_FONT = '';
const REGULAR_FONT = '';

const colors = {
    black: '#000000',
    white: '#ffffff',
    darkGrey: '#333333',
    lightGrey: '#f5f5f5'
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
    links: {
        width: '100%',
        borderWidth: 1,
        height: hp('40%'),
        alignItems: 'center',
    },
    help: {
        width: '100%',
        alignItems: 'center',
        borderWidth: 1,
        height: hp('15%'),
    },
    options: {
        width: '100%',
        borderWidth: 1,
        height: hp('12%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        width: '100%',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        height: hp('10%'),
    },
    separator: {
        borderTopWidth: 1,
        borderColor: colors.lightGrey,
        height: 1,
        width: wp('97%')
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