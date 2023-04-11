import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension'
import { movieReducer } from '../reducer/moviesReducer'
i

export const store = configureStore({ reducer: movieReducer }, composeWithDevTools())