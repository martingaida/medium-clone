import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './home.css';

function Home() {
    const session = useSelector(state => state.session.user);
    const history = useHistory();

    if (!session) history.push('/login')

    return (
        <div className='main-content'>
            <h1>Session?</h1>
        </div>
    )
}

export default Home;