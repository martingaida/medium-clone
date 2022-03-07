import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signup } from '../../store/session';
import './signupForm.css';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState();
    const [emailError, setEmailError] = useState();
    const [passwordError, setPasswordError] = useState();
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
        if (password !== confirmPassword) {
            setPasswordError('Passwords don\'t match')
        } else setPasswordError();

    },[username, email, password, confirmPassword, errors])

    const reset = () => {
        setUsername()
        setEmail()
        setPassword()
        setConfirmPassword()
    };

    if (session) history.push('/')

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
            .then(history.push('/home'))
            .then(reset())
    
    };

    return (
        <div className='modal-signup-form'>
            <h1>Sign Up</h1>
            <ul>
                {errors?.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                    placeholder='johndoe'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <p>{usernameError}</p>
                <label>E-mail</label>
                <input
                    placeholder='johndoe@gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p>{emailError}</p>
                <label>Password</label>
                <input
                    placeholder='abcDEF1234'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirm Password</label>
                <input
                    placeholder='abcDEF1234'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <p>{passwordError}</p>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default SignupForm;