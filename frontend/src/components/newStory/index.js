import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createStory } from '../../store/stories';
import * as modals from '../../store/modals';
import './newStory.css';

const NewStory = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [titleError, setTitleError] = useState('');
    const [contentError, setContentError] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(state => state.session.user);
    const userId = session.id;

    const changeRoute = () => {
        history.push('/')
    }

    useEffect(() => {
        if (title.length < 3 && title) {
            setTitleError('Title has to be at least 3 characters long')
        } else if (title.length > 250) {
            setTitleError('Title cannot be more than 250 characters long')
        } else setTitleError();
        if (content.length < 3 && content) {
            setContentError('AI prompt has to be at least 3 characters long')
        } else setContentError();
    },[title, content])

    const handleSubmit = (e) => {
        e.preventDefault()

        const story = {
            userId,
            title,
            content
        }

        dispatch(createStory(story));
        dispatch(modals.allModalsOff());
    }

    return (
        <>
            <div className='form-content-main'>
                <h1>New story form.</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input-field' 
                        type='text'
                        name='title'
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                    />
                    <p className='error-message'>{titleError}</p>
                    <input
                        className='input-field' 
                        type='text'
                        name='Content' 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder='AI prompt'
                    />
                    <p className='error-message'>{contentError}</p>
                    <input className='btn-black' type='submit' value='Submit' onClick={() => dispatch(changeRoute())}/>
                </form>
            </div>
        </>
    )
}

export default NewStory;