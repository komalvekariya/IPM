//import liraries
import React, { Component } from 'react';
import { View, Text,TextInput, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity,Button } from 'react-native';
import { validate } from '../helper/validate';
import { Field, reduxForm } from 'redux-form';
import {createUser, getUser} from '../helper/FirebaseUtils'
import Login from '../firebaseAuth'
// create a component
class User extends Component {

  async    componentDidMount(){
      let test= await  getUser()
      alert(JSON.stringify(test))
    }
    render() {

        return (
            <View style={styles.container}>
                <Field
                    name="userFname"
                    component={Button}
                    title="helo"
                    style={{/* justifyContent:'flex-end', */alignItems:'flex-end'}}
                />
                <Login></Login>
            </View>

        );
    }
}

const Form = reduxForm({
    form: 'form',
    validate,
})(User);
export default Form;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },
    headerText: {
        fontSize: 30,
        flex: 1
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        zIndex: 2,
        backgroundColor: '#3298FF',
        borderRadius: 50,
    },
    StatusColor: {
        flex: 1, fontSize: 20, marginHorizontal: 10, paddingVertical: 5,
    },
    Pending: {
        color: '#FFFF00'
    },
    Selected: {
        color: '#11c34c'
    },
    Rejected: {
        color: '#CE2C18'
    }
});

//make this component available to the app
//export default User;
