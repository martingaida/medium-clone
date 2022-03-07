import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import LoginFormModal from '../loginFormModal';
import SignupFormModal from '../signupFormModal';
import './navigation.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const session = useSelector(state => state.session.user);

    return (
        <div className='nav-bar'>
            <nav>
                {!session && 
                    <>
                        <LoginFormModal />
                        <SignupFormModal />
                    </>
                }
                {session && 
                    <>
                        <button onClick={() => dispatch(logout())}>Log Out</button>
                    </>
                }
            </nav>
        </div>
    )
}

export default Navigation;