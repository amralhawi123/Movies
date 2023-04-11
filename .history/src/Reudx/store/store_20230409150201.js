import { configureStore,applyMiddleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieReducer } from '../reducer/moviesReducer'
import {thunk} from 'red'

export const store = configureStore({ reducer: movieReducer }, composeWithDevTools())