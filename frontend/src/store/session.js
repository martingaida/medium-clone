import { csrfFetch } from './csrf';
// import { useState } from 'react';

const CREATE_SESSION = 'session/CREATE';
const DELETE_SESSION = 'session/DELETE';

export const createSession = (user) => {

    return {
        type: CREATE_SESSION,
        payload: {
            id: user.id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        }
    };
};

export const deleteSession = () => {

    return {
        type: DELETE_SESSION
    };
};

export const signup = (user) => async (dispatch) => {
    const { email, password, username } = user;
    const response = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            username
        })
    });
    const data = await response.json();
    dispatch(createSession(data.user))
};

export const restoreUser = () => async (dispatch) => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(createSession(data.user));
};

export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });
    const data = await response.json();
    
    dispatch(createSession(data.user));
    return response;
};

export const demoLogin = () => async (dispatch) => {
    const credential = 'DemoLitionMan';
    const password = '123456';

    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });
    const data = await response.json();

    dispatch(createSession(data.user));
    return response;
};

export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
        method: 'DELETE',
    });
    dispatch(deleteSession());
}

const initialState = { user: null }

export const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SESSION: {
            const newState = {...state}
            newState.user = action.payload
            return newState
        }
        case DELETE_SESSION: {
            const newState = initialState
            return newState
        }
        default:
            return state;
    }
};