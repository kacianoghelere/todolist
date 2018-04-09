import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default class TodoApp extends Component {
  render() {
    return (
      <Provider store={store}> 
        <View style={styles.container}>
          <TodoForm />
          <TodoList />
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