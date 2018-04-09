import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";

import { toggleTodo } from '../actions';
import TodoListItem from './TodoListItem';
  
const TodoList = ({ todos = [], toggleTodo }) => (
  <View>
    {
      todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo} />
      ))
    }
  </View>
);

const mapStateToProps = ({ todos }) => ({ todos });

const mapDispatchToProps = { toggleTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);