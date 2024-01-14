import { View, Text, ScrollView, TouchableOpacity, FlatList  } from "react-native";
import styles from './style';
import { Fragment } from "react";
import { QuotationItems } from "./QuotationsItems";

export const QuotationList = ({filterDay, listTransactions}) =>{
    const daysQuery = filterDay
    return(
        <Fragment>
        <View style={styles.filters}>
            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> daysQuery(7)}    
            >
                <Text style={styles.textBuutonQuery}>7D</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> daysQuery(15)}    
            >
                <Text style={styles.textBuutonQuery}>15D</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> daysQuery(30)}    
            >
                <Text style={styles.textBuutonQuery}>1M</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> daysQuery(90)}    
            >
                <Text style={styles.textBuutonQuery}>3M</Text>
            </TouchableOpacity><TouchableOpacity
                style={styles.buttonQuery}
                onPress={()=> daysQuery(180)}    
            >
                <Text style={styles.textBuutonQuery}>6M</Text>
            </TouchableOpacity>
        </View>
            <FlatList 
                data={listTransactions}
                renderItem={({item}) => {
                    return <QuotationItems valor={item.valor} data={item.data}/>
                }}
            />
        </Fragment>
    );
}