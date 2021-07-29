import { useContext } from 'react'
import { Context } from './Context/auth'

import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Cadastro from "./pages/auth/Cadastro";
import Dashboard from "./pages/dashboard"
import Details from './pages/details';
import Profile from './pages/profile';
import Favorites from './pages/favorites';

interface CustomRouteProps {
  isPrivate?: boolean
  exact?: any
  path?: string
  component?: any
}

function CustomRoute({ isPrivate, ...rest }: CustomRouteProps) {
  const { isLogged } = useContext(Context)

  if (isPrivate && !isLogged) {
    return <Redirect to='/login' />
  }

  return <Route {...rest} />
}

function Routes() {
  const { isLogged } = useContext(Context)

  if (!isLogged) {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <CustomRoute exact path="/home" component={Home} />
        <CustomRoute exact path="/login" component={Login} />
        <CustomRoute exact path="/cadastro" component={Cadastro} />
        <CustomRoute exact isPrivate path="/dashboard" component={Dashboard} />
      </Switch>
    )
  }
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <Redirect exact from="/login" to="/dashboard" />
      <Redirect exact from="/cadastro" to="/dashboard" />
      <CustomRoute exact path="/home" component={Home} />
      <CustomRoute exact isPrivate path="/dashboard" component={Dashboard} />
      <CustomRoute exact isPrivate path="/dashboard/details/:id" component={Details} />
      <CustomRoute exact isPrivate path="/profile" component={Profile} />
      <CustomRoute exact isPrivate path="/favorites" component={Favorites} />
    </Switch>
  )
}

export { Routes }