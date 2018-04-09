import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo } from '../actions';
import Input from './Input';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onPress() {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  render() {
    const { text } = this.state;

    return (
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Input
            onChangeText={this.onChangeText}
            value={text} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPress}
            title="Salvar" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10
  },
  inputContainer: {
    flex: 4
  },
  buttonContainer: {
    flex: 1
  }
});

export default connect(null, {
  addTodo
})(TodoForm);