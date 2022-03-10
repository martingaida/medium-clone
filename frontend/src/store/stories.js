import { csrfFetch } from './csrf';
import { useState } from 'react';

const POPULATE_STORIES = 'stories/ALL';

export const createStory = (story) => async (dispatch) => {
    const { userId, title, content } = story;
    const response = await csrfFetch('/api/stories/new', {
        method: 'POST',
        body: JSON.stringify({
            userId,
            title,
            content
        })
    });
    // dispatch reducer to update state
    return dispatch(fetchStories());
}

export const populateStories = (stories) => {

    return {
        type: POPULATE_STORIES,
        payload: stories
    };
};

export const fetchStories = () => async (dispatch) => {
    const response = await csrfFetch('/api/stories', {
        method: 'GET'
    })
    const data = await response.json();
    dispatch(populateStories(data.stories))
}

export const editStory = (story) => async (dispatch) => {
    const { storyId, userId, title, content } = story;
    await csrfFetch(`/api/stories/edit/${storyId}`, {
        method: 'POST',
        body: JSON.stringify({
            userId,
            title,
            content
        })
    });
    dispatch(fetchStories())
}

export const deleteStory = (id) => async (dispatch) => {
    await csrfFetch(`/api/stories/delete/${id}`, {
        method: 'POST'
    });
    dispatch(fetchStories())
}

export const storiesReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_STORIES: {
            const newState = {...state}
            newState.stories = action.payload
            return newState
        }
        default:
            return state;
    }
}