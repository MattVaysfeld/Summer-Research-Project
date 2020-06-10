import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Test from './Test'
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentBackgroundColor:'white'
    }
  }

  render(){
    return(
        <Test></Test>



    )

  }

}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white",
  }


})