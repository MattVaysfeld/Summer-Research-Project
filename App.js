import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import NavigationBar from "./NavigationBar";
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCqr30ZuUuGkKnK9qXMYX4p0Yj6k5jsOV0",
    authDomain: "summer-research-project-2180b.firebaseapp.com",
    databaseURL: "https://summer-research-project-2180b.firebaseio.com",
    storageBucket: "gs://summer-research-project-2180b.appspot.com",
    };



const firebaseApp = firebase.initializeApp(firebaseConfig);


export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          currentLocation: "Howe",
          data : [],
      }

      const locationsDataRef = firebase.database().ref().child("Locations/")
      locationsDataRef.once('value').then((snapshot) => {
          const data =(snapshot.val())
          this.setState({
              data: data
          })
      }).catch((err) => {
          console.log(err)
      })
  }

  onLocationSelection = (loc) => {
    this.setState({
        currentLocation: loc,
    })
  }

  render(){
    return(
        <NavigationBar onLocationSelection={this.onLocationSelection} currentLocation={this.state.currentLocation} data={this.state.data}>

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