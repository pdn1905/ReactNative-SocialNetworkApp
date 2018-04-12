import React, { Component } from 'react';
import { View, StatusBar, SectionList, Text } from 'react-native';
import { Card, Icon, Button } from 'react-native-elements';

export default class ProfileComponent extends Component {

    render() {
            // const sections= [ 
            //     { title: 'Title1', data: ['item1', 'item2'] }, 
            //     { title: 'Title2', data: ['item3', 'item4'] }, 
            // { title: 'Title3', data: ['item5', 'item6'] }, 
            // ];
            var A = ['Apple', 'Apricot', 'Avocado'] ;
            var B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
            var C = ['Cherry', 'Coconut'] ;
         
            return (
         
              <View style={styles.container}>
         
              <SectionList
         
                  sections={[
         
                    { title: 'Fruits Name From A', data: A },
         
                    { title: 'Fruits Name From B', data: B },
         
                    { title: 'Fruits Name From C', data: C },
         
                  ]}
         
                  renderSectionHeader={ ({section}) => <Text style={styles.SectionHeaderStyle}> { section.title } </Text> }
         
                  renderItem={ ({item}) => 
                  <View style={{ height: 50, justifyContent: 'center'}}>
                    <Text style={styles.SectionListItemStyle}> { item } </Text> 
                 </View>
                    }
         
                  keyExtractor={ (item, index) => index }
                 
                />
         
              </View> 
         
            );
    }
}

const styles = {
    container: {
        flex: 1
    },
    SectionHeaderStyle:{
        backgroundColor : 'gray',
        fontSize : 12,
        padding: 5,
        color: '#fff',
      },
     
      SectionListItemStyle:{
     
        fontSize : 15,
        padding: 5,
        color: '#000',
        // backgroundColor : '#F5F5F5'
     
      }
}