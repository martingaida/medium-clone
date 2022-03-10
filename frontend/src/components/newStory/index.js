import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { createStory } from '../../store/stories';
import * as modals from '../../store/modals';

import './newStory.css';

const NewStory = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);
    const userId = session.id;

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
            <div className='nav-bar-space-filler'/>
            <h1>New story form.</h1>
            <div className='form-content-main'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input-field' 
                        type='text'
                        name='title'
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'
                    />
                    
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

export default NewStory;