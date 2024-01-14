import { View, Text  } from "react-native";
import styles from './style';

export const CurrentPrice = ({price}) =>{
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ {price}</Text>
            <Text style={styles.textPrice}>Última cotação</Text>
        </View>
    );
}