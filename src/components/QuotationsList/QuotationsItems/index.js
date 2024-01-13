import { View, Text, Image } from "react-native";
import styles from './style';

export const QuotationItems = () => {
    return (
        <View style={styles.mainCard}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logBitcoin}
                        source={require("../../../img/bitCoinLogo.png")} />
                    <Text style={styles.dayCotation}>13/01/2024</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 53331.052</Text>
            </View>
        </View>
    );
}