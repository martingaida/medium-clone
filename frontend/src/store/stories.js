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

    return dispatch(fetchStories());
};

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
};

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
};

export const deleteStory = (id) => async (dispatch) => {
    await csrfFetch(`/api/stories/delete/${id}`, {
        method: 'POST'
    });
    dispatch(fetchStories())
};

// COMMENTS:
// export const createComment = (comment) => async (dispatch) => {
//     const { userId, story_id, content } = comment;
//     await csrfFetch('/api/comments/new', {
//         method: 'POST',
//         body: JSON.stringify({
//             userId,
//             storyId: story_id,
//             content
//         })
//     });
//     return dispatch(fetchStories())
// };

export const storiesReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE_STORIES: {
            const newState = {...state}
            newState.stories = action.payload
            return newState
        }
        default:
            return state
    }
};