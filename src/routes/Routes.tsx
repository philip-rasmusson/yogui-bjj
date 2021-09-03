import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { HomeView } from '../views/homeView//HomeView'
import { TechniquesView } from '../views/techniquesView/TechniquesView'
import RoutingPath from './RoutingPath'
import { PolicyView } from '../views/policyView/PolicyView'
import { InstructorsView } from '../views/instructorsView/InstructorsView'
import { AffiliatesView } from '../views/affiliatesView/AffiliatesView'

export const Routes = (props: { children?: React.ReactChild }) => {
  return (
    <div className='wrapper'>
      <Router>
        {props.children}
        <Switch>
          <Route exact path={RoutingPath.homeView} component={HomeView} />
          <Route exact path={RoutingPath.tempHome} component={HomeView} />
          {/* <Route exact path={RoutingPath.instructorsView} component={InstructorsView} /> */}
          <Route exact path={RoutingPath.policyView} component={PolicyView} />
          <Route exact path={RoutingPath.techniquesView} component={TechniquesView} />
          <Route exact path={RoutingPath.affiliatesView} component={AffiliatesView} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
