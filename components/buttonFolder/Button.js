import React from 'react'
import { Text, View , TouchableHighlight} from 'react-native'
import { styles } from './buttonStyle'

export const Button = ({buttonProps}) => {
    const btnBg = buttonProps === "topBtn" ? "gray" : "green"
    const textColor = buttonProps === "topBtn" ? "yellow" : "white"

    return (
        <TouchableHighlight style={[styles.button, {backgroundColor: btnBg}]}>
            <Text 
                style={[styles.btnText, {color: textColor}]}
                onPress={() => console.warn("button pressed")}
            >
                    Press Me
            </Text>
        </TouchableHighlight>
    )
}


