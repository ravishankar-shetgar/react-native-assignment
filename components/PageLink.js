import React from 'react';
import { View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import Text from './Text';
import { PageLink as styles } from './../StyleSheets'

export default PageLink = (props) => {
    return (

        <TouchableOpacity
            style={styles.button}
            onPress={() => { props.onPress() }}
        >
            <Ionicons name={props.icon} size={24} color="black" />
            <Text>{props.text}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />

        </TouchableOpacity>


    )
}