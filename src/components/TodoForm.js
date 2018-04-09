import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { addTodo, setTodoText, updateTodo } from '../actions';
import Input from './Input';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.onChangeText = this.onChangeText.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onChangeText(text) {
    this.props.setTodoText(text);
  }
  
  onPress() {
    const { id, text } = this.props.editingTodo;

    if (id) {
      return this.props.updateTodo(this.props.editingTodo);
    }

    return this.props.addTodo(text);
  }

  render() {
    const { id, text } = this.props.editingTodo;

    const buttonTitle = id ? 'Atualizar' : 'Salvar';

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
            title={buttonTitle} />
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
    flex: 3
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});

const mapStateToProps = ({ editingTodo }) => ({ editingTodo });

const mapDispatchToProps = {
  addTodo,
  setTodoText,
  updateTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);