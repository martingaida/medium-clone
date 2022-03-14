import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout, demoLogin } from '../../store/session';
import LoginFormModal from '../loginFormModal';
import SignupFormModal from '../signupFormModal';
import NewStoryModal from '../newStoryModal';
import AboutModal from '../aboutModal';
import * as modals from '../../store/modals';
import './navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(state => state.session.user);

    const changeRoute = () => {
        history.push('/')
    };

    return (
        <div className='nav-content-main'>
            <div className='nav-content-center'>
                <div id='main-logo' onClick={() => dispatch(changeRoute())}>
                    <img className='medium-logo' src={require('../../assets/mediumLogo.png')}/>
                    <h1 id='main-logo-text-1'>mAI<span id='main-logo-text-2'>d</span></h1>
                </div>
                <div className='nav-bar'>
                    {!session && 
                        <>
                            <AboutModal />
                            <button className='btn-plain' onClick={() => dispatch(demoLogin())}>Demo</button>
                            <LoginFormModal />
                            <SignupFormModal />
                        </>
                    }
                    {session && 
                        <>
                            <AboutModal />
                            <NewStoryModal />
                            <button className='btn-plain' onClick={() => {dispatch(logout()); dispatch(modals.allModalsOff()); dispatch(changeRoute())}}>Log Out</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};

export default Navigation;