import React from 'react'
import { View, Text, ImageBackground, StatusBar, Dimensions} from 'react-native'
import {styles} from "./carStyle"
import {Button} from "../buttonFolder/Button"

const CarItem = ({carDetails}) => {
    const {model, image, price} = carDetails

    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    const screenHeight = Dimensions.get("screen").height;
    const screenWidth = Dimensions.get("screen").width;

    return (
        <View style={[styles.carContainer, {height: screenHeight, width: windowWidth}]}>
            <ImageBackground source={image} style={styles.carImage}>
                <View style={styles.innerCont}>
                    <Text style={styles.title}>{model}</Text>
                    <Text tyle={styles.subTitle}>Starting at {" "} 
                        <Text style={styles.price}>{price}</Text>
                    </Text>
                </View>
                <View style={styles.btnCont}>
                    <Button buttonProps={"topBtn"} />
                    <Button buttonProps={"downBtn"} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default CarItem
