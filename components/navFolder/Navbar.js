import React from 'react'
import { View, Image} from 'react-native'
import {styles} from "./navStyle"

export const Navbar = () => {
    return (
        <View style={styles.navbar}>
            <Image
                style={styles.logo}
                source={require("../../assets/tesla-img/logo.png")}
            />

            <Image
                style={styles.menu}
                source={require("../../assets/tesla-img/menu.png")}
            />
        </View>
    )
}
