import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';
import { Link } from "react-router-native";
import Navbar from '../Navbar/Navbar.js'

const Notes = (props) => {
    return (
    <View style={{flex: 1, paddingTop:50, paddingLeft:20,paddingRight:20}}>
            <FlatList
            data={props.notes}
            renderItem={({item}) =>
            <Link to={`${item.id}`}><Text>{item.header}</Text></Link>
            }
            />
            <Navbar add={props.addNote}/>
    </View>
    );
}

export default Notes;