import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';



export default class SearchComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
                <Card>
                </Card>
            </View>   
        )
    }
}



const styles = {
    container: {
        flex: 1
    },
}