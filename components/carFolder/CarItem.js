import React from 'react'
import { View, Text, ImageBackground, Dimensions} from 'react-native'
import {styles} from "./carStyle"

const CarItem = ({carDetails}) => {
    const {model, image, price} = carDetails
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    return (
        <View style={[styles.carContainer, {height: windowHeight, width: windowWidth}]}>
            <ImageBackground source={image} style={styles.carImage}>
                <View style={styles.innerCont}>
                    <Text style={styles.title}>{model}</Text>
                    <Text tyle={styles.subTitle}>Starting from {" "} 
                        <Text style={styles.price}>{price}</Text>
                    </Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default CarItem
