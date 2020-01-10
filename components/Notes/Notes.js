import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';
import { Link } from "react-router-native";
import Navbar from '../Navbar/Navbar.js'

const styles = StyleSheet.create({
    container: {
      paddingTop:50,
      paddingLeft:20,
      paddingRight:20,
      flex: 1,
    },
    row: {
      padding: 15,
      marginBottom: 5,
      backgroundColor: 'skyblue',
    },
  })

const Notes = (props,styles) => {
    return (
    <View style={{flex:1,paddingTop:50,paddingLeft:25}}>
            <FlatList
            data={props.notes}
            renderItem={({item}) =>
            <Link to={`${item.id}`}><Text style={{padding:20,backgroundColor: 'skyblue',margin:5,marginRight:30}}>{item.header}</Text></Link>
            }
            />
            <Navbar add={props.addNote}/>
    </View>
    );
}

export default Notes;