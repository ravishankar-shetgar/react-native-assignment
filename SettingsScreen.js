// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import { Settings as styles } from './StyleSheets'
// will contain the settings screen with links to profile

const Separator = () => {
    return (
        <View style={styles.separator}>

        </View>
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
                    <Text style={styles.boldText}>Mr. Bakir Qara</Text>
                </View>

                <MaterialIcons name="logout" size={32} color="black" />
            </View>

            {/* list of pages */}
            <View style={styles.links}>
                <Text>Transfer funds</Text>
                <Text>My Cards</Text>

                <Button title='Profile' onPress={() => props.navigation.navigate('Profile')}></Button>

                <Text>Profile</Text>
                <Text>Settings</Text>
            </View>

            <View style={styles.help}>
                <Text>How can we help you?</Text>

            </View>

            <View style={styles.options}>
                <Text>PRivacy policy</Text>
                <Text>imprint</Text>
                <Text>English</Text>
            </View>

            <View style={styles.footer}>
                <Text>Bolt Card 2020</Text>
            </View>




        </View>
    );
}
