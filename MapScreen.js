import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
        this.locations = [
            {latitude:40.744992,longitude:-74.023731, title:"Howe", safety:"This location is currently safe"},
            {latitude:40.744791, longitude: -74.025295, title: "Samuel C Williams Library"}

        ]
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
                    {this.locations.map((locationData)=> {
                        return(
                            <MapView.Marker
                                key={locationData.title}
                                coordinate={{latitude:locationData.latitude,longitude:locationData.longitude}}
                                title={locationData.title}
                                onPress={()=>{
                                  this.props.onLocationSelection(locationData.title)
                                }}
                            />
                        )

                    })}

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