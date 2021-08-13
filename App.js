import React from 'react';
import { View } from 'react-native'
import { useFonts } from 'expo-font';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SettingsScreen from './screens/SettingsScreen'
import ProfileScreen from './screens/ProfileScreen'
import FeeOverViewScreen from './screens/FeeOverViewScreen'
import { Navigation as styles } from './StyleSheets'

import { MaterialIcons } from '@expo/vector-icons';
import Text from './components/Text';
import ProfileSection from './screens/ProfileSection';

const Stack = createNativeStackNavigator();

import { useRoute } from '@react-navigation/native';



const HeaderComponent = (props) => {

    return (
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Text font='bold'>Profile</Text>
            </View>
            <MaterialIcons name="menu-open" size={24} color="black" />
        </View>
    )
}
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
                // screenOptions={{ headerShown: false }}
                >
                    <Stack.Screen name="Settings" component={SettingsScreen}
                        options={{ headerShown: false }}
                    />

                    <Stack.Screen name="ProfileSection" component={ProfileSection}
                        screenOptions={{ headerShown: true }}
                        options={{
                            headerStyle: {
                                elevation: 0, // remove shadow on Android
                                shadowOpacity: 0, // remove shadow on iOS
                            },
                            headerTitle: props => <HeaderComponent {...props}></HeaderComponent>
                        }}
                    />

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}


