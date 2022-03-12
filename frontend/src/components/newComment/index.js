import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createComment, fetchComments } from '../../store/comments';
import * as modals from '../../store/modals';
import './newComment.css';

const NewComment = (storyId) => {
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);
    const userId = session.id;
    const story_id = storyId.storyId.storyId

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
                    <input className='btn-black' type='submit' value='Submit'/>
                </form>
            </div>
        </>
    )
}

export default NewComment;