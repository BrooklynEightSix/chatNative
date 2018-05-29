import {  combineReducer } from 'redux'

const initialState = {
  messages: ['testing', 'hi'],
  newMessageEntry: ''
}

/*Action Type */
const GOT_MESSAGE_FROM_SERVER = 'GOT_MESSAGE_FROM_SERVER'

/*Action Creator */
export const gotMessageFromServer = message => {
  return {
    type: GOT_MESSAGE_FROM_SERVER,
    message
  }
}

/* Thunk */
export const gotMessages = () => 
  dispatch => 
    dispatch(gotMessageFromServer(initialState.messages))

/*Reducer */
export default reducer = (state = initialState, action) => {
  switch(action.type){
    case gotMessageFromServer:
      return {...state, messages:[ ...state.messages, action.message] }
    default:
      return state 
  }
}




