import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const UserList = ({ email, avatar, NamaLengkap, Username, email, Address, phoneNumber }) => {
    return (
        <View style={styles.container}>

            <Image style={styles.avatar} source={{ uri: `${avatar}` }} />
            <Text style={styles.listData}>
                NamaLengkap :<Text style={styles.normal}> {NamaLengkap}</Text>
            </Text>
            <Image style={styles.avatar} source={{ uri: `${avatar}` }} />
            <Text style={styles.listData}>
                Username :<Text style={styles.normal}> {Username}</Text>
            </Text>
            <Text style={styles.listData}>
                Email :<Text style={styles.normal}> {email}</Text>
            </Text>
            <Text style={styles.listData}>
                Address :<Text style={styles.normal}> {Address}</Text>
            </Text>
            <Text style={styles.listData}>
                phoneNumber :<Text style={styles.normal}> {phoneNumber}</Text>
            </Text>
            <Text style={styles.listData}>
                Address :<Text style={styles.normal}> {Address}</Text>
            </Text>
        </View>
    );
};

export default UserList;

const styles = StyleSheet.create({
    container: {
        borderColor: '#C5C5C5',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 26,
        paddingBottom: 10,
        paddingTop: 13,
        marginBottom: 30,
    },
    Label: {
        fontSize: 36,
        fontWeight: '700',
    },
    listData: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    normal: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 80,
    },
});
