//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

// create a component
class Dashboard extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View style={{ flex: .5, flexDirection: 'row', backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ flex: 1.5, fontSize: 30, marginHorizontal: 20 }}>Welcome</Text>
                    <Text style={{ flex: 1, fontSize: 25, marginHorizontal: 10 }}>username</Text>
                </View>
                <View style={{ flex: .2, flexDirection: 'row', alignItems: 'center', backgroundColor: 'gray' }}>
                    <Text style={{ flex: 1.5, fontSize: 30, marginHorizontal: 20 }}>Name</Text>
                    <Text style={{ flex: 1, fontSize: 25, marginHorizontal: 10 }}>Status</Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor: 'black' }}>
                        {/* <FlatList
                            // data={this.state.dataSource}
                            renderItem={() =>
                                <View>
                                    <Text style={{ flex: 1.5, fontSize: 30, marginHorizontal: 20 }}>Name</Text>
                                    <Text style={{ flex: 1, fontSize: 25, marginHorizontal: 10 }}>Status</Text>
                                </View>
                            }
                            keyExtractor={({ id }) => id}
                        /> */}
                        <Text style={{ flex: 1.5, fontSize: 30, marginHorizontal: 20 }}>Name</Text>
                        <Text style={{ flex: 1, fontSize: 25, marginHorizontal: 10 }}>Status</Text>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },
    headerText: {
        fontSize: 30,
        flex: 1
    }
});

//make this component available to the app
export default Dashboard;
