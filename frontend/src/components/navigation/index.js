import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { logout, demoLogin } from '../../store/session';
import LoginFormModal from '../loginFormModal';
import SignupFormModal from '../signupFormModal';
import NewStoryModal from '../newStoryModal';
import * as modals from '../../store/modals';
import './navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(state => state.session.user);

    const changeRoute = () => {
        history.push('/')
    }

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
                            <button className='btn-plain' onClick={() => dispatch(demoLogin())}>Demo</button>
                            <LoginFormModal />
                            <SignupFormModal />
                        </>
                    }
                    {session && 
                        <>
                            <NewStoryModal />
                            <button className='btn-grey' onClick={() => {dispatch(logout()); dispatch(modals.allModalsOff())}}>Log Out</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
};

export default Navigation;