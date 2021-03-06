import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './splashpage.css';

function SplashPage() {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);
    const history = useHistory();

    return (
        <>
            {!session ?
                <>
                    <div className='nav-bar-space-background-blue'/>
                    <div className='sP-content-main'>
                        <div className='sP-content-center'>
                            <div className='sP-content-left'>
                                <p className='sP-subheading'>Your story. We do the writing.</p>
                                <p className='sP-heading'>Future belongs to robots.</p>
                            </div>
                            <div className='sP-content-right'>
                                <img className='ai-text-art' src={require('../../assets/ai-text-art.png')}/>
                            </div>
                        </div>
                    </div>
                </>
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