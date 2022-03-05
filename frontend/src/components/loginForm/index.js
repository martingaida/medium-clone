import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/session';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const state = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const reset = () => {
        setUsername('')
        setPassword('')
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            credential: username,
            password
        }

        dispatch(login(user));
        console.log('Session: ', state.session)        
        reset()
        if (state.session.user) history.push('/home')
        
    };

    return (
        <div className='form-component'>
            <h2>Login Form</h2>
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