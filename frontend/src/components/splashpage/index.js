import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './splashpage.css';

function SplashPage() {
    const dispatch = useDispatch();
    // To make content available for aunauthenticated users this section needs to be disabled..
    const session = useSelector(state => state.session.user);
    const history = useHistory();

    // if (!session) history.push('/login');
    // ..section ends.

    return (
        <>
            {!session ?
                <div className='splashpage-main-content'>
                    <img className='ai-text-art' src={require('../../assets/ai-text-art.png')}/>
                </div>
                :
                <>
                    <div className='nav-bar-space-background'/>
                    <div className='nav-bar-space-filler'/>
                </>
            }
        </>
    );
};

export default SplashPage;