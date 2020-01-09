import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';

const Notes = (props) => {
    return (
    <View style={{flex: 1, paddingTop:50, paddingLeft:20,paddingRight:20}}>
            <FlatList
            data={props.notes}
            renderItem={({item}) => 
            <Text>{item.desc}, {item.header}</Text>
            }
            keyExtractor={({id}, index) => id}
            />
    </View>
    );
}

export default Notes;