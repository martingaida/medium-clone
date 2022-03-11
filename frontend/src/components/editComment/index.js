import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { editComment } from '../../store/comments';
import * as modals from '../../store/modals';
import './editComment.css';

const EditComment = () => {
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals);
    const commentId = modalState.modals.comment_edit;
    const session = useSelector(state => state.session.user);
    const userId = session.id;
    const comment_id = commentId.commentId;
    const comment = useSelector(state => state.comments.comments)?.find(el => {if (el.id === comment_id) return el})

    const storyId = comment?.storyId

    useEffect(() => {
        setContent(comment.content);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        const comment = {
            id: comment_id,
            userId,
            storyId,
            content
        }

        dispatch(editComment(comment));
        dispatch(modals.allModalsOff());
    }

    return (
        <>
            <div className='nav-bar-space-filler'/>
            <h1>Edit comment form.</h1>
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

export default EditComment;