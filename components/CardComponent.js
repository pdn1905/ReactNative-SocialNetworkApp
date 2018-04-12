import React, { Component } from 'react';
import { View, StatusBar,Text, Image, Dimensions } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body, Button, Icon, Right } from 'native-base';


const WIDTH_SCREEN = Dimensions.get('window').width;

export default class CardComponent extends Component {


    componentWillReceiveProps(props) {
        
    }

    render() {
        const { post } = this.props;
        return (
            <Card>
            <StatusBar barStyle='light-content' />
                <CardItem style={{ flex: 1 }}>
                    <Left style={{ flex: 2.5 }}>
                    <Thumbnail source={post.user.profile}/>
                    <Body style={{ width: 3000 }}>
                        <Text>{post.user.name}</Text>
                        <Text style={{ color: 'rgba(0,0,0,0.4)'}}>{post.user.email}</Text>
                    </Body>
                    </Left>
                    <Right style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'right', color: 'rgba(0,0,0,0.4)', fontSize: 12}}>20 minutes ago</Text>
                    </Right>
                </CardItem>
                <CardItem cardBody style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <Image source={post.postImage} style={{ height: 220, width: null, flex: 1}}/>
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{ color: 'black' }} />
                        </Button>
                    </Left>
                    <Right>
                    <Button transparent>
                            <Icon name="md-pricetags" style={{ color: 'black' }} />
                        </Button>
                    </Right>
                </CardItem>
                <View style={{ height: 15, paddingLeft: 12}}>
                    <Text style={{ fontSize: 14}}>100 Likes</Text>
                </View>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{ fontSize: 14, fontWeight: 'bold'}}>
                                {post.user.name}
                            </Text> {post.description}
                        </Text>
                    </Body>
                </CardItem> 
            </Card>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
}