
import React, { Component } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Login from './src/screens/login'
=======
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'
>>>>>>> 9ca9af6af41d4951d61c3e46e8c241cd0fc82a90
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },

});
