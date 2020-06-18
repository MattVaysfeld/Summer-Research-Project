import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Test from './Test'
import NavigationBar from "./NavigationBar";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBackgroundColor:'white'
    }
  }

  render(){
    return(
        <NavigationBar>

        </NavigationBar>



    )

  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  }


})