import firebase from '@firebase/app';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWIllMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAi1SlR0YV7tcJ7_SD4UFnJ59VQQ7PrjU4',
      authDomain: 'auth-396cd.firebaseapp.com',
      databaseURL: 'https://auth-396cd.firebaseio.com',
      projectId: 'auth-396cd',
      storageBucket: 'auth-396cd.appspot.com',
      messagingSenderId: '517603228155'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
