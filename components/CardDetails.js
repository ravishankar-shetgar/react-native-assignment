import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Text from './Text';
import { MaterialIcons } from '@expo/vector-icons';

import Separator from '../components/Seperator'

import { CardDetails as styles } from './../StyleSheets'

export default CardDetails = (props) => {
    console.log(props.data);
    if (props.data.item.isOpen) {
        return (
            <TouchableOpacity
                style={styles.openCard}
                onPress={() => props.onPress()}
            >
                <View style={styles.cardDetailsOpen}>
                    <View style={styles.index}>
                        <Text>{props.data.item.key}</Text>
                    </View>
                    <View style={styles.cardNo}>
                        <Text>{props.data.item.cardNo}</Text>
                    </View>
                    <MaterialIcons name="keyboard-arrow-up" size={24} color={styles.closeIconColor.color} />
                </View>

                <Separator></Separator>

                <View style={styles.info}>
                    <Text font='bold' size='subText'>Monthly Card Maintenance Fee</Text>
                    <Text size='subText' >{props.data.item.maintenanceFee}</Text>
                </View>

                <View style={styles.info}>
                    <Text font='bold' size='subText'>Next Billing Date</Text>
                    <Text size='subText' >{props.data.item.nxtBillingDate}</Text>
                </View>

                <View style={styles.info}>
                    <Text font='bold' size='subText'>Transaction Fee For Every Transaction</Text>
                    <Text size='subText' >{props.data.item.transactionFee}</Text>
                </View>

            </TouchableOpacity>

        )
    }
    else {
        return (
            <TouchableOpacity
                style={styles.closedCard}
                onPress={() => props.onPress()}
            >
                <View style={styles.cardDetails}>
                    <View style={styles.index}>
                        <Text>{props.data.item.key}</Text>
                    </View>

                    <View style={styles.cardNo}>
                        <Text>{props.data.item.cardNo}</Text>
                    </View>

                    <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
                </View>
            </TouchableOpacity>
        )
    }
}