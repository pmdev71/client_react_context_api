import React, { createContext, useReducer } from 'react';
const initialState = {
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increase':
      return { ...state, count: state.count + action.payload };
    case 'decrease':
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
}

export const counterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <counterContext.Provider value={value}>{children}</counterContext.Provider>
  );
};

export default CounterProvider;
