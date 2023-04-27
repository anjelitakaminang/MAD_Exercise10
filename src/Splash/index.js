import { Stylesheet, View, Text } from 'react-native'
import React from 'react'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 3000);
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Money Tracker</Text>
        </View>
    );
};

export default SplashScreen;

const styles = Stylesheet.create({
    container: {
        backgroundColor: '#02EF8E',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 32,
        fontFamily: 'Poppins-Medium',
        color: 'black',
    },
});