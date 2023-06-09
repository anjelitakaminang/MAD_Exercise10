import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Transaction = ({ Date, Description, warna = '#D9435E', Total }) => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.text1}>{Date}</Text>
                <Text style={styles.text2}>{Description}</Text>
            </View>
            <Text style={styles.text3(color)}>{Total}</Text>
        </View>
    );
};

export default Transaction;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        elevation: 5,
    },
    text1: {
        fontSize: 14,
    },
    text2: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    },
    text3: color => ({
        fontSize: 16,
        fontFamily: 'Poppins-Black',
        color: color,
    }),
});
