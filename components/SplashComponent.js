import React, { Component } from 'react';
import { View, Text, StatusBar, Image } from 'react-native';

class SplashComponent extends Component {
    render() {
        return (
            
            <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
             <Image style={styles.logo} source={require('../asset/logo.png')} /> 
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 15,
        fontWight: 'bold',
        color: 'white'
    },
    logo: {
        width: 100,
        height: 100
    }
}

export default SplashComponent;