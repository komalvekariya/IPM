
import React, { Component } from 'react';
import {  StyleSheet, Text, View, ScrollView } from 'react-native';
import Login from './src/screens/Login'
import Dashboard from './src/screens/Dashboard'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
        <Dashboard />
        <Login /></ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
  },

});
