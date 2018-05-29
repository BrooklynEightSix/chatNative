import React from 'react'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { createStore, applyMiddleware } from 'redux'
import Main from './Main'

import reducer from '../store'

const middleware = applyMiddleware(thunkMiddleware)
const store = createStore(reducer, middleware)

const Corgi = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default Corgi