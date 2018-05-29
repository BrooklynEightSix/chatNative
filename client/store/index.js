import {  combineReducer } from 'redux'

const initialState = {
  messages: ['testing', 'hi'],
  newMessageEntry: ''
}

/*Action Type */
const GOT_MESSAGE_FROM_SERVER = 'GOT_MESSAGE_FROM_SERVER'
const WRITE_MESSAGE = 'WRITE_MESSAGE'

/*Action Creator */
export const gotMessageFromServer = message => {
  return {
    type: GOT_MESSAGE_FROM_SERVER,
    message
  }
}

export const writeMessage = message =>{
  return {
    type:WRITE_MESSAGE,
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
    case GOT_MESSAGE_FROM_SERVER:
      return {...state, messages:state.messages }
    case WRITE_MESSAGE:
    return {...state, messages:[...state.messages, action.message]}
    default:
      return state 
  }
}




