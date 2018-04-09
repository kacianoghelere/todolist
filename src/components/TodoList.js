import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { toggleTodo, setEditingTodo } from '../actions';
import TodoListItem from './TodoListItem';
  
const TodoList = ({ todos = [], toggleTodo, setEditingTodo }) => (
  <View>
    {
      todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={setEditingTodo} />
      ))
    }
  </View>
);

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = {
  toggleTodo,
  setEditingTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);