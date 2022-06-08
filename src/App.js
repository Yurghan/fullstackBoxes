import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './users/pages/Users';
import Boxes from './boxes/pages/Boxes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/boxes" exact>
          <Boxes />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
