import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import LoginFormModal from '../loginFormModal';
import SignupFormModal from '../signupFormModal';
import './navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);

    return (
        <div className='nav-content-main'>
            <div className='nav-content-center'>
                <img className='medium-logo' src={require('../../assets/mediumLogoLarge.png')}/>
                <div className='nav-bar'>
                    {!session && 
                        <>
                            <LoginFormModal />
                            <SignupFormModal />
                        </>
                    }
                    {session && 
                        <>
                            <button className='btn-black' onClick={() => dispatch(logout())}>Log Out</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation;