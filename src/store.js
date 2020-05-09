import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {movies: []};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPLOAD_MOVIE_DATA' :
            return {movies: action.payload};
    default :
        return state;
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;