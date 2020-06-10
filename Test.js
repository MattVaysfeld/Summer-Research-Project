import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';


export default class Test extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentBackgroundColor:'white'
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>YES</Text>






            </View>



        )

    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"blue",
        alignItems: 'center',
        justifyContent:'center',
    }


})
