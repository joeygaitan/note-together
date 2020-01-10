//libaries
import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';
import { NativeRouter, Route, Link } from "react-router-native";

//components
import Notes from './components/Notes/Notes';
import Note from './components/Note/Note.js';
import Navbar from './components/Navbar/Navbar';
import Add from './components/NewNote/Add';

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
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs`,{
      method:'POST',
      headers:{ Accept: 'application/json',
      'Content-Type': 'application/json'},
      body: JSON.stringify(note)
    })
    .then((response) => {
      return response.json()})
    .then((responseJSON) => {
        this.getNotes()
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  updateNote = async (id,note) => {
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs/${id}`,{
    method: 'POST', headers: {
       Accept: 'application/json',
      'Content-Type': 'application/json'
    },body: JSON.stringify(note)})
    .then((response) => response.json())
    .then((responseJson)=>{
      this.getNotes
    })
    .catch((error)=>{
      console.error(error);
    })
  }

  deletePost= async (id) => {
    return fetch(`https://polar-dawn-63323.herokuapp.com/blogs/${id}`,{
      method:'DELETE',
      headers:{
       Accept: 'application/json',
      'Content-Type': 'application/json'
      }
    })
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


