import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Input from '../../atoms/input';
import Gap from './../../atoms/Gap';
import Button from '../../atoms/Button';
import Axios from 'axios';

const App = () => {
    const [NamaLengkap, setNamaLengkap] = useState('');
    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [Address, setAddress] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const handleSubmit = () => {
        const data = {
            NamaLengkap: NamaLengkap,
            Username: Username,
            email: email,
            Address: Address,
            phoneNumber: phoneNumber,

            avatar: `https://ui-avatars.com/api/?name=${NamaLengkap}`,
        };
        Axios.post('http://10.0.2.2:3005/users', data);

        const onClick = () => {
            console.log(
                `Name Lengkap: ${NamaLengkap}\nUsername: ${Username}\nEmail: ${email}\nAddress: ${Address}\nPhone Number: ${phoneNumber}`,
            );
        };
    };

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.Regis}>Registration</Text>
                <Gap height={40} />
                <Text style={styles.labelInput}>Name</Text>
                <Input
                    value={NamaLengkap}
                    placeholder="Masukkan nama lengkap anda"
                    onChangeText={e => setNamaLengkap(e)}
                />
                <Text style={styles.labelInput}>Username</Text>
                <Input
                    value={Username}
                    placeholder="Masukkan Username anda"
                    onChangeText={e => setUsername(e)}
                />
                <Text style={styles.labelInput}>Email</Text>
                <Input
                    value={email}
                    placeholder="Masukkan alamat email anda"
                    onChangeText={e => setEmail(e)}
                />
                <Text style={styles.labelInput}>Addres</Text>
                <Input
                    value={address}
                    placeholder="Masukkan Address anda"
                    onChangeText={e => setAddress(e)}
                />
                <Text style={styles.labelInput}>Phone Number</Text>
                <Input
                    value={phoneNumber}
                    placeholder="Masukkan Phone Number anda"
                    onChangeText={e => setphoneNumber(e)}
                />
                <Gap height={20} />
                <Button label="Register" onSbumit={() => handleSubmit()} />
            </ScrollView>
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24,
        marginVertical: 24,
    },
    Regis: {
        fontSize: 36,
        fontWeight: '700',
    },
    labelInput: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});
