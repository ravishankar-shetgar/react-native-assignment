// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';

import Text from './../components/Text'
import { ProfileScreen as styles } from './../StyleSheets'
// will contain the settings screen with links to profile
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { MaterialIcons } from '@expo/vector-icons';


import profile from './../assets/profile.jpg'
import InputWithLabel from './../components/InputWithLabel';

export default function ProfileScreen() {

    // --Show date time picker
    const [isDatePickerVisible, set_date_picker_visible] = useState(false);
    const view_date_picker_handler = () => {
        set_date_picker_visible(!isDatePickerVisible);
    }
    const [dateTime, set_date_time] = useState('Choose')
    const set_date_time_handler = (value) => {
        set_date_time(value.toDateString());
    }


    return (
        <View style={styles.container}>

            <View style={styles.profileImgView}>
                <Image source={profile} style={styles.profileImg} />
            </View>

            <InputWithLabel
                label='Name on Card'>
                <TextInput
                    placeholder={'Name'}
                    style={styles.textInput}></TextInput>
            </InputWithLabel>

            <InputWithLabel
                label='Date of Birth'>

                <TouchableOpacity
                    style={styles.dateTimePicker}
                    onPress={() => { view_date_picker_handler() }}
                >
                    <Text color='darkGrey'>{dateTime}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color={styles.iconColor.color} />
                </TouchableOpacity>
            </InputWithLabel>

            <InputWithLabel
                label='Gender'>
                <TextInput style={styles.textInput}></TextInput>
            </InputWithLabel>


            <InputWithLabel
                label='Address'>
                <TextInput
                    placeholder={'Address'}
                    style={styles.textInput}></TextInput>
            </InputWithLabel>

            <InputWithLabel
                label='ID'>
                <TextInput
                    value={'#554544'}
                    editable={false}
                    style={styles.idTextInput}></TextInput>
            </InputWithLabel>









            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                display='spinner'
                minimumDate={new Date()} // minimum date is today 
                // data returned is a JS date object
                onConfirm={(value) => set_date_time_handler(value)}
                onCancel={() => { console.log('date picker cancelled'); }}
            />





        </View>
    );
}
