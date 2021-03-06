import { StyleSheet } from 'react-native';


import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const REGULAR_FONT = 'Roboto-Regular';
const BOLD_FONT = 'Roboto-Medium'

const HEADING = 24;
const NORMAL = 18;
const SUBTEXT = 14;

const colors = {
    black: '#000000',
    white: '#FFFFFF',
    darkBlue: '#17202c',
    darkGrey: '#828282',
    lightGrey: '#EEEEEE',
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
        paddingHorizontal: wp('6%')
    },
    logoutIcon: {
        height: 30,
        width: 30
    },
    profileSection: {
        width: '100%',
        height: hp('12%'),
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: wp('3.5%'),
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
        marginHorizontal: wp('5%')
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
        paddingHorizontal: wp('4%'),
    },
    footer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: hp('9%'),
        alignItems: 'center'
    },
    appIcon: {
        height: hp('6%'),
        width: hp('6%')
    },
    langPicker: {
        width: '30%',
        height: hp('10%'),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    dropDown: {
        borderWidth: 0
    },
    dropDownText: {
        color: colors.darkGrey
    }
})


export const ProfileSection = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: wp('1%')
    },
    header: {
        flexDirection: 'row',
        width: '95%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('2%'),
        marginTop: hp('1%')
    },
    menuIcon: {
        height: 30,
        width: 30
    },
    tabs: {
        width: '94%',
        marginVertical: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: hp('8%'),
        padding: hp('0.4%'),
        borderRadius: 30,
        backgroundColor: colors.lightGrey
    },
    inactiveTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: colors.lightGrey
    },
    activeTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        backgroundColor: colors.darkBlue,
    },
    scrollContainer: {
        width: '100%',
        borderWidth: 1
    },
    screenContainer: {
        flex: 1
    }

});

export const ProfileScreen = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: wp('1%')
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
        marginTop: hp('2%'),
        marginBottom: hp('3%'),
        justifyContent: 'center',
        shadowColor: colors.darkGrey,
    },
    cameraIcon: {
        position: 'absolute',
        backgroundColor: colors.green,
        height: hp('6%'),
        width: hp('6%'),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 5,
        borderColor: colors.white,
        top: 0,
        right: hp('-2%')
    },
    textInput: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGrey,
        paddingHorizontal: wp('4%'),
        fontSize: NORMAL
    },
    radioButtonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    radioButton: {
        width: '48%',
        marginHorizontal: wp('1%')
    },
    radioText: {
        marginLeft: wp('2%')
    },
    iconColor: {
        color: colors.darkGrey
    },
    dateTimePicker: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp('4%'),
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGrey
    },
    idTextInput: {
        backgroundColor: colors.lightGrey,
        flex: 1,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.lightGrey,
        paddingHorizontal: wp('4%'),
        fontSize: NORMAL
    }
})


export const FeeOverViewScreen = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    iconColor: {
        color: colors.darkGrey
    },
    scrollView: {
        flex: 1,
        borderWidth: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
})


export const Separator = StyleSheet.create({
    separator: {
        borderTopWidth: 1,
        borderColor: colors.lightGrey,
        height: 1,
        width: '95%',
        marginBottom: hp('1%')
    }
});

export const CardDetails = StyleSheet.create({
    index: {
        borderWidth: 1,
        width: NORMAL * 2,
        height: NORMAL * 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginRight: wp('3%'),
        borderColor: colors.lightGrey
    },
    closedCard: {
        flexDirection: 'row',
        width: '97%',
        marginHorizontal: wp('1%'),
        marginVertical: hp('1%'),
        padding: hp('1.7%'),
        borderWidth: 2,
        borderColor: colors.lightGrey,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: colors.white
    },
    cardDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    closeIconColor: {
        color: colors.green
    },
    cardDetailsOpen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: hp('2%')
    },
    cardNo: {
        alignContent: 'flex-start',
        width: '78%'
    },
    openCard: {
        flexDirection: 'column',
        width: '97%',
        marginHorizontal: wp('1%'),
        marginVertical: hp('1%'),
        padding: hp('1.7%'),
        borderWidth: 2,
        borderColor: colors.green,
        borderRadius: 10,
        alignItems: 'flex-start',
        elevation: 10,
        backgroundColor: colors.white
    },
    info: {
        marginVertical: hp('1.5%'),
        height: hp('6%'),
        justifyContent: 'space-between'
    }
})

export const Link = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },
    iconColor: {
        color: colors.darkGrey
    }
})

export const InputWithLabel = StyleSheet.create({
    inputView: {
        height: hp('11%'),
        width: '100%',
        marginBottom: hp('2%'),
        paddingHorizontal: wp('3%')
    },
    input: {
        height: '70%',
        marginTop: hp('0.5%')
    }
})

export const PageLink = StyleSheet.create({
    button: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: wp('7%'),
        justifyContent: 'space-between',
        height: hp('8%'),
        alignItems: 'center',
        marginVertical: hp('0.8%')
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '78%'
    }
})

export const Text = StyleSheet.create({
    // font style
    bold: {
        fontFamily: BOLD_FONT,
    },
    regular: {
        fontFamily: REGULAR_FONT,
    },
    // colors
    black: {
        color: colors.black
    },
    white: {
        color: colors.white
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