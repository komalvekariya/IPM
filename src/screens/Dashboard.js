//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import * as data from '../demodata.json'
import { BoxShadow } from 'react-native-shadow'

// create a component
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 'All',
            ModalVisible: false
        }
    }
    onFilterClick(status) {
        this.setState({ status: status })
    }
    render() {
        const shadowOpt = {
            width: 160,
            height: 170,
            color: "#000",
            border: 2,
            radius: 3,
            opacity: 0.2,
            x: 0,
            y: 3,
            style: { marginVertical: 5 }
        }
        return (

            <View style={styles.container}>
                {/* Modal start */}
                <Modal
                    visible={this.state.ModalVisible}
                    transparent={true}
                >
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 2, }}>
                            <TouchableOpacity
                                style={{ flex: 1, backgroundColor: '#DDDDDD99' }}
                                onPress={() => this.setState({ModalVisible: !this.state.ModalVisible}) }
                            ></TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', flexDirection: 'column' }}>
                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, marginHorizontal: 10, fontWeight: '900' }}>All</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, marginHorizontal: 10, fontWeight: '900' }}>Pending</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 25, marginHorizontal: 10, fontWeight: '900' }}>Selected</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/*   Modal End  */}
                {/* <BoxShadow setting={shadowOpt}> */}
                <TouchableOpacity style={styles.TouchableOpacityStyle} >
                    <Text style={{ fontSize: 30, fontWeight: '900' }}>+</Text>
                </TouchableOpacity>
                {/* </BoxShadow> */}
                <View style={{ flex: .1, flexDirection: 'row'/* , backgroundColor: 'red' */, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ flex: 1.5, fontSize: 30, marginHorizontal: 20, fontWeight: 'bold' }}>Welcome</Text>
                    <Text style={{ flex: 1, fontSize: 30, marginHorizontal: 10, fontWeight: 'bold' }}>username</Text>
                </View>
                <View style={{ flex: .07, flexDirection: 'row', alignItems: 'center', backgroundColor: 'gray', justifyContent: 'space-around' }}>
                    <Text style={{ flex: 1, fontSize: 25, marginHorizontal: 20, fontWeight: '900' }}>Name</Text>
                    <TouchableOpacity
                        style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
                        onPress={() => this.setState({ModalVisible: true}) }

                    >
                        <Text style={{ fontSize: 25, marginHorizontal: 10, fontWeight: '900' }}>Status</Text>
                        <Text style={{ fontSize: 20, marginHorizontal: 5, fontWeight: '500' }}>{this.state.status}</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

                    <FlatList
                        data={data.users}
                        // showsVerticalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', alignItems: 'center', borderBottomWidth: 3, borderBottomColor: '#333', marginVertical: 5, borderWidth: 1, padding: 5, marginHorizontal: 5 }}>

                                    <Text style={{ flex: 1.5, fontSize: 20, marginHorizontal: 20, fontWeight: 'bold', paddingVertical: 5 }}>{item.name}</Text>
                                    <Text style={item.status == 'Pending'
                                        ?
                                        [styles.StatusColor, styles.Pending]
                                        :
                                        item.status == 'Selected'
                                            ?
                                            [styles.StatusColor, styles.Selected]
                                            :
                                            [styles.StatusColor, styles.Rejected]
                                    }>{item.status}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                        keyExtractor={item => item.status}
                    />
                </View>

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
        backgroundColor: '#FFF',

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
        color: '#3298FF'

    },
    Selected: {
        color: '#11c34c'
    },
    Rejected: {
        color: '#CE2C18'
    }
});

//make this component available to the app
export default Dashboard;
