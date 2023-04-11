import { applyMiddleware, createStore } from '@reduxjs/toolkit'
import { movieReducer } from '../reducer/moviesReducer'
import thunk from 'redux-thunk'

export const store = createStore( movieReducer, applyMiddleware(thunk))