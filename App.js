//libaries
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

//components
import Notes from './components/Notes/Notes';
import Note from './components/Note/Note.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }

  componentDidMount = () =>{
    this.getNotes()
  }

  getNotes = async () =>{
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("here",responseJson)
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        })
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  addNote = async (note) => {
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs`,note)
    .then((response) => response.json())
      .then((responseJson) => {
        this.getNotes()
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  updateNote = async (id,note) => {
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs${id}`, note)
    .then((response) => response.json())
    .then((responseJson)=>{
      this.getNotes
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  deletePost= async (id) => {
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs${id}`)
    .then((response) => response.json())
    .then((responseJson)=>{
      this.getNotes
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  render(){ 
    return(
      <NativeRouter>
        <Route exact path='/' render={(props) => <Notes {...props} notes={this.state.dataSource} delete={this.delete}/>}/>
        <Route path='/addNote'render={(props)=> <Add {...props}  add={this.addNote}/>}/>
        <Route path='/:id' render={(props)=> <Note {...props} delete={this.delete} update={this.updateNote}/>}/>
      </NativeRouter>
    );
  }
}


