const SIGN_UP_ON = 'modals/SIGNIN';
const LOG_IN_ON = 'modals/LOGIN';
const NEW_STORY_ON = 'modals/NEW';
const EDIT_ON = 'modals/EDIT';
const DELETE_ON = 'modals/DELETE';

const NEW_COMMENT = 'comments/NEW';
const EDIT_COMMENT = 'comments/EDIT';
const DELETE_COMMENT = 'comments/DELETE';

const ALL_OFF = 'modals/OFF';

export const signupModalOn = () => {

    return {
        type: SIGN_UP_ON,
        payload: {
            sign_up: true,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false,
            comment_new: false,
            comment_edit: false,
            comment_delete: false
        }
    };
};

export const loginModalOn = () => {

    return {
        type: LOG_IN_ON,
        payload: {
            sign_up: false,
            log_in: true,
            new_story: false,
            edit: false,
            delete: false,
            comment_new: false,
            comment_edit: false,
            comment_delete: false
        }
    };
};

export const newStoryModalOn = () => {

    return {
        type: NEW_STORY_ON,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: true,
            edit: false,
            delete: false,
            comment_new: false,
            comment_edit: false,
            comment_delete: false
        }
    };
};

export const editModalOn = (id) => {

    return {
        type: EDIT_ON,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: false,
            edit: id,
            delete: false,
            comment_new: false,
            comment_edit: false,
            comment_delete: false
        }
    };
};

export const deleteModalOn = () => {

    return {
        type: DELETE_ON,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: true,
            comment_new: false,
            comment_edit: false,
            comment_delete: false
        }
    };
};

export const newCommentModalOn = () => {

    return {
        type: NEW_COMMENT,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false,
            comment_new: true,
            comment_edit: false,
            comment_delete: false
        }
    };
}

export const editCommentModalOn = (id) => {

    return {
        type: EDIT_COMMENT,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false,
            comment_new: false,
            comment_edit: id,
            comment_delete: false
        }
    };
}

export const deleteCommentModalOn = () => {

    return {
        type: DELETE_COMMENT,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false,
            comment_new: false,
            comment_edit: false,
            comment_delete: true
        }
    };
}

export const allModalsOff = () => {

    return {
        type: ALL_OFF,
        payload: {
            sign_up: false,
            log_in: false,
            new_story: false,
            edit: false,
            delete: false
        }
    };
};

export const modalsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOG_IN_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case SIGN_UP_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case NEW_STORY_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case EDIT_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case DELETE_ON: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case ALL_OFF: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case NEW_COMMENT: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case EDIT_COMMENT: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        case DELETE_COMMENT: {
            const newState = {...state}
            newState.modals = action.payload
            return newState
        }
        default:
            return state;
    }
};