import React from 'react';
import { View, TouchableOpacity } from 'react-native'

import Text from './Text';
import { InputWithLabel as styles } from './../StyleSheets'

export default InputWithLabel = (props) => {
    return (

        <View style={styles.inputView}>
            <Text>{props.label}</Text>
            <View style={styles.input}>
                {props.children}
            </View>
        </View>


    )
}