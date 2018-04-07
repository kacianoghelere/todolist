import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import TodoForm from './components/TodoForm';
import store from './store';

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}> 
        <View style={styles.container}>
          <TodoForm />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 25
  }
})