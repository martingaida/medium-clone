import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import { restoreUser } from './store/session';
import { fetchStories } from './store/stories';

import SignupForm from './components/signupForm';
import Navigation from './components/navigation';
import SplashPage from './components/splashpage';
import MainFeed from './components/mainFeed';
import NewStory from './components/newStory';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreUser());
    dispatch(fetchStories())
  }, [dispatch])

  return (
    <>
      <Switch> 
        <Route exact path='/'>
          <Navigation />
          <Home />
          <SplashPage />
          <MainFeed />
        </Route>
      </Switch>
    </>
  );
}

export default App;