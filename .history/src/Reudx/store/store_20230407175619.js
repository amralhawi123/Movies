import { configureStore } from '@reduxjs/toolkit'
import { movieReducer } from '../reducer/moviesReducer'


export const store = configureStore({ reducer: movieReducer })