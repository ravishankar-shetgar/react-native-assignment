import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from './Text';

export default CardDetails = (props) => {

    if (props.data.isOpen)
        return (
            <View>
                <Text>{props.data.key}</Text>
            </View>
        )
}