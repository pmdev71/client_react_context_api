// import { useReducer } from 'react';
import Counter from './Counter';
import CounterProvider from './CounterProvider';

// const initialState = {
//   count: 1,
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increase':
//       return { ...state, count: state.count + action.payload };
//     case 'decrease':
//       return { ...state, count: state.count - 1 };
//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>

    // <div>
    //   <button onClick={() => dispatch({ type: 'increase', payload: 5 })}>
    //     +
    //   </button>
    //   <h1>{state.count}</h1>
    //   {console.log(state)}
    //   <button onClick={() => dispatch({ type: 'decrease' })}>-</button>
    // </div>
  );
}

export default App;
