import { Route, Switch, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Home from './components/home';
import { restoreUser } from './store/session';
import { fetchStories } from './store/stories';

import Navigation from './components/navigation';
import SplashPage from './components/splashpage';
import MainFeed from './components/mainFeed';
import StoryDetail from './components/storyDetail';

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
        <Route path='/story/:id'>
          <Navigation />
          <StoryDetail />
        </Route>
        {/* <Route>404 for all other requests</Route> */}
      </Switch>
    </>
  );
}

export default App;