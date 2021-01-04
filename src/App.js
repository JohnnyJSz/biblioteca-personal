import { BrowserRouter, Switch, Route } from "react-router-dom";

import AuthContextProvider from "./context/AuthContext";
import { ThemeProvider } from "styled-components";

import MainLayout from "./components/layout/mainLayout";
import Theme from './config/theme';

import { HOME, LOGOUT, BOOKS, BOOKS_ID, BOOKS_CREATE, CATEGORIES } from "./config/routes/Paths";
import PrivateRoute from "./components/route/PrivateRoute";
import PublicRoute from "./components/route/PublicRoute";
import Home from "./components/home";
import Logout from "./components/logout";
import Books from "./components/books";
import BooksCreate from "./components/books/booksCreate";
import BookDetail from "./components/books/bookDetail";
import Categories from "./components/categories";
import PageNotFound from "./components/pageNotFound";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AuthContextProvider>
        <BrowserRouter>
          <MainLayout>
            <Switch>
              <PrivateRoute path={BOOKS} component={Books} exact/>
              <PrivateRoute path={BOOKS_ID} component={BookDetail} exact/>
              <PrivateRoute path={BOOKS_CREATE} component={BooksCreate} exact/>
              <PrivateRoute path={CATEGORIES} component={Categories} />
              <PrivateRoute path={LOGOUT} component={Logout} />
              <PublicRoute path={HOME} component={Home} exact />
              <Route component={PageNotFound} />
            </Switch>
          </MainLayout>
        </BrowserRouter>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
