import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import { FeeOverViewScreen as styles } from './../StyleSheets'

import CardDetails from '../components/CardDetails';

export default function FeeOverViewScreen() {


    const [cardData, set_card_data] = useState([
        {
            key: 1,
            cardNo: 'NG **** **** **** 3423',
            maintenanceFee: 'USD 3',
            nxtBillingDate: '01.10.2020',
            transactionFee: '10%',
            isOpen: false
        },
        {
            key: 2,
            cardNo: 'NG **** **** **** 3445',
            maintenanceFee: 'USD 5',
            nxtBillingDate: '05.10.2020',
            transactionFee: '8%',
            isOpen: false
        },
        {
            key: 3,
            cardNo: 'NG **** **** **** 5899',
            maintenanceFee: 'USD 5',
            nxtBillingDate: '01.11.2020',
            transactionFee: '10%',
            isOpen: false
        },
        {
            key: 4,
            cardNo: 'NG **** **** **** 5446',
            maintenanceFee: 'USD 7',
            nxtBillingDate: '01.12.2020',
            transactionFee: '5%',
            isOpen: false
        },
        {
            key: 5,
            cardNo: 'NG **** **** **** 2236',
            maintenanceFee: 'USD 2',
            nxtBillingDate: '015.10.2020',
            transactionFee: '10%',
            isOpen: false
        },
    ]);

    const open_card_handler = (index) => {
        let temp = [...cardData];
        temp[index - 1].isOpen = !temp[index - 1].isOpen;
        set_card_data(temp);
    }

    return (
        <View style={styles.container}>
            {
                cardData.map((item) => {
                    return (
                        <CardDetails
                            data={item}
                            onPress={(value) => { open_card_handler(value) }}
                            key={item.key}
                        />
                    )
                })
            }

        </View>
    );
}
