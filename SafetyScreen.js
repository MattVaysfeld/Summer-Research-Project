import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';


export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentPresses: 0,
            currentBackgroundColor:"white"
        }
    }
    onButtonPress = () => {
        this.setState({
            currentPresses: this.state.currentPresses + 1
        })
    }
    onBackgroundButtonPress = () => {
        if (this.state.currentBackgroundColor === "white") {
            this.setState({
                currentBackgroundColor: "red"
            })
        } else {
            this.setState({
                currentBackgroundColor: "white"
            })
        }
    }

    render(){
        return(
            <View style={{...styles.container, backgroundColor: this.state.currentBackgroundColor}}>
                <Text> Location: {this.props.currentLocation}</Text>

                <Button
                    title={"Change Background Color"}
                    onPress={this.onBackgroundButtonPress}
                />
                <Text>{this.state.currentPresses} Presses</Text>
                <Button
                    title={"PRESS"}
                    onPress={this.onButtonPress}
                />






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