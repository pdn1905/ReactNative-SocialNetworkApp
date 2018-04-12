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

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    const Layout = createRootNavigator(this.state.isLogged)
    return (<Provider store={store}> 
               <Layout /> 
            </Provider>);
  }
}
