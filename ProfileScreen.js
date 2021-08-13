// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Image, TextInput } from 'react-native';

import Text from './components/Text'
import { Profile as styles } from './StyleSheets'
// will contain the settings screen with links to profile

import profile from './assets/profile.jpg'

export default function Settings() {
    return (
        <View style={styles.container}>

            <View style={styles.profileImgView}>
                <Image source={profile} style={styles.profileImg} />
            </View>

            <View style={styles.input}>
                <Text>Name on Card</Text>
                <TextInput style={styles.input}></TextInput>
            </View>




        </View>
    );
}
