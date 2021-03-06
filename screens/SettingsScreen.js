import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

// ----- PACKAGES ----
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';


// ---- COMPONENTS ----
import Text from '../components/Text'
import PageLink from '../components/PageLink';
import { Settings as styles } from '../StyleSheets'
import Link from '../components/Link'
import Separator from './../components/Seperator'

// ---- ASSETS ----
import profile from '../assets/profile.jpg'
import reactNativeIcon from '../assets/icons/react-native.png'


export default function Settings(props) {

    // drop down controls
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('English');
    // drop down options
    const [items, setItems] = useState([
        { label: 'English', value: 'English' },
        { label: 'French', value: 'French' },
        { label: 'German', value: 'German' },
    ]);

    return (
        <View style={styles.container}>

            {/* header */}
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

                <Image
                    source={require('./../assets/icons/logout.png')}
                    style={styles.logoutIcon}
                ></Image>

            </View>

            <Separator />

            {/* navigate to pages */}
            <View style={styles.pageLinks}>

                <PageLink
                    text='Transfer funds'
                    icon="swap-horizontal"
                    onPress={() => { console.log('Transfer Screen'); }}
                />

                <PageLink
                    text='My Cards'
                    icon="card-outline"
                    onPress={() => { console.log('My Cards Screen'); }}
                />
                <PageLink
                    text='Profile'
                    icon="ios-person-outline"
                    onPress={() => props.navigation.navigate('ProfileSection')}
                />
                <PageLink
                    text='Settings'
                    icon="settings-outline"
                    onPress={() => { console.log('Settings Screen'); }}
                />

            </View>

            {/* go to help section */}
            <TouchableOpacity
                style={styles.help}
                onPress={() => { console.log('Help Screen'); }}
            >
                <View style={styles.helpIcon}>
                    <MaterialIcons name="headset-mic" size={50} color="#2fc08c" />
                </View>

                <Text color='darkGreen' font='bold'>How can we help you?</Text>

            </TouchableOpacity>

            {/* more options and links */}
            <View style={styles.options}>

                <Link text='Privacy Policy'></Link>

                <Link text='Imprint'></Link>

                {/* language drop down picker */}
                <View style={styles.langPicker}>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        style={styles.dropDown}
                        labelStyle={styles.dropDownText}
                    />
                </View>

            </View>

            <Separator />

            {/* copyright statement */}
            <View style={styles.footer}>
                <Text size='subText' color='darkGrey'>?? Bolt Card 2020</Text>
            </View>

        </View>
    );
}
