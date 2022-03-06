import { Route, Switch, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import { restoreUser } from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsAuth(true));
  }, [dispatch])

  return (
    <>
      <Switch> 
        <Route path='/login'>
          <LoginForm />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;