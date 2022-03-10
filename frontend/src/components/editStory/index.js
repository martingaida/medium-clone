import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { editStory, fetchStories } from '../../store/stories';

import './editStory.css';

const EditStory = (id) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const storyId = id.id.id;
    const dispatch = useDispatch();
    const story = useSelector(state => state.stories.stories)?.find(el => {if (el.id === storyId) return el});
    const userId = useSelector(state => state.session.user.id);
    
    useEffect(() => {
        setTitle(story.title);
        setContent(story.content);
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()

        const story = {
            storyId,
            userId,
            title,
            content
        }
        
        dispatch(editStory(story));
    }

    return (
        <>
            <div className='nav-bar-space-filler'/>
            <h1>Edit story form.</h1>
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

export default EditStory;