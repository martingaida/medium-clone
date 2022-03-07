import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../store/session';
import LoginFormModal from '../loginFormModal';
import './signupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordMatchError, setPasswordMatchError] = useState();
    const [errors, setErrors] = useState([]);

    const emailRegex = /^\S+@\S+\.\S+$/
    const dispatch = useDispatch();
    const history = useHistory();
    const session = useSelector(state => state.session.user);

    useEffect(() => {
        if (username.length < 4 && username) {
            setUsernameError('Username must have at least three characters')
        } else setUsernameError();
        if (!emailRegex.test(email) && email) {
            setEmailError('Enter a valid e-mail address')
        } else setEmailError();
        if (password.length < 6 && password) {
            setPasswordError('Password must have at least six characters')
        } else setPasswordError();
        if (password !== confirmPassword) {
            setPasswordMatchError('Passwords don\'t match')
        } else setPasswordMatchError();

    },[username, email, password, confirmPassword, errors])

    const reset = () => {
        setUsername()
        setEmail()
        setPassword()
        setConfirmPassword()
    };

    // if (session) history.push('/')

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors([]);

        const user = {
            username,
            email,
            password
        }
        dispatch(signup(user))
            .catch(async (res) => {
                const data = await res.json()
                if (data && data.errors) setErrors(data.errors)
            })
        if (!errors) {
            history.push('/')
            reset()
        }
    };

    return (
        <div className='modal-signup-form'>
            <p>Join Medium</p>
            <div>
                <ul>
                    {errors?.map(error => <li key={error} className='error-message'>{error}</li>)}
                </ul>
            </div>
            <div className='form-content-main'>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input 
                        className='input-field' 
                        type='text'
                        placeholder='johndoe'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <p className='error-message'>{usernameError}</p>
                    <label>E-mail</label>
                    <input
                        className='input-field'
                        type='email' 
                        placeholder='johndoe@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className='error-message'>{emailError}</p>
                    <label>Password</label>
                    <input
                        className='input-field'
                        type='password' 
                        placeholder='••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className='error-message'>{passwordError}</p>
                    <label>Confirm Password</label>
                    <input
                        className='input-field' 
                        type='password'
                        placeholder='••••••••'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className='error-message'>{passwordMatchError}</p>
                    <input className='btn-black' type='submit' value='submit'/>
                </form>
            </div>
            <div className='form-content-footer'>
                {/* <p>Already have any account?</p>
                <LoginFormModal /> */}
            </div>
        </div>
    )
}

export default SignupForm;