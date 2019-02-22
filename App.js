
import React, { Component } from 'react';
import {  StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'
=======

import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'

>>>>>>> master
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
    flex:1,
    
  },

});
