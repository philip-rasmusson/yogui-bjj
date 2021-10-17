import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { Footer } from '../components/footer/Footer'
import { HomeView } from '../views/homeView//HomeView'
import { TechniquesView } from '../views/techniquesView/TechniquesView'
import RoutingPath from './RoutingPath'
import { PolicyView } from '../views/policyView/PolicyView'
import { AffiliatesView } from '../views/affiliatesView/AffiliatesView'
import { AboutUsView } from '../views/aboutUsView/AboutUsView'

export const Routes = (props: { children?: React.ReactChild }) => {
  return (
    <div className='wrapper'>
      <Router>
        {props.children}
        <Switch>
          <Route exact path={RoutingPath.homeView} component={HomeView} />
          <Route exact path={RoutingPath.tempHome} component={HomeView} />
          <Route exact path={RoutingPath.policyView} component={PolicyView} />
          <Route exact path={RoutingPath.techniquesView} component={TechniquesView} />
          <Route exact path={RoutingPath.affiliatesView} component={AffiliatesView} />
          <Route exact path={RoutingPath.aboutUsView} component={AboutUsView} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}
