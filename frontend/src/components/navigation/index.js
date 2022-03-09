import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import LoginFormModal from '../loginFormModal';
import SignupFormModal from '../signupFormModal';
import NewStoryModal from '../newStoryModal';
import './navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);

    return (
        <div className='nav-content-main'>
            <div className='nav-content-center'>
                <div id='main-logo'>
                    <img className='medium-logo' src={require('../../assets/mediumLogo.png')}/>
                    <h1 id='main-logo-text-1'>mAI<span id='main-logo-text-2'>d</span></h1>
                </div>
                <div className='nav-bar'>
                    {!session && 
                        <>
                            <LoginFormModal />
                            <SignupFormModal />
                        </>
                    }
                    {session && 
                        <>
                            <NewStoryModal />
                            <button className='btn-grey' onClick={() => dispatch(logout())}>Log Out</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation;