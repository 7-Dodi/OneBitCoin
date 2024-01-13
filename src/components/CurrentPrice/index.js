import { View, Text  } from "react-native";
import styles from './style';

export const CurrentPrice = () =>{
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 54423.365</Text>
            <Text style={styles.textPrice}>Última cotação</Text>
        </View>
    );
}