import React from 'react';
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SettingsScreen from './SettingsScreen'
import ProfileScreen from './ProfileScreen'

const Stack = createNativeStackNavigator();

export default function App() {

    let [fontsLoaded] = useFonts({
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
        'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf')
    });

    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <NavigationContainer >
                <Stack.Navigator
                    screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


