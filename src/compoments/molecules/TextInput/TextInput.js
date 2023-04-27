import { StyleSheet, Text, View, TextInput as Input } from 'react-native';
import React from 'react';

const TextInput = ({ label, placeHolder, ...rest }) => {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <Input placeholder={placeHolder} style={styles.text} {...rest} />
        </View>
    );
};

export default TextInput;

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    text: {
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        paddingLeft: 10,
    },
});

