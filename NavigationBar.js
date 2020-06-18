import React, {Component} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



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

                    }}

                >
                    {() =>
                        <SafetyScreen/>
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
                        <MapScreen/>
                    }
                </Tab.Screen>
                <Tab.Screen
                    name="Data"
                    options={{
                        tabBarLabel: 'Data',
                    }}
                >
                    {() =>
                        <DataScreen/>
                    }
                </Tab.Screen>


            </Tab.Navigator>

        </NavigationContainer>
        )
    }
}