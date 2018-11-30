import { createStore } from 'redux';
import { createStore } from 'redux';

//Action generators -functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy // or incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET',
    resetCount: 0
});

//  Reducers:
// 1. Reducers are pure functions => o/p is only determined by I/p
// 2. Never change state or action
//actions describe the fact that something happened but dont't specify how it has changed.
//that's the job of reducers.

const countReducer = (state = { count: 10 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: action.resetCount
            };

        default:
            return state;
    }
}

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

//actions -an object that gets sent to the store.

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })

// store.dispatch({
//     type: 'DECREMENT'
// })

store.dispatch(resetCount());
// store.dispatch({
//     type: 'RESET'
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount({ count: 101 }));




const Store = createStore((state = { count: 0 }) => {
    return state;
});


console.log(store.getState());