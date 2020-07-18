import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, Image, Button} from 'react-native';
import {Icon, Container, Content, Header, Left, Right, Body, ListItem, Accordion} from 'native-base';
import { List, Appbar } from 'react-native-paper';
import * as firebase from 'firebase';


export default class SafetyScreen extends Component {

    constructor(props) {
        super(props);

    }



    render() {
        return (
            <Container>
                <Appbar.Header>
                    <Appbar.Content title="Current" />
                </Appbar.Header>
                <ScrollView>
                    <List.AccordionGroup>
                        <List.Accordion title="Temperature" id="1">
                            <List.Item title={"Temp"}/>

                        </List.Accordion>
                        <List.Accordion title="Pressure" id="2">
                            <List.Item title="Pressure" />
                        </List.Accordion>
                        <View>
                            <List.Accordion title="Noise Level" id="3">
                                <List.Item title="Noise" />
                            </List.Accordion>
                        </View>
                        <View>
                            <List.Accordion title="Humidity" id="4">
                                <List.Item title="Humidity" />
                            </List.Accordion>
                        </View>
                        <View>
                            <List.Accordion title="Light Level" id="5">
                                <List.Item title="Light" />
                            </List.Accordion>
                        </View>
                        <View>
                            <List.Accordion title="Air Quality" id="6">
                                <List.Item title="Air Quality" />
                            </List.Accordion>
                        </View>
                    </List.AccordionGroup>
                </ScrollView>

            </Container>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    listText: {
        fontSize: 26,
    },
    ProfileText:{
        fontSize: 25,
        fontFamily:"Geeza Pro",
        fontWeight:'bold',
    },


})