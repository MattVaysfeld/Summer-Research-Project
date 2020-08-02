import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView, Image, Button} from 'react-native';
import {Icon, Container, Content, Header, Left, Right, Body, ListItem, Accordion} from 'native-base';
import { List, Appbar } from 'react-native-paper';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";






export default class DataScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const data = this.props.data
        const currentData = data[this.props.currentLocation]


        return (
            <Container>
                <Appbar.Header>
                    <Appbar.Content title="Data" />
                </Appbar.Header>
        <ScrollView>
            <List.AccordionGroup>
                <List.Accordion title="Temperature" id="1">
                    <List.Item title={"Temp Graph"}/>
                    <LineChart
                        data={{
                            labels: ["12:00", "12:30", "1:00", "1:30", "2:00", "2:30"],
                            datasets: [
                                {
                                    data: [
                                        currentData["Temperature"]["12:00"],
                                        currentData["Temperature"]["12:30"],
                                        currentData["Temperature"]["1:00"],
                                        currentData["Temperature"]["1:30"],
                                        currentData["Temperature"]["2:00"],
                                        currentData["Temperature"]["2:30"]
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix="°F"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundGradientFrom: "white",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: "white",
                            backgroundGradientToOpacity: 0.5,
                            color: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
                            strokeWidth: 2, // optional, default 3
                            barPercentage: 0.5,
                            useShadowColorFromDataset: false // optional
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />

                </List.Accordion>
                <List.Accordion title="Pressure" id="2">
                    <List.Item title="Pressure Graph" />
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        currentData["Pressure"]["12:00"],
                                        currentData["Pressure"]["12:30"],
                                        currentData["Pressure"]["1:00"],
                                        currentData["Pressure"]["1:30"],
                                        currentData["Pressure"]["2:00"],
                                        currentData["Pressure"]["2:30"]
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix="kPa"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundGradientFrom: "white",
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: "white",
                            backgroundGradientToOpacity: 0.5,
                            color: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
                            strokeWidth: 2, // optional, default 3
                            barPercentage: 0.5,
                            useShadowColorFromDataset: false // optional
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </List.Accordion>
                <View>
                    <List.Accordion title="Noise Level" id="3">
                        <List.Item title="Noise Graph" />
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix="dB"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "white",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </List.Accordion>
                </View>
                <View>
                    <List.Accordion title="Humidity" id="4">
                        <List.Item title="Humidity Graph" />
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix="%"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "white",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </List.Accordion>
                </View>
                <View>
                    <List.Accordion title="Light Level" id="5">
                        <List.Item title="Light Graph" />
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix="lux"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "white",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(0, 0,0, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </List.Accordion>
                </View>
                <View>
                    <List.Accordion title="Air Quality" id="6">
                        <List.Item title="Air Quality Graph" />
                        <LineChart
                            data={{
                                labels: ["January", "February", "March", "April", "May", "June"],
                                datasets: [
                                    {
                                        data: [
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100,
                                            Math.random() * 100
                                        ]
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix="ppm"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundGradientFrom: "white",
                                backgroundGradientFromOpacity: 0,
                                backgroundGradientTo: "white",
                                backgroundGradientToOpacity: 0.5,
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                strokeWidth: 2, // optional, default 3
                                barPercentage: 0.5,
                                useShadowColorFromDataset: false // optional
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
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