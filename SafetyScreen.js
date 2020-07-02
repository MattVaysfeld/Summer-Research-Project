import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import { List, Appbar, Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import {Container} from "native-base";

export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            currentPresses: 0,
            currentBackgroundColor:"white"
        }
    }

    render(){
        return(
            <Container style={styles.container}>
                <ScrollView>

                <Appbar.Header>
                    <Appbar.Content title="Safety" />
                </Appbar.Header>

                    <Title style={styles.TitleText}> Location: {this.props.currentLocation}</Title>
                <Card>
                    <Card.Title title="Temperature: Good"/>
                    <Card.Content>
                        <Paragraph>The Temperature is Good since the readings on the graph show that the temperature is ideal for minimal corona infections</Paragraph>
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
                        <Paragraph>The Noise is Poor since the readings on the graph show that the pressure is too high for minimal corona infections</Paragraph>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Title title="Humidity: Fair" />
                    <Card.Content>
                        <Paragraph>The Humidity is Fair since the readings on the graph show that the temperature is alright for minimal corona infections</Paragraph>
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




})