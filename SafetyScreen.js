import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import { List, Appbar, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Container} from "native-base";

export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            temp: ""
        }
    }


    tempDecider = () => {
        const data = this.props.data;
        const currentData = data[this.props.currentLocation];
        const avg = this.avgOfData();

        if (avg > 80){
            if (this.state.temp !== "Good" ) {
                this.setState({
                    temp: "Good"
                })
            }
        }
        else if ( 80 > avg && avg > 70){
            if (this.state.temp !== "Fair" ){
                this.setState({
                temp: "Fair"
            })
            }
        }
        else if  (avg <= 70){
            if (this.state.temp !== "Poor" ){
                this.setState({
                    temp: "Poor"
                })
            }

        }
    };

    avgOfData = () =>{
        const data = this.props.data;
        const currentData = data[this.props.currentLocation];
        let sum = 0;
        let array = Object.values(currentData["Temperature"]);
        for(let i = 0; i < array.length; i++ ){
            sum += parseInt( array[i], 10 ); //don't forget to add the base
        }

        const avg = sum / array.length;
        console.log(avg)
        return avg;
    }



    render(){

        const data = this.props.data;
        const currentData = data[this.props.currentLocation];

        console.log(currentData)
        console.log(this.props.currentLocation)
        console.log(this.state.temp)



        this.tempDecider();
        this.avgOfData();


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
                    <Card.Title title="Pressure: Good" />
                    <Card.Content>
                        <Paragraph>The Pressure is Good since the readings on the graph show that the pressure is ideal for minimal corona infections</Paragraph>
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