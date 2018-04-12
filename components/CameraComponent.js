import React, { Component } from 'react';
import { View, StatusBar, Image, TextInput, Text } from 'react-native';
import { Card, CardItem, Button,Left, Right } from 'native-base';

export default class CameraComponent extends Component {

    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
                <View>
                    <CardItem style={{ height: 100, flexDirection: 'row'}} >
                    <View style={{ backgroundColor: 'red'}}>
                        <Image source={require('../asset/place.png')} style={{width: 100, height: 80}}  />
                    </View>
                    <View style={{flex: 1, height: 80}}>
                        <TextInput multiline={true} placeholder='Enter your description...' style={{ paddingTop: 5, paddingBottom: 0, paddingLeft: 10, flex: 1 }}> </TextInput>
                    </View>
                    </CardItem>
                </View>
                <View style={{ 
                    bottom: 10,
                    right: 10,
                    left: 10,
                    height: 50,
                    position:'absolute',
                }}>
                    <Button block style={{ backgroundColor: 'rgba(32, 53, 70, 0.98)'}} ><Text style={{ color: 'white' }}> UPLOAD NOW! </Text></Button>
                </View>  
            </View>   
        )
    }
}



const styles = {
    container: {
        flex: 1
    },
}