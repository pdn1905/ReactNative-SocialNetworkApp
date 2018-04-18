import React, { Component } from "react";
import { View, StatusBar, Image, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { CardItem, Left, Thumbnail, Right, Body, Button, Icon } from "native-base";

export default class NotificationComponent extends Component {

  constructor(props) {
    super(props)
    this.state = { GridViewItems: [
      {key: '1',image: require('../asset/logo.png') },
      {key: '2',image: require('../asset/logo.png')},
      {key: '3',image: require('../asset/me.jpg')},
      {key: '4',image: require('../asset/logo.png')},
      {key: '5',image: require('../asset/me.jpg')},
      {key: '6',image: require('../asset/logo.png')},
      {key: '7',image: require('../asset/me.jpg')},
      {key: '8',image: require('../asset/me.jpg')},
      {key: '9',image: require('../asset/logo.png')},
      {key: '10',image: require('../asset/logo.png')},
      {key: '11',image: require('../asset/me.jpg')},
      {key: '12',image: require('../asset/me.jpg')},
      {key: '13',image: require('../asset/me.jpg')},
      {key: '14',image: require('../asset/logo.png')},
      {key: '15',image: require('../asset/me.jpg')},
      {key: '16',image: require('../asset/logo.png')},
      {key: '17', image: require('../asset/logo.png')},
      {key: '18',image: require('../asset/logo.png')},
      {key: '19',image: require('../asset/logo.png')},
      {key: '20',image: require('../asset/logo.png')}
    ]}
  }


  render() {
    return <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ padding: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Image style={{ height: 70, width: 70, borderRadius: 35, borderColor: "gray", borderWidth: 0.2 }} source={require("../asset/logo.png")} />
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-around" }}>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.number}>3322</Text>
                  <Text style={styles.title}>posts</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.number}>200</Text>
                  <Text style={styles.title}>follower</Text>
                </View>
                <View style={{ alignItems: "center" }}>
                  <Text style={styles.number}>120</Text>
                  <Text style={styles.title}>following</Text>
                </View>
              </View>
              <View style={{ flex: 1, padding: 8, marginTop: 10 }}>
                <Button bordered dark style={{ height: 30, alignItems: "center", justifyContent: "center" }}>
                  <Text
                    style={{ width: null, flex: 1, textAlign: "center" }}
                  >
                    Edit Profile
                  </Text>
                </Button>
              </View>
            </View>
          </View>
          <View style={{ paddingTop: 10}}>
              <Text style={{ color: 'black', fontWeight: 'bold'}}>Phan Duong Ngoc{"\n"} 
                 <Text style={{ color: 'gray'}}>kilwmsasnasfalfaslkjflkajsfljkalsjfklasjfknnasnfnaskkssnfn </Text>
              </Text>
          </View>
        </View>

        <View style={{ height: 0.3, backgroundColor: 'grey', marginLeft: 10, marginRight: 10}} />

        <View style={{ height: 50, flexDirection: 'row', alignItems: 'center' }}> 
           <View  style={{ flexDirection: 'row', flex: 1}}>
               <Button transparent style={{ alignItems: 'center', justifyContent: 'center',flex: 1 }}>
                 <Icon name='ios-grid-outline' style={{color:'black'}} />
              </Button>
              <View style={{ width: 0.2, height: 40 , backgroundColor: 'grey'}} />
         </View>

            <Button transparent style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='ios-list-outline' style={{color:'black'}}/>
                <View style={{ height: 0.3, backgroundColor: 'grey'}} />
            </Button>
                
            <Button transparent style={{ flex: 1,alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='ios-send-outline' style={{color:'black'}}/>
                <View style={{ height: 3, backgroundColor: 'grey'}} />
            </Button>
            
            <Button transparent style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Icon name='ios-pricetag-outline' style={{color:'black'}}/>
            </Button>
        </View>

        <View style={{ height: 0.3, backgroundColor: 'grey', marginLeft: 10, marginRight: 10}} />

        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.GridViewItems}
            renderItem={({ item }) => 
                <View style={{ backgroundColor: 'red', justifyContent: 'center', flex: 1, alignItems: 'center', height: 120, margin: 5}}>
                    <Image style={{ height: 100, width: 100, padding: 10 }} source={item.image}></Image>
                </View>
              }
            numColumns={3}
          />
        </View>


      </View>;
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  number: {
    color: "black",
    fontWeight: "bold",
    alignItems: "center"
  },
  title: {
    color: "gray",
    fontSize: 14,
    textAlign: "center"
  }
};
