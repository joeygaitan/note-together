import React, { Component } from 'react';
import { Button,Text,View,TextInput,StyleSheet } from 'react-native';
import {DoubleClick} from 'react-native-double-tap';

const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    header:{

    },
    description: {
        
    },
    submitButton:{

    }
})

class Note extends Component{
    constructor(props){
        super(props);

        this.state = {
                    header:"",
                    desc:""
        }
    }

    

    componentDidMount(){
        this.getNote()
    }

    getNote = () => {
        const id = this.props.match.params.id;
        return fetch(`https://polar-dawn-63323.herokuapp.com/blogs/${id}`)
        .then((response) => response.json())
        .then((responseData)=>{
            const note = responseData;
            this.setState({header:note.header,desc:note.desc})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    delete = () => {
        this.props.delete(this.props.match.params.id)
        this.props.history.push('/')
    }

    onDone = () => {
        const id = this.props.match.params.id;
            this.props.update(id,{header:this.state.header,desc:this.state.desc})
            this.props.history.push('/')
    }

    render(){
        return (
        <View style={styles}> 
            <TextInput
            style={{height: 40,paddingTop:100,paddingLeft:20,color:'black',height:50,alignContent:'center'}}
            placeholder={this.state.header}
            onChangeText={(text) => this.setState({header: text})}
            value={this.state.text}
            />
            <TextInput
            style={{height: 40,paddingTop:100,paddingLeft:20,color:'black',height:50,alignContent:'center'}}
            placeholder={this.state.desc}
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.text}
            />
            <Button style={{height: 40,paddingTop:30,paddingLeft:20}}title={"Done"}onPress={this.onDone}/>
            <Button style={{height: 40,paddingTop:30,paddingLeft:20}}title={"Delete"}onPress={this.onDone}/>
        </View>
            );
    }
}

export default Note;