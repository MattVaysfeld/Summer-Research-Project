import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import { List, Appbar, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Container} from "native-base";

export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            temp: "",
            pressure: ""
        }
    }


    tempDecider = () => {
        const data = this.props.data;
        const currentData = data[this.props.currentLocation];
        const tempAvg = this.avgOfTempData();

        if (tempAvg > 80){
            if (this.state.temp !== "Good" ) {
                this.setState({
                    temp: "Good"
                })
            }
        }
        else if ( 80 > tempAvg && tempAvg > 70){
            if (this.state.temp !== "Fair" ){
                this.setState({
                temp: "Fair"
            })
            }
        }
        else if  (tempAvg <= 70){
            if (this.state.temp !== "Poor" ){
                this.setState({
                    temp: "Poor"
                })
            }

        }
    };

    pressureDecider = () => {
        const data = this.props.data;
        const currentData = data[this.props.currentLocation];
        const pressureAvg = this.avgOfPressureData();

        if (pressureAvg > 101){
            if (this.state.pressure !== "Good" ) {
                this.setState({
                    pressure: "Good"
                })
            }
        }
        else if ( 100 > pressureAvg && pressureAvg > 99){
            if (this.state.pressure !== "Fair" ){
                this.setState({
                    pressure: "Fair"
                })
            }
        }
        else if  (pressureAvg <= 99){
            if (this.state.pressure !== "Poor" ){
                this.setState({
                    pressure: "Poor"
                })
            }

        }
    };

    avgOfTempData = () =>{
        const data = this.props.data;
        const currentData = data[this.props.currentLocation];
        let sum = 0;
        let array = Object.values(currentData["Temperature"]);
        for(let i = 0; i < array.length; i++ ){
            sum += parseInt( array[i], 10 ); //don't forget to add the base
        }

        const tempAvg = sum / array.length;
        console.log(tempAvg)
        return tempAvg;
    }

    avgOfPressureData = () =>{
        const data = this.props.data;
        const currentData = data[this.props.currentLocation];
        let sum = 0;
        let array = Object.values(currentData["Pressure"]);
        for(let i = 0; i < array.length; i++ ){
            sum += parseInt( array[i], 10 ); //don't forget to add the base
        }

        const pressureAvg = sum / array.length;
        console.log(pressureAvg)
        return pressureAvg;
    }



    render(){

        const data = this.props.data;
        const currentData = data[this.props.currentLocation];

        console.log(currentData)
        console.log(this.props.currentLocation)
        console.log(this.state.temp)




        this.tempDecider();
        this.pressureDecider();



        return(
            <Container style={styles.container}>
                <ScrollView>

                <Appbar.Header>
                    <Appbar.Content title="Safety" />
                </Appbar.Header>

                    <Title style={styles.TitleText}> Location: {this.props.currentLocation}</Title>
                <Card>
                    <Card.Title title=  {"Temperature: " + this.state.temp} />
                    <Card.Content>
                        <Paragraph>The Temperature is {this.state.temp} since the readings on the graph show that the temperature is {this.state.temp} for minimal corona infections</Paragraph>
                </Card.Content>
                </Card>
                <Card>
                    <Card.Title title={"Pressure: " + this.state.pressure} />
                    <Card.Content>
                        <Paragraph>The Pressure is {this.state.pressure} since the readings on the graph show that the pressure is {this.state.pressure} for minimal corona infections</Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Noise: Poor" />
                    <Card.Content>
                        <Paragraph>The Noise Level is Poor since the readings on the graph show that there is a lot of noise in the area which means there are more people in the area</Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Humidity: Fair" />
                    <Card.Content>
                        <Paragraph>The Humidity is Fair since the readings on the graph show that the humidity is alright for minimal corona infections</Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Light Level: Fair" />
                    <Card.Content>
                        <Paragraph>The Light is Fair since the readings on the graph show that the Light level is alright for minimal corona infections</Paragraph>
                    </Card.Content>
                </Card>
                    <Card>
                        <Card.Title title="Air Quality: Poor" />
                        <Card.Content>
                            <Paragraph>The Air Quality is Poor since the readings on the graph show that there is too much pollution in the air, which is poor for minimal corona infections</Paragraph>
                        </Card.Content>
                    </Card>
                </ScrollView>
            </Container>













        )

    }

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
    },
    TitleText:{
        paddingTop:20,
        paddingBottom:20,
        fontSize:30,

    },




});