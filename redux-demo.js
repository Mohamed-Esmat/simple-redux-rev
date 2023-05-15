const redux = require('redux');

//The Reducer function must be a pure function[the same inputs the same values for inputs should be produce]
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      // count: state.count + action.payload
      counter: state.counter + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
  
const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState(); //getState give us the latest state
  console.log(latestState);
};

//To make redux aware of this subscriber function and tell it that this function should be executed whenever our state changes
store.subscribe(counterSubscriber);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
