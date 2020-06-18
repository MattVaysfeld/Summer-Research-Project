import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';


export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{...styles.container}}>
                <Text>M. Bison</Text>
            </View>



        )

    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems: 'center',
        justifyContent:'center',
    },
    pickleRick: {
        height: "50%",
        width: "50%",
        resizeMode: "contain",
    }


})