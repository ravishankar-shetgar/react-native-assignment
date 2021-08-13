// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Text from './components/Text'
import PageLink from './components/PageLink';
import { Settings as styles } from './StyleSheets'
import Link from './components/Link'

import profile from './assets/profile.jpg'

// light grey border between sections
const Separator = () => {
    return (
        <View style={styles.separator}></View>
    )
}

export default function Settings(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="search1" size={25} color="black" />

                <AntDesign name="inbox" size={25} color="black" />

                <AntDesign name="closecircleo" size={25} color="black" />
            </View>

            <Separator />

            {/* profile info and logout button */}
            <View style={styles.profileSection}>
                <View style={styles.profileImgView}>
                    <Image source={profile} style={styles.profileImg} />
                </View>

                <View style={styles.userName}>
                    <Text color={'darkGrey'}>Welcome</Text>
                    <Text font='bold'>Mr. Bakir Qara</Text>
                </View>

                <MaterialIcons name="logout" size={32} color="black" />
            </View>

            <Separator />

            {/* list of pages */}
            <View style={styles.pageLinks}>

                <PageLink text='Transfer funds' icon="swap-horizontal" />
                <PageLink text='My Cards' icon="card-outline" />
                <PageLink text='Profile' icon="ios-person-outline"
                    onPress={() => props.navigation.navigate('Profile')} />
                <PageLink text='Settings' icon="settings-outline" />
            </View>

            <View style={styles.help}>
                <View style={styles.helpIcon}>
                    <MaterialIcons name="headset-mic" size={50} color="#2fc08c" />
                </View>
                <Text color='darkGreen' font='bold'>How can we help you?</Text>

            </View>

            <View style={styles.options}>
                <Link text='Privacy Policy'></Link>
                <Link text='Imprint'></Link>
                <Link text='English'></Link>
            </View>

            <Separator />


            <View style={styles.footer}>
                <Text size='subText' color='darkGrey'>© Bolt Card 2020</Text>
            </View>




        </View>
    );
}
