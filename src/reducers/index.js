import { combineReducers } from 'redux';

import editingTodoReducer from './editingTodoReducer';
import todoListReducer from './todoListReducer';

const rootReducer = combineReducers({
  editingTodo: editingTodoReducer,
  todos: todoListReducer
});

export default rootReducer;