import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    mainCard: {
        width: "95%",
        height: "auto",
        backgroundColor: "#fff",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center"
    },
    contextLeft: {
        width: "36%",
        height: "100%",
        alignItems: "flex-start",
    },
    dayCotation: {
        fontSize: 16,
        paddingLeft:2,
        color: "#000",
        fontWeight: "bold",
    },
    logBitcoin: {
        width: 40,
        height:40,
        marginLeft: 2,
    },
    contextRight: {
        width: "60%",
        alignItems: "flex-end",
    },
    price: {
        fontSize: 18,
        color: "#000",
        fontWeight: "bold",
    },
});

export default style;