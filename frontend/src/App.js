import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import { restoreUser } from './store/session';
import SignupForm from './components/signupForm';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch])

  return (
    <>
      <Switch> 
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/signup'>
          <SignupForm />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;