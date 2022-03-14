import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { createComment, fetchComments } from '../../store/comments';
import * as modals from '../../store/modals';
import './newComment.css';

const NewComment = (storyId) => {
    const [content, setContent] = useState('');
    const [contentError, setContentError] = useState('');

    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);
    const userId = session.id;
    const story_id = storyId.storyId.storyId

    useEffect(() => {
        if (content.length < 3 && content) {
            setContentError('Comment has to be at least 3 characters long')
        } else setContentError();
        if (content.length > 250) {
            setContentError('Comment must be no more than 250 characters long')
        }
    },[content])

    const handleSubmit = (e) => {
        e.preventDefault()

        const comment = {
            userId,
            story_id,
            content
        }
        
        dispatch(createComment(comment));
        dispatch(modals.allModalsOff());
    }

    return (
        <>
            <h1>New comment form.</h1>
            <div className='form-content-main'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input-field' 
                        type='text'
                        name='Content' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='Content'
                    />
                    <p className='error-message'>{contentError}</p>
                    <input className='btn-black' type='submit' value='Submit'/>
                </form>
            </div>
        </>
    )
}

export default NewComment;