import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Register";
import Home from "./home/page";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";  // Protect routes

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected" component={ProtectedComponent} />  // Example protected route
      </Switch>
    </Router>
  );
};

export default App;
