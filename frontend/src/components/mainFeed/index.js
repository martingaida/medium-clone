import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import EditStoryModal from '../editStoryModal';

import './mainFeed.css';

const MainFeed = () => {
    const stories = useSelector(state => state.stories.stories)
    const session = useSelector(state => state.session.user)
    
    return (
        <>
            <div className='mF-content-main'>
                <div className='mF-content-story'>
                    <div className='mF-story-details'>
                        {stories?.map(story => {
                            return (
                                <div key={story.id}>
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
                                        <p>5 min read</p>
                                        <p className='mF-story-tag'>Politics</p>
                                    </div>
                                    {session ? 
                                        (story.User.id === session.id) && 
                                            <div className='mF-edit-delete'>
                                                <EditStoryModal id={story.id}/>
                                                <button className='btn-plain'>Delete</button> 
                                            </div>
                                        : null}
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className='mF-story-img'>
                        <img src={require('../../assets/images/article-image-placeholder.png')}/>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default MainFeed;