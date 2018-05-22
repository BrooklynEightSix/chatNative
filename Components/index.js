import React from 'react'
import { Provider } from 'react-redux'

import {createStore} from 'redux'
import Main from './Main'

import reducer from '../store'

const store = createStore(reducer)

const Corgi = () => (
  <Provider store={store}>
    <Main />
  </Provider>
)

export default Corgi