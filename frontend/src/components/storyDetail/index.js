import { useSelector, useDispatch } from 'react-redux';
import EditStoryModal from '../editStoryModal';
import { deleteStory } from '../../store/stories';
import { useParams } from 'react-router-dom';
import './storyDetail.css';

const StoryDetail = () => {
    const stories = useSelector(state => state.stories.stories)
    const session = useSelector(state => state.session.user)
    const dispatch = useDispatch();
    const { id } = useParams();
    
    return (
        <>
            <div className='nav-bar-space-background'/>
            <div className='nav-bar-space-filler'/>
            <div className='mF-content-main'>
                <div className='mF-content-story'>
                    <div className='mF-story-details' onClick={() => console.log('Params id: ', id)}>
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
                                        <p className='mF-story-tag'>Category</p>
                                    </div>
                                    {session ? 
                                        (story.User.id === session.id) && 
                                            <div className='mF-edit-delete'>
                                                <EditStoryModal id={story.id}/>
                                                <button className='btn-plain' onClick={() => dispatch(deleteStory(story.id))}>Delete</button> 
                                            </div>
                                        : null}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
};

export default StoryDetail;