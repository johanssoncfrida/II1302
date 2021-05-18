import reducer from './store/reducers/messageReducer'
import * as types from './store/actions/actionTypes'

describe('message reducer', () => {
  it('default, should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        currentMessage: ""
    })
  })

  it('should handle GET_CURRENT_MESSAGE', () => {
    expect(
      reducer(undefined, {
        type: types.GET_CURRENT_MESSAGE,
        payload: 'Run the tests'
      })
    ).toEqual({
        currentMessage: 'Run the tests',
    })
  })

  it('should handle GET_MESSAGE_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.GET_MESSAGE_ERROR
      })
    ).toEqual({
        currentMessage: "",
    })
  })

  it('should handle SET_CURRENT_MESSAGE', () => {
    expect(
      reducer(undefined, {
        type: types.SET_CURRENT_MESSAGE
      })
    ).toEqual({
        currentMessage: "",
    })
  })

  it('should handle SET_MESSAGE_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.SET_MESSAGE_ERROR
      })
    ).toEqual({
        currentMessage: "",
    })
  })
})