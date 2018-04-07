import { ADD_TODO } from '../actions';

const INITIAL_STATE = [];

let nextId = 1;

const todoListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: nextId++,
        text: action.text,
        done: false
      };

      return [...state, newTodo];
    default:
      return state
  }
};

export default todoListReducer;