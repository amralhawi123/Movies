import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieReducer } from '../reducer/moviesReducer'
import { applyMiddleware } from '@reduxjs/toolkit'

export const store = configureStore({ reducer: movieReducer }, composeWithDevTools())