import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import { restoreUser } from './store/session';
import SignupForm from './components/signupForm';
import Navigation from './components/navigation';
import SplashPage from './components/splashpage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
  }, [dispatch])

  return (
    <>
      <Switch> 
        <Route exact path='/'>
          <Home />
          <Navigation />
          <SplashPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;