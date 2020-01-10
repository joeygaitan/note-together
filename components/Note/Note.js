import React, { Component } from 'react';
import { Button,Text,View } from 'react-native';

class Note extends Component{
    constructor(){
        super(props);

        this.state = {
            note: {},
            open: false
        }
    }

    componentDidMount(){

    }

    getNote = () => {
        const id = this.props.match.params.id

        return fetch(`https://polar-dawn-63323.herokuapp.com/blogs${id}`)
        .then((response) => response.json())
        .then((responseData)=>{
            const note = responseData.data;
            this.setState({note, open: false})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    delete = () => {
        this.props.delete(this.props.match.params.id)
        this.props.history.push('/')
    }

    render(){
        return (
            <View>
                <Text>Title</Text>
                <Text>Body</Text>
            </View>
        );
    }
}

export default Note;