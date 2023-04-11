import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieReducer } from '../reducer/moviesReducer'
import 

export const store = configureStore({ reducer: movieReducer }, composeWithDevTools())