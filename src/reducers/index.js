import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case?
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
    // Fill in the body of this case
      const addCount = parseInt(action.payload) + 1;
      return {
        ...state,
        count: addCount,
      }
    case DECREMENT:
    // Fill in the body of this case
      const minusCount = parseInt(action.payload) - 1;
      return {
        ...state,
        count: minusCount,
      }
    case INCREMENT_IF_ODD:
      const addOdd = parseInt(action.payload) + 1;
      return {
        ...state,
        count: addOdd,
      }
    case INCREMENT_ASYNC:
      const asyncAdd = parseInt(action.payload) + 1;
      return {
        ...state,
        count: asyncAdd,
      }
    default:
      return state;
  }
};
