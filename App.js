import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, FlatList, ScrollView, ActivityIndicator,ListItem } from 'react-native';

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

  componentDidMount(){
    this.getPosts()
  }

  getPosts = async () =>{
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

  render(){ 
    console.log(this.state)
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    } else{
      return (
        <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => 
          <Text>{item.desc}, {item.header}</Text>
        }
          keyExtractor={({id}, index) => id}
        />
      </View>
 
      )
    }
  }
}


