import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';


export default class Test extends Component{

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
                <Text>YES</Text>
                <Image
                    style={styles.pickleRick}
                    source={{
                        uri: "https://pmcdeadline2.files.wordpress.com/2019/10/shutterstock_editorial_10434333bm.jpg?crop=0px%2C0px%2C2903px%2C1627px&resize=681%2C383"
                    }}
                />
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
