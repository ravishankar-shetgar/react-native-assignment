import React from 'react';

// ---- PACKAGES ----
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ---- SCREENS ----
import SettingsScreen from './screens/SettingsScreen'
import ProfileSection from './screens/ProfileSection';

const Stack = createNativeStackNavigator();

export default function App() {

    let [fontsLoaded] = useFonts({
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
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
                    <Stack.Screen name="ProfileSection" component={ProfileSection} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


