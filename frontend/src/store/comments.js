import { csrfFetch } from './csrf';
import { useState } from 'react';

const POPULATE_COMMENTS = 'comments/ALL';

export const createComment = (comment) => async (dispatch) => {
    const { userId, story_id, content } = comment;
    const response = await csrfFetch('/api/comments/new', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            storyId: story_id,
            content
        })
    });

    return dispatch(fetchComments())
};

export const populateComments = (comments) => {

    return {
        type: POPULATE_COMMENTS,
        payload: comments
    };
};

export const fetchComments = () => async (dispatch) => {

    const response = await csrfFetch('/api/comments', {
        method: 'GET'
    })

    const data = await response.json();
    dispatch(populateComments(data.comments))
};

export const editComment = (comment) => async (dispatch) => {

    const { id, userId, story_id, content } = comment;
    await csrfFetch(`/api/comments/edit/${id}`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            storyId: story_id,
            content
        })
    });

    return dispatch(fetchComments())
};

export const deleteComment = (id) => async (dispatch) => {

    await csrfFetch(`/api/comments/delete/${id}`, {
        method: 'POST'
    });
    
    dispatch(fetchComments())
};

export const commentsReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_COMMENTS: {
            const newState = {...state}
            newState.comments = action.payload
            return newState
        }
        default:
            return state
    }
}; 