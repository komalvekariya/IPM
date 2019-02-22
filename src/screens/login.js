//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Dimensions,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
// create a component
const { width, height } = Dimensions.get('window');
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
                        <View style={{ backgroundColor: 'white', width: '97%', height: '90%', justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: 40, fontWeight: "bold", color: '#6536FF', backgroundColor: 'transparent', shadowOffset: { width: 5, height: 5 }, shadowColor: 'grey', shadowOpacity: 0.3, }}>
                                IPM
                            </Text>
                        </View>
                    </LinearGradient>
                    <View style={{ flex: 1, justifyContent: "space-evenly", alignItems: 'center', width: '90%' }} >
                        <TextInput style={styles.textinput} placeholder='USERNAME' />
                        <TextInput style={styles.textinput} placeholder='PASSWORD' />
                    </View>
                    <View style={{ flex: 1,alignItems:'center',width:width}}>
                       <TouchableOpacity style={{backgroundColor:'#17C8FF', width:'60%',borderRadius:10,alignItems:"center",shadowOffset:{width:6,height:6},shadowColor:'grey',shadowOpacity:0.5}}>
                           <Text style={{fontSize:30,padding:6,color:'#FFFF'}}>Login</Text>
                       </TouchableOpacity>
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
        width: width,
        height: height,
        justifyContent:'center',
        
    },
    textinput: {
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.8, shadowColor: 'grey',
        borderBottomColor: '#4C64FF',
        borderBottomWidth: 1, height: '10%',
        width: '90%',
        fontSize: 20,
    }

});

//make this component available to the app
export default Login;
