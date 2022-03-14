import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import { editStory, fetchStories } from '../../store/stories';
import * as modals from '../../store/modals';
import './editStory.css';
import { useHistory } from 'react-router-dom';

const EditStory = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const dispatch = useDispatch();
    const modalState = useSelector(state => state.modals);
    const storyId = modalState.modals.edit_story;
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
        dispatch(modals.allModalsOff());
    }

    return (
        <>
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
                    
                    <textarea
                        className='text-area' 
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
};

export default EditStory;