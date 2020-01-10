import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem,TextInput } from 'react-native';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                header:"",
                desc:""
         };   
        }
    onDone = ()=>{
        this.props.add({header:this.state.header,desc:this.state.desc})
        this.props.history.push('/')
    }
    render() {
        return (
            <View>
            <TextInput
            style={{height: 40,paddingTop:50}}
            placeholder={"title"}
            onChangeText={(text) => this.setState({header: text})}
            value={this.state.header}
            />
            <TextInput
            style={{height: 40,paddingTop:100,paddingLeft:20}}
            placeholder={"Descipition"}
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.desc}
            />
            <Button title={"Done"}onPress={this.onDone}/>
            </View>
        );
    }
}

export default Add;