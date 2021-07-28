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

interface CustomRouteProps {
  isPrivate?: boolean
  exact?: any
  path?: string
  component?: any
}

function CustomRoute({isPrivate, ...rest}: CustomRouteProps){
  const { isLogged } = useContext(Context)

  if (isPrivate && !isLogged) {
    return <Redirect to='/login' />
  }

  return <Route {...rest} />
}

function Routes(){

      return(
          <Switch>
              <Redirect exact from="/" to="/home"/>
              <CustomRoute exact path="/home" component={Home}/>
              <CustomRoute exact path ="/login" component={Login}/>
              <CustomRoute exact path="/cadastro" component={Cadastro}/>
              <CustomRoute exact isPrivate path="/dashboard" component ={Dashboard}/>
          </Switch>
      )
  }

export { Routes }