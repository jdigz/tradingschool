/*
* Step 1: Import Action (Types) and combineReducers if necessary
*/
import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VISIBILITY_FILTERS,
} from '../actions';

import { combineReducers } from 'redux';

/*
* Step 2: Deconstruct any data if necessary
*/
const { SHOW_ALL } = VISIBILITY_FILTERS;

/*
* Step 3: Create Reducer Composites (For reducer composition pattern)
*/
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed,
          })
        }
        return todo;
      })
    default:
      return state;
  }
}

/*
* Step 4: Combine the reducer composites into one reducer composition.
*/
const todoApp = combineReducers({
  visibilityFilter, //Can add a: or b: in front of reducer calls in order to use a key on reducers ex. b: todos,
  todos,
})