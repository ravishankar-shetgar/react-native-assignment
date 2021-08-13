// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

// ----- PACKAGES ----
import DateTimePickerModal from "react-native-modal-datetime-picker";
import RadioButtonRN from 'radio-buttons-react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

// ---- COMPONENTS ----
import InputWithLabel from './../components/InputWithLabel';
import Text from './../components/Text'
import { ProfileScreen as styles } from './../StyleSheets'

// ---- ASSETS ----
import profile from './../assets/profile.jpg'

export default function ProfileScreen() {

    // store date time
    const [dateTime, set_date_time] = useState('Choose')
    const set_date_time_handler = (value) => {
        set_date_time(value.toDateString());
    }
    // Show date time picker
    const [isDatePickerVisible, set_date_picker_visible] = useState(false);
    const view_date_picker_handler = () => {
        set_date_picker_visible(!isDatePickerVisible);
    }

    // radio button options
    const data = [
        { label: 'Male' },
        { label: 'Female' }
    ];

    return (
        <View style={styles.container}>

            <KeyboardAvoidingView style={styles.keyBoardAvoidingView}
                behavior='padding'
            // keyboardVerticalOffset={200}
            >

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
                    <RadioButtonRN
                        data={data}
                        selectedBtn={(e) => console.log(e)}
                        style={styles.radioButtonsView}
                        boxStyle={styles.radioButton}
                        textStyle={styles.radioText}
                        icon={
                            <FontAwesome5 name="check-circle" size={24} color="black" />
                        }
                    >
                    </RadioButtonRN>
                </InputWithLabel>


                <InputWithLabel
                    label='Address'>
                    <TextInput
                        placeholder={'Address'}
                        style={styles.textInput}
                        numberOfLines={3}
                    ></TextInput>
                </InputWithLabel>

                <InputWithLabel
                    label='ID'>
                    <TextInput
                        value={'#554544'}
                        editable={false}
                        style={styles.idTextInput}></TextInput>
                </InputWithLabel>

                {/* will show when button is pressed */}
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    display='spinner'
                    minimumDate={new Date()} // minimum date is today 
                    // data returned is a JS date object
                    onConfirm={(value) => set_date_time_handler(value)}
                    onCancel={() => { console.log('date picker cancelled'); }}
                />

            </KeyboardAvoidingView>
        </View>
    );
}
