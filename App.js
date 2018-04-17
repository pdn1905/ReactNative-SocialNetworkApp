/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginComponent from './components/LoginComponent';
import SplashComponent from './components/SplashComponent';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import { createRootNavigator } from './router/router';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers/index';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false
    }
  }

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyCjHmYVmY3zJAXj0HbwnnAMmrB0SsVC31o",
      authDomain: "myapp-9e33c.firebaseapp.com",
      databaseURL: "https://myapp-9e33c.firebaseio.com",
      projectId: "myapp-9e33c",
      storageBucket: "myapp-9e33c.appspot.com",
      messagingSenderId: "11367904129"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const Layout = createRootNavigator(this.state.isLogged)
    return (<Provider store={store}> 
               <Layout /> 
            </Provider>);
  }
}
