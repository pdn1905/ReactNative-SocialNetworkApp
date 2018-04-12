import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  StackNavigator,
  TabNavigator,
  SwitchNavigator
} from "react-navigation";
import { Icon } from 'react-native-elements';
import { FontAwesome } from "react-native-vector-icons";
import ProfileComponent from '../components/ProfileComponent';
import LoginComponent from '../components/LoginComponent';
import HomeComponent from '../components/HomeComponent';
import CameraComponent from '../components/CameraComponent';
import SearchComponent from '../components/SearchComponent';
import NotificationComponent from '../components/NotificationComponent';

export const HomeStack = StackNavigator({
  Home: {
    screen: HomeComponent,
    navigationOptions: {
      title: "News",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(32, 53, 70)'
      }
    }
  }
});
export const SearchStack = StackNavigator({
  Search: {
    screen: SearchComponent,
    navigationOptions: {
      title: "Search",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(32, 53, 70)'
      }

    }
  }
});

export const CameraStack = StackNavigator({
  Camera: {
    screen: CameraComponent,
    navigationOptions: {
      title: "Camera",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(32, 53, 70)'
      }
    }
  }
});

export const ProfileStack = StackNavigator({
  Profile: {
    screen: ProfileComponent,
    navigationOptions: {
      title: "Profile",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(32, 53, 70)'
      }
    }
  }
});

export const NotificationStack = StackNavigator({
  Notification: {
    screen: NotificationComponent,
    navigationOptions: {
      title: "Notification",
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'rgb(32, 53, 70)'
      }
    }
  }
});

export const SignedIn = TabNavigator(
    {
      Home: {
        screen: HomeStack,
        navigationOptions: {
          tabBarLabel: "Home",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color={tintColor} />
          )
        }
      },
      Search: {
        screen: SearchStack,
        navigationOptions: {
          tabBarLabel: "Search",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="search" size={30} color={tintColor} />
          )
        }
      } 
      ,
      Camera: {
        screen: CameraStack,
        navigationOptions: {
          tabBarLabel: "Camera",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="image" size={30} color={tintColor} />
          )
        }
      }  
      ,
      Notification: {
        screen: NotificationStack,
        navigationOptions: {
          tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="notifications" size={30} color={tintColor} />
          )
        }
      }
      ,
      Profile: {
        screen: ProfileStack,
        navigationOptions: {
          tabBarLabel: "Profile",
          tabBarIcon: ({ tintColor }) => (
            <Icon name="settings" size={30} color={tintColor} />
          )
        }
      }
    },
    {
      tabBarOptions: {
        style: {
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
        },
        activeTintColor: 'rgb(32, 53, 70)'

      }
    }
  );

  export const createRootNavigator = (signedIn = false) => {
    return SwitchNavigator(
      {
        SignedIn: {
          screen: SignedIn
        },
        SignedOut: {
          screen: LoginComponent
        }
      },
      {
        initialRouteName: signedIn ? "SignedIn" : "SignedOut"
      }
    );
  };