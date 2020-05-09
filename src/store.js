import { createStore } from 'redux';

const reducer = () => {
    console.log('hello');
}

const store = createStore(reducer);

export default store;