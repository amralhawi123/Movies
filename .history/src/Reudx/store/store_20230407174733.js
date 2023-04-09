import { configureStore } from '@reduxjs/toolkit'
import {configureStore} from 'redux'


export const store = configureStore()

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const store = configureStore({ reducer: rootReducer })