import React, { useContext } from 'react';
import { counterContext } from './CounterProvider';

const Counter = () => {
  const { state, dispatch } = useContext(counterContext);
  return (
    <div>
      <button onClick={() => dispatch({ type: 'increase', payload: 5 })}>
        +
      </button>
      <h1>{state.count}</h1>
      {console.log(state)}
      <button onClick={() => dispatch({ type: 'decrease', payload: 4 })}>
        -
      </button>
    </div>
  );
};

export default Counter;
