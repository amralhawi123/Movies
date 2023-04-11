import { configureStore,applyMiddleware, createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieReducer } from '../reducer/moviesReducer'
import thunk from 'redux-thunk'

export const store = createStore( movieReducer, applyMiddleware(thunk))