import React, { useState } from 'react'
import { View, TouchableOpacity, ScrollView } from 'react-native';

// ----- PACKAGES ----
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

// ---- COMPONENTS ----
import Text from '../components/Text';
import { ProfileSection as styles } from './../StyleSheets'

// ---- SCREENS ----
import ProfileScreen from './ProfileScreen';
import FeeOverViewScreen from './FeeOverViewScreen';

export default ProfileSection = (props) => {

    const [showScreen, set_shown_screen] = useState(true);

    const toggle_screen = () => {
        set_shown_screen(!showScreen);
    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Settings')}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" />
                </TouchableOpacity>

                <Text font='bold' size='heading'>
                    {showScreen ? 'Profile' : 'Fee Overview'}
                </Text>

                <MaterialIcons name="menu-open" size={30} color="black" />
            </View>

            {/* which button is selected */}
            <View style={styles.tabs}>

                {showScreen ?
                    <TouchableOpacity
                        style={styles.activeTab}
                        onPress={() => { toggle_screen() }}
                    >
                        <Text font='bold' color='white'>Profile</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        style={styles.inactiveTab}
                        onPress={() => { toggle_screen() }}
                    >
                        <Text font='bold'>Profile</Text>
                    </TouchableOpacity>
                }

                {
                    showScreen ?
                        <TouchableOpacity
                            style={styles.inactiveTab}
                            onPress={() => { toggle_screen() }}
                        >
                            <Text font='bold'>Fee Overview</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={styles.activeTab}
                            onPress={() => { toggle_screen() }}
                        >
                            <Text font='bold' color='white'>Fee Overview</Text>
                        </TouchableOpacity>
                }

            </View>

            {/* which screen in shown */}
            <View style={styles.screenContainer}>
                {
                    showScreen ?
                        <ScrollView>
                            <ProfileScreen></ProfileScreen>
                        </ScrollView>
                        : <FeeOverViewScreen></FeeOverViewScreen>
                }

            </View>

        </View>
    )
}


