import Login from './auth/Login.js';
import Sign from './auth/Sign.js';
import Register from './auth/Register.js';
import Admin from './Admin.js';
import Faculty from './Faculty';

import {BrowserRouter as Router,Link, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <Router >
          <Switch>
              <Route exact path="/" component={Sign}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route exact path="/admin" component={Admin}></Route>
              <Route exact path="/faculty" component={Faculty}></Route>
          </Switch>
          </Router> 
    </div>
  );
}

export default App;
