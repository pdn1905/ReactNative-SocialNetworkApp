import React, { Component } from 'react';
import { View, StatusBar,Text, Image, Dimensions, FlatList } from 'react-native';
import { Container, Content, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions/index';
import CardComponent from './CardComponent';



const WIDTH_SCREEN = Dimensions.get('window').width;

export default class HomeComponent extends Component {

    static navigationOptions = {
        headerLeft:
        <Button transparent>
         <Icon name="ios-camera-outline" style={{ fontSize: 30, color: 'white' }} />
         </Button>,
        headerRight:
        <View style={{ flexDirection: 'row' }}>
          <Button transparent>
         <Icon name="ios-notifications-outline" style={{ fontSize: 26, color: 'white' }} />
         </Button>
        <Button transparent>
        <Icon style={{ fontSize: 30, color: 'white' }} name="ios-send-outline" />
        </Button>
         </View>
    }

    constructor(props) {
        Text.defaultProps.allowFontScaling=true;
        super(props);
        this.state = {
            datas: [
                { id: 1, user: {name:'Tiamo',email: 'tiamo@gmail.com',profile: require('../asset/me.jpg')}, postImage:require('../asset/2.jpg'), description: 'A performant interface for rendering simple, flat lists, supporting.' },
                { id:2, user: {name:'NgocPhanDuong',email: 'pdn@gmail.com',profile: require('../asset/me.jpg')}, postImage:require('../asset/3.png'), description: 'Rendered in between each item, but not at the top or bottom.' },
                { id:3, user: {name:'ahismw',email: 'swwwe@gmail.com',profile: require('../asset/me.jpg')}, postImage:require('../asset/1.jpg'), description: 'Rendered in between each item, but not at the top or bottom.' }
            ]
        }
    }

    _keyExtractor = (item, index) => item.id.toString();

    renderItems = ({item}) => {
        console.log(item);
        <View style={{ backgroundColor: 'red', height: 40 }}></View>
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList 
                    data={this.state.datas}
                    keyExtractor={this._keyExtractor}
                    ListHeaderComponent={() => 
                        <View style={{ height: 60, justifyContent: 'center' }}>
                            <ListUserComponet />
                        </View>
                    }
                    renderItem={ ({item}) =>
                    <CardComponent post={item} />
                }
                />
            </View>
        )
    }
}

 class ListUserComponet extends Component {

    constructor(props) {
        Text.defaultProps.allowFontScaling=true;
        super(props);
        this.state = {
            datas: [
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg'),
                 require('../asset/me.jpg')
            ]
        }
    }

    render() {
        return(
                <FlatList 
                    data={this.state.datas}
                    // keyExtractor={this._keyExtractor}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    renderItem={ ({item}) =>
                <View style={{ justifyContent: 'center', padding: 5, backgroundColor: 'white' }}>
                    <Image style={{ height: 50, width: 50, borderRadius: 25, borderColor: 'black', borderWidth: 0.5 }} source={item} />
                </View>
                }
                />
        );
    }
}