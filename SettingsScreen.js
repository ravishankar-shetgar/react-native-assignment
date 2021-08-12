// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Text from './components/Text'
import PageLink from './components/PageLink';
import { Settings as styles } from './StyleSheets'


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
                <AntDesign name="search1" size={30} color="black" />

                <AntDesign name="inbox" size={30} color="black" />

                <AntDesign name="closecircleo" size={30} color="black" />
            </View>

            <Separator />

            {/* profile info and logout button */}
            <View style={styles.profileSection}>
                <Ionicons name="person-circle-outline" size={50} color="black" />

                <View style={styles.userName}>
                    <Text>Welcome</Text>
                    <Text font='bold'>Mr. Bakir Qara</Text>
                </View>

                <MaterialIcons name="logout" size={32} color="black" />
            </View>

            <Separator />

            {/* list of pages */}
            <View style={styles.pageLinks}>

                <PageLink text='Transfer funds' icon="swap-horizontal" />
                <PageLink text='My Cards' icon="swap-horizontal" />
                <PageLink text='Profile' icon="swap-horizontal"
                    onPress={() => props.navigation.navigate('Profile')} />
                <PageLink text='Settings' icon="swap-horizontal" />
            </View>

            <View style={styles.help}>
                <View style={styles.helpIcon}>
                    <MaterialIcons name="headset-mic" size={54} color="#2fc08c" />
                </View>
                <Text color='darkGreen' font='bold'>How can we help you?</Text>

            </View>

            <View style={styles.options}>
                <Text>PRivacy policy</Text>
                <Text>imprint</Text>
                <Text>English</Text>
            </View>

            <Separator />


            <View style={styles.footer}>
                <Text>Bolt Card 2020</Text>
            </View>




        </View>
    );
}
