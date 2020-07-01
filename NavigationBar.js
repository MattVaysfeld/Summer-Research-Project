import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Foundation';



//import Screens
import SafetyScreen from "./SafetyScreen";
import MapScreen from "./MapScreen";
import DataScreen from "./DataScreen";

const Tab = createBottomTabNavigator();

export default class Navigator extends Component {
    constructor(props){
        super(props)
    }


    render(){
        return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={"Safety"}
                >
                <Tab.Screen
                    name="Safety"
                    options={{
                        tabBarLabel: 'Safety',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='heart' size={size} color={color} style={{paddingTop:5}}/>
                        ),



                    }}

                >
                    {() =>
                        <SafetyScreen onLocationSelection={this.props.onLocationSelection} currentLocation={this.props.currentLocation}/>
                    }
                </Tab.Screen>
                <Tab.Screen
                    name="Map"
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map" color={color} size={size} />
                        ),
                    }}
                >
                    {() =>
                        <MapScreen onLocationSelection={this.props.onLocationSelection} currentLocation={this.props.currentLocation}/>
                    }
                </Tab.Screen>
                <Tab.Screen
                    name="Data"
                    options={{
                        tabBarLabel: 'Data',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name='graph-bar' size={size} color={color} />
                        ),
                    }}
                >
                    {() =>
                        <DataScreen onLocationSelection={this.props.onLocationSelection} currentLocation={this.props.currentLocation}/>
                    }
                </Tab.Screen>


            </Tab.Navigator>

        </NavigationContainer>
        )
    }
}