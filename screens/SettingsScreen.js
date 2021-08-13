// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Text from '../components/Text'
import PageLink from '../components/PageLink';
import { Settings as styles } from '../StyleSheets'
import Link from '../components/Link'
import DropDownPicker from 'react-native-dropdown-picker';


import profile from '../assets/profile.jpg'
import reactNativeIcon from '../assets/react-native.png'

import Separator from './../components/Seperator'

export default function Settings(props) {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'English', value: 'English' },
        { label: 'French', value: 'French' },
        { label: 'German', value: 'German' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="search1" size={25} color="black" />

                <Image source={reactNativeIcon} style={styles.appIcon}></Image>

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

                <MaterialIcons name="logout" size={25} color="black" />
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

            <TouchableOpacity style={styles.help}>
                <View style={styles.helpIcon}>
                    <MaterialIcons name="headset-mic" size={50} color="#2fc08c" />
                </View>
                <Text color='darkGreen' font='bold'>How can we help you?</Text>
            </TouchableOpacity>

            <View style={styles.options}>
                <Link text='Privacy Policy'></Link>
                <Link text='Imprint'></Link>

                <View style={styles.langPicker}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                    />
                </View>



            </View>

            <Separator />


            <View style={styles.footer}>
                <Text size='subText' color='darkGrey'>© Bolt Card 2020</Text>
            </View>




        </View>
    );
}
