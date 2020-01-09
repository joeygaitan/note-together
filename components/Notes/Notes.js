import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';

export default Notes = () => {
    return (
    <View style={{flex: 1, paddingTop:50, paddingLeft:20,paddingRight:20}}>
            <FlatList
            data={this.props.dataSource}
            renderItem={({item}) => 
            <Text>{item.desc}, {item.header}</Text>
            }
            keyExtractor={({id}, index) => id}
            />
    </View>
    );
}
