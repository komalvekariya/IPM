//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'red', fontSize:100, paddingTop: 50 }}>Login</Text>
                </View>
                <View style={{ alignItems: 'center',justifyContent:'center',flex:1}}>
                    <TextInput style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '80%', fontSize:20}} placeholder='UserName' />
                    <TextInput style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '80%', fontSize:20}} placeholder='Password' />
                </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F0'
    },
});

//make this component available to the app
export default Login;
