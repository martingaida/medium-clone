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
        <div className='splashpage-main-content'>
            {session ?
                <>
                    <p>User {session.username} authenticated.</p>
                    <p>Full functionality.</p>
                </> :
                <>
                    <p>No user authenticated.</p>
                    <p>Limited functionality.</p>
                </>
            }
        </div>
    );
};

export default SplashPage;