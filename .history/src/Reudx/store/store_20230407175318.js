import { configureStore } from '@reduxjs/toolkit'
import { moviesReducer } from '../reducer/moviesReducer'


export const store = configureStore({ reducer: moviesReducer })