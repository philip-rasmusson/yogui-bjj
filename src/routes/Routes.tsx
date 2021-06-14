import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from '../views/homeView/HomeView'
import { SigninView } from "../views/signinView/SigninView"
import { RegisterView } from '../views/registerView/RegisterView'
import RoutingPath from './RoutingPath'
import { Footer } from '../components/footer/Footer'
import { FAQ } from '../views/faq/FAQ'


export const Routes = (props: { children?: React.ReactChild }) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signinView} component={SigninView} />
                <Route exact path={RoutingPath.fAQ} component={FAQ} />

                <Route exact path={RoutingPath.registerView} component={RegisterView}/>
            </Switch>
            <Footer />

        </Router>
    )
}
