//import liraries
import React, { Component } from 'react';

import { View, Text, StyleSheet, TextInput, Button ,Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
// create a component
const { width, height } = Dimensions.get('window');
class Login extends Component {

    render() {
        return (
           
                <View style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <LinearGradient
                            colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                            start={{ x: 0.0, y: 1.0 }} end={{ x: 1.0, y: 1.0 }}
                            style={{ justifyContent: 'center', alignItems: 'center', width: '81%', flex: 0.4 }}
                        >
                            <View style={{ backgroundColor: 'white', width: '97%', justifyContent: 'center', alignItems: 'center', flex: .9 }}>
                                <Text style={styles.headerText}>
                                    IPM
                            </Text>
                            </View>s
                        </LinearGradient>
                    </View>

                    <View style={{ flex: .8 }} >
                        <View style={{ flex: 1, alignItems: 'center', width: width }}>
                            <TextInput style={styles.textinput} placeholder='USERNAME' />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', width: width }}>
                            <TextInput style={styles.textinput} placeholder='PASSWORD' />
                        </View>
                    </View>

                    <View style={{ flex: 1, paddingTop: 20, alignItems: 'center', width: width }}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontSize: 30, padding: 6, color: '#FFFF' }}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontSize: 30, padding: 6, color: '#FFFF' }}>Login</Text>
                        </TouchableOpacity>
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

        width:width,
        height:height

    },
    headerText: {
        fontSize: 40,
        fontWeight: "bold",
        color: '#6536FF',
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'grey',
        shadowOpacity: 0.3,
    },
    textinput: {
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8, shadowColor: 'grey',
        borderBottomColor: '#4C64FF',

        borderBottomWidth: 1,
        fontSize: 20,
        width: '90%',
    },
    button: {
        backgroundColor: '#17C8FF',
        width: '60%', borderRadius: 10,
        alignItems: "center",
        shadowOffset: { width: 6, height: 6 },
        shadowColor: 'grey',
        shadowOpacity: 1.0
    }

});

//make this component available to the app
export default Login;
