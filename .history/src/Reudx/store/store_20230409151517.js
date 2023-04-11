import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieReducer } from '../reducer/moviesReducer'
import thunk from 'redux-thunk'

export const store = createStore({ reducer: movieReducer }, applyMiddleware(thunk))