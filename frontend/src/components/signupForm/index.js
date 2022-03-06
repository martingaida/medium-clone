import { useEffect, useState } from 'react';

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

    useEffect(() => {
        if (username.length < 3 && username) {
            setUsernameError('Username must have at least three characters')
        } else setUsernameError();
        if (!emailRegex.test(email) && email) {
            setEmailError('Enter a valid e-mail address')
        } else setEmailError();
        if (password !== confirmPassword) {
            setPasswordError('Passwords don\'t match')
        } else setPasswordError();

    },[username, email, password, confirmPassword, errors])

    return (
        <div className='modal-signup-form'>
            <h1>Sign Up</h1>
            <ul>
                {errors?.map(error => <li key={error}>{error}</li>)}
            </ul>
            <form>
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
            </form>
        </div>
    )
}

export default SignupForm;