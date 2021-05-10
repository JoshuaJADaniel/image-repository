import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "pages/Home";
import Search from "pages/Search";
import Profile from "pages/Profile";

const App = () => (
  <Router basename="/image-repository/build">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/search">
        <Search />
      </Route>
    </Switch>
  </Router>
);

export default App;
