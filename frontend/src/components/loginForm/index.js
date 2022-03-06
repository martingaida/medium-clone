import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';
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

    if (session) history.push('/home')

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
        <div className='form-component'>
            <h2>Login Form</h2>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='username' 
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                    type='text' 
                    name='password' 
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
}

export default LoginForm;