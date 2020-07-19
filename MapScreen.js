import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import MapView from 'react-native-maps';

export default class SafetyScreen extends Component{

    constructor(props){
        super(props);
        this.state = {
            latitude: 40.744473,
            longitude: -74.025199,
        }
        this.locations = [
            {latitude:40.744992, longitude:-74.023731,  title:"Howe", color: "yellow"},
            {latitude:40.744791, longitude: -74.025295, title: "Samuel C Williams Library", color: "red"},
            {latitude:40.745279, longitude: -74.024985, title: "Palmer Hall", color: "green"},
            {latitude:40.743583, longitude: -74.027137, title: "Altorfer Lab",color: "green"},
            {latitude:40.742701, longitude: -74.026622, title: "Babbio", color: "yellow"},
            {latitude:40.744339, longitude: -74.025752, title: "Schaefer Gym", color: "red"},
            {latitude:40.745862, longitude: -74.024820, title: "Humphrey Hall", color: "yellow"},
            {latitude:40.743811, longitude: -74.025747, title: "Walker Gym", color: "red"},
            {latitude:40.743424, longitude: -74.025703, title: "Davis Hall", color: "green"},
            {latitude:40.745645, longitude: -74.025519, title: "Jonas Hall", color: "red"},
            {latitude:40.746801, longitude: -74.024153, title: "Castle Point", color: "red"},
            {latitude:40.743422, longitude: -74.027072, title: "River Terrace", color: "green"},

        ]
    }

    changeRegion = (lat,long) => {
        this.setState({
            latitude: lat,
            longitude:long,
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <MapView
                    style={styles.mapView}
                    region={{
                        latitude: this.state.latitude,
                        longitude: this.state.longitude,
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
                                pinColor={locationData.color}
                                onPress={()=>{
                                    this.props.onLocationSelection(locationData.title)
                                    this.changeRegion(locationData.latitude, locationData.longitude)
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