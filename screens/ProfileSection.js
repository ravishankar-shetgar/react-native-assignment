import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ProfileScreen from './ProfileScreen';
import FeeOverViewScreen from './FeeOverViewScreen';

const Tab = createMaterialTopTabNavigator();

export default ProfileSection = () => {
    return (
        <Tab.Navigator style={{ backgroundColor: '#FFFFFF' }}>

            <Tab.Screen name="Profile" component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: '#FFFFFF',
                    tabBarStyle: {
                        backgroundColor: '#111111',
                        borderRadius: 30,
                        marginHorizontal: 25,
                        marginTop: 25
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "#FFFFF"
                    }
                }}

            />
            <Tab.Screen name="Fee Overview" component={FeeOverViewScreen}
                options={{
                    title: 'Fee Overview',
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarInactiveTintColor: '#FFFFFF',
                    tabBarStyle: {
                        backgroundColor: '#111111',
                        borderRadius: 30,
                        marginHorizontal: 25,
                        marginTop: 25
                    },
                    tabBarIndicatorStyle: {
                        backgroundColor: "#FFFFFF"
                    }
                }}
            />
        </Tab.Navigator>


    );
}


