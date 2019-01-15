import firebase from '@firebase/app';
import '@firebase/auth';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAi1SlR0YV7tcJ7_SD4UFnJ59VQQ7PrjU4',
      authDomain: 'auth-396cd.firebaseapp.com',
      databaseURL: 'https://auth-396cd.firebaseio.com',
      projectId: 'auth-396cd',
      storageBucket: 'auth-396cd.appspot.com',
      messagingSenderId: '517603228155'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style={{ flexDirection: 'row' }}>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </View>
      );
      case false:
        return <LoginForm />;
      default:
        return (
        <View style={{ flexDirection: 'row' }}>
          <Spinner size='large' />
        </View>
        );
    }
}

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
