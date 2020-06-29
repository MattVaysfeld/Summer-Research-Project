import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.mapView}
                    region={{
                        latitude:40.744473,
                        longitude:-74.025199,
                        latitudeDelta:.004,
                        longitudeDelta:.0042,
                    }}
                >
                    <MapView.Marker
                            coordinate={{latitude:40.744992,longitude:-74.023731}}
                            title={"Howe"}
                    />
                </MapView>
            </View>
            )
        }
    }


const styles = StyleSheet.create({
      container:{
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
        mapView: {
        height: '100%',
        width: '100%'
    }
})