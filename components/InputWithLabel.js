import React from 'react';
import { View, TouchableOpacity } from 'react-native'

import Text from './Text';
import { InputWithLabel as styles } from './../StyleSheets'

export default InputWithLabel = (props) => {
    return (

        <View style={styles.input}>
            <Text>{props.label}</Text>
            {...props.children}
        </View>


    )
}