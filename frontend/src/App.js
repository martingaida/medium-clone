import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginForm from './components/loginForm';
import Home from './components/home';
import configureStore from './store';

function App() {

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
