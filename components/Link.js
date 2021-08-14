import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Link as styles } from './../StyleSheets'

export default Link = (props) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text size='subText' color='darkGrey'>{props.text}</Text>
            <MaterialIcons name="keyboard-arrow-right" size={24} color={styles.iconColor.color} />

        </TouchableOpacity>
    )
}
