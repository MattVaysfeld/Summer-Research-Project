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


export default class PIScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        const data = this.props.data
        const currentData = data["Test"]


        return (
            <Container>
                <Appbar.Header>
                    <Appbar.Content title="PI Data" />
                </Appbar.Header>
                <ScrollView>
                    <List.AccordionGroup>
                        <List.Accordion title="Temperature" id="1">
                            <List.Item title={"Temp Graph"}/>
                            <LineChart
                                data={{
                                    labels: [currentData["1"]["Time"].slice(11,20), , , , , , , , ,  currentData["31"]["Time"].slice(11,20), , , , , , , , , currentData["61"]["Time"].slice(11,20), , , , , , , , ,  currentData["91"]["Time"].slice(11,20), , , , ],
                                    datasets: [
                                        {
                                            data: [
                                                currentData["1"]["Temperature"],
                                                currentData["4"]["Temperature"],
                                                currentData["7"]["Temperature"],
                                                currentData["10"]["Temperature"],
                                                currentData["13"]["Temperature"],
                                                currentData["16"]["Temperature"],
                                                currentData["19"]["Temperature"],
                                                currentData["22"]["Temperature"],
                                                currentData["25"]["Temperature"],
                                                currentData["28"]["Temperature"],
                                                currentData["31"]["Temperature"],
                                                currentData["34"]["Temperature"],
                                                currentData["37"]["Temperature"],
                                                currentData["40"]["Temperature"],
                                                currentData["43"]["Temperature"],
                                                currentData["46"]["Temperature"],
                                                currentData["49"]["Temperature"],
                                                currentData["52"]["Temperature"],
                                                currentData["55"]["Temperature"],
                                                currentData["58"]["Temperature"],
                                                currentData["61"]["Temperature"],
                                                currentData["64"]["Temperature"],
                                                currentData["67"]["Temperature"],
                                                currentData["70"]["Temperature"],
                                                currentData["73"]["Temperature"],
                                                currentData["76"]["Temperature"],
                                                currentData["79"]["Temperature"],
                                                currentData["82"]["Temperature"],
                                                currentData["85"]["Temperature"],
                                                currentData["88"]["Temperature"],
                                                currentData["91"]["Temperature"],
                                                currentData["94"]["Temperature"],
                                                currentData["97"]["Temperature"]
                                            ]
                                        }
                                    ]
                                }}
                                width={Dimensions.get("window").width} // from react-native
                                height={220}
                                yAxisLabel=""
                                yAxisSuffix="F"
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
                                    labels: [currentData["1"]["Time"].slice(11,20), , , , , , , , ,  currentData["31"]["Time"].slice(11,20), , , , , , , , , currentData["61"]["Time"].slice(11,20), , , , , , , , ,  currentData["91"]["Time"].slice(11,20), , , , ],
                                    datasets: [
                                        {
                                            data: [
                                                currentData["1"]["Pressure"] /10,
                                                currentData["4"]["Pressure"] /10,
                                                currentData["7"]["Pressure"]/10,
                                                currentData["10"]["Pressure"]/10,
                                                currentData["13"]["Pressure"]/10,
                                                currentData["16"]["Pressure"]/10,
                                                currentData["19"]["Pressure"]/10,
                                                currentData["22"]["Pressure"]/10,
                                                currentData["25"]["Pressure"]/10,
                                                currentData["28"]["Pressure"]/10,
                                                currentData["31"]["Pressure"]/10,
                                                currentData["34"]["Pressure"]/10,
                                                currentData["37"]["Pressure"]/10,
                                                currentData["40"]["Pressure"]/10,
                                                currentData["43"]["Pressure"]/10,
                                                currentData["46"]["Pressure"]/10,
                                                currentData["49"]["Pressure"]/10,
                                                currentData["52"]["Pressure"]/10,
                                                currentData["55"]["Pressure"]/10,
                                                currentData["58"]["Pressure"]/10,
                                                currentData["61"]["Pressure"]/10,
                                                currentData["64"]["Pressure"]/10,
                                                currentData["67"]["Pressure"]/10,
                                                currentData["70"]["Pressure"]/10,
                                                currentData["73"]["Pressure"]/10,
                                                currentData["76"]["Pressure"]/10,
                                                currentData["79"]["Pressure"]/10,
                                                currentData["82"]["Pressure"]/10,
                                                currentData["85"]["Pressure"]/10,
                                                currentData["88"]["Pressure"]/10,
                                                currentData["91"]["Pressure"]/10,
                                                currentData["94"]["Pressure"]/10,
                                                currentData["97"]["Pressure"]/10
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
                                        labels: [currentData["1"]["Time"].slice(11,20), , , , , , , , ,  currentData["31"]["Time"].slice(11,20), , , , , , , , , currentData["61"]["Time"].slice(11,20), , , , , , , , ,  currentData["91"]["Time"].slice(11,20), , , , ],
                                        datasets: [
                                            {
                                                data: [
                                                    currentData["1"]["Noise"],
                                                    currentData["4"]["Noise"],
                                                    currentData["7"]["Noise"],
                                                    currentData["10"]["Noise"],
                                                    currentData["13"]["Noise"],
                                                    currentData["16"]["Noise"],
                                                    currentData["19"]["Noise"],
                                                    currentData["22"]["Noise"],
                                                    currentData["25"]["Noise"],
                                                    currentData["28"]["Noise"],
                                                    currentData["31"]["Noise"],
                                                    currentData["34"]["Noise"],
                                                    currentData["37"]["Noise"],
                                                    currentData["40"]["Noise"],
                                                    currentData["43"]["Noise"],
                                                    currentData["46"]["Noise"],
                                                    currentData["49"]["Noise"],
                                                    currentData["52"]["Noise"],
                                                    currentData["55"]["Noise"],
                                                    currentData["58"]["Noise"],
                                                    currentData["61"]["Noise"],
                                                    currentData["64"]["Noise"],
                                                    currentData["67"]["Noise"],
                                                    currentData["70"]["Noise"],
                                                    currentData["73"]["Noise"],
                                                    currentData["76"]["Noise"],
                                                    currentData["79"]["Noise"],
                                                    currentData["82"]["Noise"],
                                                    currentData["85"]["Noise"],
                                                    currentData["88"]["Noise"],
                                                    currentData["91"]["Noise"],
                                                    currentData["94"]["Noise"],
                                                    currentData["97"]["Noise"]
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
                                        labels: [currentData["1"]["Time"].slice(11,20), , , , , , , , ,  currentData["31"]["Time"].slice(11,20), , , , , , , , , currentData["61"]["Time"].slice(11,20), , , , , , , , ,  currentData["91"]["Time"].slice(11,20), , , , ],
                                        datasets: [
                                            {
                                                data: [
                                                    currentData["1"]["Humidity"],
                                                    currentData["4"]["Humidity"],
                                                    currentData["7"]["Humidity"],
                                                    currentData["10"]["Humidity"],
                                                    currentData["13"]["Humidity"],
                                                    currentData["16"]["Humidity"],
                                                    currentData["19"]["Humidity"],
                                                    currentData["22"]["Humidity"],
                                                    currentData["25"]["Humidity"],
                                                    currentData["28"]["Humidity"],
                                                    currentData["31"]["Humidity"],
                                                    currentData["34"]["Humidity"],
                                                    currentData["37"]["Humidity"],
                                                    currentData["40"]["Humidity"],
                                                    currentData["43"]["Humidity"],
                                                    currentData["46"]["Humidity"],
                                                    currentData["49"]["Humidity"],
                                                    currentData["52"]["Humidity"],
                                                    currentData["55"]["Humidity"],
                                                    currentData["58"]["Humidity"],
                                                    currentData["61"]["Humidity"],
                                                    currentData["64"]["Humidity"],
                                                    currentData["67"]["Humidity"],
                                                    currentData["70"]["Humidity"],
                                                    currentData["73"]["Humidity"],
                                                    currentData["76"]["Humidity"],
                                                    currentData["79"]["Humidity"],
                                                    currentData["82"]["Humidity"],
                                                    currentData["85"]["Humidity"],
                                                    currentData["88"]["Humidity"],
                                                    currentData["91"]["Humidity"],
                                                    currentData["94"]["Humidity"],
                                                    currentData["97"]["Humidity"]
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
                                        labels: [currentData["1"]["Time"].slice(11,20), , , , , , , , ,  currentData["31"]["Time"].slice(11,20), , , , , , , , , currentData["61"]["Time"].slice(11,20), , , , , , , , ,  currentData["91"]["Time"].slice(11,20), , , , ],
                                        datasets: [
                                            {
                                                data: [
                                                    currentData["1"]["Light"],
                                                    currentData["4"]["Light"],
                                                    currentData["7"]["Light"],
                                                    currentData["10"]["Light"],
                                                    currentData["13"]["Light"],
                                                    currentData["16"]["Light"],
                                                    currentData["19"]["Light"],
                                                    currentData["22"]["Light"],
                                                    currentData["25"]["Light"],
                                                    currentData["28"]["Light"],
                                                    currentData["31"]["Light"],
                                                    currentData["34"]["Light"],
                                                    currentData["37"]["Light"],
                                                    currentData["40"]["Light"],
                                                    currentData["43"]["Light"],
                                                    currentData["46"]["Light"],
                                                    currentData["49"]["Light"],
                                                    currentData["52"]["Light"],
                                                    currentData["55"]["Light"],
                                                    currentData["58"]["Light"],
                                                    currentData["61"]["Light"],
                                                    currentData["64"]["Light"],
                                                    currentData["67"]["Light"],
                                                    currentData["70"]["Light"],
                                                    currentData["73"]["Light"],
                                                    currentData["76"]["Light"],
                                                    currentData["79"]["Light"],
                                                    currentData["82"]["Light"],
                                                    currentData["85"]["Light"],
                                                    currentData["88"]["Light"],
                                                    currentData["91"]["Light"],
                                                    currentData["94"]["Light"],
                                                    currentData["97"]["Light"]
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