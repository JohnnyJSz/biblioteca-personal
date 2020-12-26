import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthContextProvider from "./context/AuthContext";

import { HOME, LOGOUT, BOOKS, CATEGORIES, } from "./config/routes/Paths";
import PrivateRoute from "./components/route/PrivateRoute";
import PublicRoute from "./components/route/PublicRoute";
import Home from "./components/home";
import Logout from "./components/logout";
import Books from "./components/books";
import Categories from "./components/categories";
import PageNotFound from './components/pageNotFound';

import "./App.css";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path={BOOKS} component={Books} />
          <PrivateRoute path={CATEGORIES} component={Categories} />
          <PrivateRoute path={LOGOUT} component={Logout} />
          <PublicRoute path={HOME} component={Home} exact />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
