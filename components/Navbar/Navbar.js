import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';
import { Link } from "react-router-native";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <View>
                 <Link to={`/addNote`}><Text>{"Add Note"}</Text></Link>
            </View>
        );
    }
}

export default Navbar;



