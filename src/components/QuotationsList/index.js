import { View, Text, ScrollView, TouchableOpacity  } from "react-native";
import styles from './style';
import { Fragment } from "react";

export const QuotationList = () =>{
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> {}}    
            >
                <Text style={styles.textBuutonQuery}>7D</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> {}}    
            >
                <Text style={styles.textBuutonQuery}>15D</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> {}}    
            >
                <Text style={styles.textBuutonQuery}>1M</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> {}}    
            >
                <Text style={styles.textBuutonQuery}>3M</Text>
            </TouchableOpacity><TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> {}}    
            >
                <Text style={styles.textBuutonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
        <ScrollView></ScrollView>
        </Fragment>
    );
}