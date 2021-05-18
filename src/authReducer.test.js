import reducer from './store/reducers/authReducer'
import * as types from './store/actions/actionTypes'

describe('auth reducer', () => {
  it('default, should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
        signInError: null,
        signUpError: null,
    })
  })

  it('should handle SIGNUP_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNUP_SUCCESS,
      })
    ).toEqual({
        signInError: null,
        signUpError: null,
    })
  })

  it('should handle SIGNUP_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNUP_ERROR
      })
    ).toEqual({
        signInError: null,
        signUpError: "Sign up failed",
    })
  })

  it('should handle SIGNIN_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNIN_SUCCESS,
      })
    ).toEqual({
        signInError: null,
        signUpError: null,
    })
  })

  it('should handle SIGNIN_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNIN_ERROR,
      })
    ).toEqual({
        signInError: "Sign in failed",
        signUpError: null,
    })
  })

  it('should handle SIGNOUT_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNOUT_SUCCESS,
      })
    ).toEqual({
        signInError: null,
        signUpError: null,
    })
  })

  it('should handle SIGNOUT_ERROR', () => {
    expect(
      reducer(undefined, {
        type: types.SIGNOUT_ERROR,
      })
    ).toEqual({
        signInError: null,
        signUpError: null,
    })
  })
})