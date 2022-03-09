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
    return response;
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
    console.log('fetchStories Data:', data.stories)
    dispatch(populateStories(data.stories))
}

export const storiesReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_STORIES: {
            const newState = {...state}
            newState.stories = action.payload
            // action.payload.forEach(story => {
            //     newState.stories[story.id] = story;
            // });
            return newState
        }
        default:
            return state;
    }
}