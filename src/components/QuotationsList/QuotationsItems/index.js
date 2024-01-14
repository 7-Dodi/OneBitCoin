import { View, Text, Image } from "react-native";
import styles from './style';

export const QuotationItems = ({valor, data}) => {
    return (
        <View style={styles.mainCard}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logBitcoin}
                        source={require("../../../img/bitCoinLogo.png")} />
                    <Text style={styles.dayCotation}>{data}</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>${valor}</Text>
            </View>
        </View>
    );
}