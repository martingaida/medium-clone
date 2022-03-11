import { useSelector, useDispatch } from 'react-redux';
import EditStoryModal from '../editStoryModal';
import { deleteStory } from '../../store/stories';
import { useHistory, useParams } from 'react-router-dom';
import './storyDetail.css';

const StoryDetail = () => {
    const stories = useSelector(state => state.stories.stories);
    const session = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log(stories)

    return (
        <>
            {session ?
                <>
                    <div className='nav-bar-space-background'/>
                    <div className='nav-bar-space-filler'/>
                    <div className='mF-content-main'>
                        <div className='mF-content-story'>
                            {stories?.map(story => {
                                if (story.id === parseInt(id)) {
                                    return (
                                        <div className='sD-main-content' key={story.id}>
                                            <div className='mF-story-details'>
                                                <div className='mF-story-author'>
                                                    <img className='mF-author-profile' src={require('../../assets/avatars/hal9000.png')}/>
                                                    <p>{story.User.username}</p>
                                                </div>
                                                <div className='mF-story-title'>
                                                    <h2>{story.title}</h2>
                                                </div>
                                                <div className='mF-story'>
                                                    <p>{story.content}</p>
                                                </div>
                                                <div className='mF-story-info'>
                                                    <p>{story.createdAt}</p>
                                                    <p>5 min read</p>
                                                    <p className='mF-story-tag'>Category</p>
                                                </div>
                                                {(story.User.id === session.id) && 
                                                    <div className='mF-edit-delete'>
                                                        <EditStoryModal id={story.id}/>
                                                        <button className='btn-plain' onClick={() => dispatch(deleteStory(story.id))}>Delete</button> 
                                                    </div>
                                                }
                                            </div>
                                            {story.Comments?.map(comment => {
                                                return (
                                                    <div className='sD-comments-container' key={comment.id}>
                                                        <div className='sD-comments-main'>
                                                            <h3>{comment.content}</h3>
                                                        </div>
                                                        {(comment.userId === session.id) && 
                                                            <div className='mF-edit-delete'>
                                                                <button className='btn-black'>Edit Comment</button>
                                                                <button className='btn-plain'>Delete</button>
                                                            </div>
                                                        }
                                                    </div>

                                                )
                                            })}
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                </>
            : 
                <>
                    <div className='nav-bar-space-background'/>
                    <div className='nav-bar-space-filler'/>
                    <h1>Only registered users can access this content.</h1>
                </>
            }
        </>
    )
};

export default StoryDetail;