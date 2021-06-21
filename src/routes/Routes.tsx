import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/homeView/HomeView'
import { SigninView } from "../views/signinView/SigninView"
import { ExercisesView } from "../views/exercisesView/ExercisesView"
import RoutingPath from './RoutingPath'
import { Footer } from '../components/footer/Footer'


export const Routes = (props: { children?: React.ReactChild }) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signinView} component={SigninView} />
                <Route exact path={RoutingPath.exercisesView} component={ExercisesView} />

            </Switch>
            <Footer />
        </Router>
    )
}
