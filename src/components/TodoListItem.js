import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoListItem = ({ todo, toggleTodo }) => (
  <TouchableOpacity onPress={() => toggleTodo(todo.id)}>
    <View style={styles.line}>
      <Text style={[styles.lineText, todo.done ? styles.lineThrough : null]}>
        {todo.text}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  line: {
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 60,
    padding: 5
  },
  lineThrough: {
    textDecorationLine: 'line-through',
    color: '#aaa'
  },
  lineText: {
    fontSize: 16
  }
});

export default TodoListItem;