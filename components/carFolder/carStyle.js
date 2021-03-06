import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({
    carContainer: {
        position: "relative",
    },
    carImage: {
        width: "100%",
        height: "100%",
        position: "relative",
    },
    innerCont: {
        width: "100%",
        height: "100%",
        marginTop: "25%",
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "yellow",
    },
    subTitle: {
        fontWeight: "900",
        fontSize: 30
    },
    price: {
        color: "red",
    },
    btnCont: {
        position: "absolute",
        bottom: "7%",
        width: "100%",
        height: "15%",
        justifyContent: "space-around",
        alignItems: "center"
    }
})