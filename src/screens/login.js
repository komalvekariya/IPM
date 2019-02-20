//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import LinearTextGradient  from 'react-native-text-gradient';
// create a component
class Login extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, paddingTop: 60, justifyContent: 'center', alignItems: 'center' }} elevation={5}>
                    <LinearGradient
                        colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                        start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                        style={{ height: '10%', width: '90%', justifyContent: 'center', alignItems: 'center', }}
                    >
                        <View style={{backgroundColor: 'white', width: '97%', height: '90%', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 40, fontWeight: "bold", color: '#6536FF',backgroundColor: 'transparent' }}>Login</Text>
                        </View>
                    </LinearGradient>
                    <View style={{ elevation:4,flex: 1, justifyContent: "space-evenly", alignItems: 'center', width: '90%' }} >
                        <TextInput style={{ borderBottomColor: '#000000', borderBottomWidth: 1, width: '80%', fontSize: 20 }} placeholder='UserName' />
                        <TextInput style={{ borderBottomColor: '#000000', borderBottomWidth: 1, width: '80%', fontSize: 20 }} placeholder='Password' />
                    </View>
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        
    },

});

//make this component available to the app
export default Login;
