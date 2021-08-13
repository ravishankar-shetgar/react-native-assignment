import React from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from './ProfileScreen';
import FeeOverViewScreen from './FeeOverViewScreen';

const Tab = createMaterialTopTabNavigator();

export default ProfileSection = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{ title: 'Profile' }}
            />
            <Tab.Screen name="Fee Overview" component={FeeOverViewScreen} />
        </Tab.Navigator>


    );
}


