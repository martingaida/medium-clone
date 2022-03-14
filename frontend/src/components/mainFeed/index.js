import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom'
import EditStoryModal from '../editStoryModal';
import DeleteStoryModal from '../deleteStoryModal';
import AccessDeniedModal from '../accessDeniedModal';
import * as modals from '../../store/modals';
import { deleteStory } from '../../store/stories';
import { useState, useEffect } from 'react';
import './mainFeed.css';

const MainFeed = () => {
    // const [readingTime, setReadingTime] = useState(1);

    const stories = useSelector(state => state.stories.stories)
    const session = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const history = useHistory();
    
    const changeRoute = (id) => {
        history.push(`/story/${id}`)
    }

    return (
        <>
            <AccessDeniedModal />
            <div className='mF-content-main'>
                <div className='mF-content-story'>
                    <div>
                        {stories?.map(story => {
                            
                            return (
                                <div className='mF-story-details' key={story.id} onClick={() => {
                                    session ? changeRoute(story.id)
                                    : dispatch(modals.accessDeniedModalOn())
                                }}>
                                    <div className='mF-story-author'>
                                        <img className='mF-author-profile' src={require('../../assets/avatars/hal9000.png')}/>
                                        <p>{story.User.username}</p>
                                    </div>
                                    <div className='mF-story-title'>
                                        <h2>{story.title}</h2>
                                    </div>
                                    <div className='mF-story-sample'>
                                        <p>{story.content}</p>
                                    </div>
                                    <div className='mF-story-info'>
                                        <p>{story.createdAt}</p>
                                        <p>{Math.round(story.content.length/400)} min read</p>
                                        <p className='mF-story-tag'>GPT-3</p>
                                    </div>
                                    {session ? 
                                        (story.User.id === session.id) && 
                                            <div className='mF-edit-delete'>
                                                <EditStoryModal id={story.id}/>
                                                <DeleteStoryModal storyId={story.id} /> 
                                            </div>
                                    : null}
                                </div>
                            )
                        })}
                    <div className='footer-space-filler'/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MainFeed;