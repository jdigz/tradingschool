import { createStore } from 'redux';
import todoApp from '../reducers';

const store = createStore(todoApp);

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VISIBILITY_FILTERS,
} from '../actions/actions';

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addTodo('Learn about Actions'))
store.dispatch(addTodo('Learn about Reducers'))
store.dispatch(addTodo('Learn about Store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VISIBILITY_FILTERS.SHOW_ALL))

unsubscribe()