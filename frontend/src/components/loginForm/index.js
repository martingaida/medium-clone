import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
import SignupFormModal from '../signupFormModal';
import './loginForm.css';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const session = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        setUsername('')
        setPassword('')
    };

    // if (session) history.push('/')

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
    };

    return (
        <div className='modal-form-component'>
            <p>Log in.</p>
            <div>
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
                    <input 
                        className='input-field' 
                        type='password' 
                        name='password' 
                        placeholder='••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input className='btn-black' id='btn-signIn' type='submit' value='Submit'/>
                </form>
            </div>
            <div className='form-content-footer'>
                {/* <p>Don't have an account yet?</p>
                <SignupFormModal /> */}
            </div>
        </div>
    )
}

export default LoginForm;