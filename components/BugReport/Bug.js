import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';
import Reportbug from './reportbug.svg';

class Bug extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <View>
                <Reportbug/>
                <Text>Hello</Text>
            </View>
        );
    }
}

export default Bug;