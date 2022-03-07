import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './home.css';

function Home() {
    const dispatch = useDispatch();
    // To make content available for aunauthenticated users this section needs to be disabled..
    // const session = useSelector(state => state.session.user);
    // const history = useHistory();

    // if (!session) history.push('/login');
    // ..section ends.

    return (
        <div className='main-content'>
            <h1>Authenticated Session</h1>
        </div>
    );
};

export default Home;