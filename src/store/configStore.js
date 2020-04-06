import {createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import searchReducer from '../reducers/searchReducer'

const configStore = () => {
    const store = createStore(
        combineReducers({
            movies: searchReducer
        }), applyMiddleware(thunk)
    )
    return store
}

export default configStore