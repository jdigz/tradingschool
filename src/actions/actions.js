/* Step 1: Define Action Types
* action types
*/

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/* Step 2: Define other constants needed
*  other constants
*/

export const VISIBILITY_FILTERS = {
  SHOW_ALL = 'SHOW_ALL',
  SHOW_COMPLETED = 'SHOW_COMPLETED',
  SHOW_ACTIVE = 'SHOW_ACTIVE',
}

/* Step 3: Create action creators which return actions.
* action creators
*/

export const addTodo = (text) => {
  return { type: ADD_TODO, text }
}

export const toggleTodo = (index) => {
  return { type: TOGGLE_TODO, index }
}

export const setVisibilityFilter = (filter) => {
  return { type: SET_VISIBILITY_FILTER, filter }
}