import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import SignupFormModal from '../signupFormModal';
import * as modals from '../../store/modals';
import './loginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [errors, setErrors] = useState([]);

    const session = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        setUsername('')
        setPassword('')
    };

    useEffect(() => {
        if (username.length < 4 && username) {
            setUsernameError('Username must have at least 4 characters')
        } else if (username.length > 30) {
            setUsernameError('Username is too long')
        } else setUsernameError();
        if (password.length < 6 && password) {
            setPasswordError('Password must have at least six characters')
        } else setPasswordError();

    },[username, password])

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors([]);

        const user = {
            credential: username,
            password
        }
        
        dispatch(login(user))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            });
        reset()
        // dispatch(modals.allModalsOff())
    };

    return (
        <div className='modal-form-component'>
            <p>Log in.</p>
            <div className='error-list'>
                <ul>
                    {errors?.map(error => <li key={error} className='error-message'>{error}</li>)}
                </ul>
            </div>
            <div className='form-content-main'>
                <form onSubmit={handleSubmit}>
                    <input
                        className='input-field' 
                        type='text'
                        name='username' 
                        placeholder='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className='error-message'>{usernameError}</p>
                    <input 
                        className='input-field' 
                        type='password' 
                        name='password' 
                        placeholder='••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='error-message'>{passwordError}</p>
                    <input className='btn-black' id='btn-signIn' type='submit' value='Submit'/>
                </form>
            </div>
            <div className='form-content-footer'>
                <p>Don't have an account yet?</p>
                <SignupFormModal />
            </div>
        </div>
    )
}

export default LoginForm;