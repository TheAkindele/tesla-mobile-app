import { StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    navbar: {
        position: "absolute",
        top: "5%",
        paddingHorizontal: 13,
        width: "100%",
        height: "5%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        width: 100,
        height: 25,
        resizeMode: "contain",
    },
    menu: {
        width: 30,
        height: 25,
        resizeMode: "contain",
    }
})