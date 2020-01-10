import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem, ImageBackground } from 'react-native';
import { Link } from "react-router-native";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <View style={{paddingBottom:40}}>
                 <Link to={`/addNote`}><Text style={{backgroundColor:'lightblue',color:"black",paddingRight:50,marginRight:50}}>{"Add Note"}</Text></Link>
            </View>
        );
    }
}

export default Navbar;



