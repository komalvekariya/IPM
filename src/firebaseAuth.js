import firebase from 'react-native-firebase'
import {View, TouchableOpacity,Alert,Text } from 'react-native'
import React,{Component} from 'react'
export default class Login extends React.Component {

  state = { email: 'admin@admin.com', password: '123456', errorMessage: null }
  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => /* this.props.navigation.navigate('nextpagename') */ Alert.alert('success'))
      .catch(error => {this.setState({ errorMessage: error.message }),Alert.alert('hacking')})

  }

  render(){
    return(
      <View>
        <TouchableOpacity style={{backgroundColor:'red'}} onPress={()=>this.handleLogin()}><Text>heeeeeee</Text></TouchableOpacity>
      </View>
    )
  }
}
