import React from 'react';
import { Text as NativeTextComponent } from 'react-native'

import { Text as styles } from './../StyleSheets'

export default Text = (props) => {

    // bold/regular
    let textFont = styles[props.font] || styles.regular

    // black/darkGrey
    let textColor = styles[props.color] || styles.black

    // heading/subText/normal
    let textSize = styles[props.size] || styles.normal;

    return (
        <NativeTextComponent
            style={[textFont, textColor, textSize]}
            {...props}
        >
            {props.children}
        </NativeTextComponent>
    )
}