import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { PricesView } from '../views/pricesView/PricesView'
import { HomeView } from '../views/homeView//HomeView'
import { TechniquesView } from '../views/techniquesView/TechniquesView'
import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {
  return (
    <div className='wrapper'>
      <Router>
        {props.children}
        <Switch>
          <Route exact path={RoutingPath.homeView} component={HomeView} />
          <Route exact path={RoutingPath.tempHome} component={HomeView} />
          <Route exact path={RoutingPath.pricesView} component={PricesView} />
          <Route exact path={RoutingPath.techniquesView} component={TechniquesView} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
