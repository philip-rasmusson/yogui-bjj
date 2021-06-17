import './HomeView.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const HomeView = () => {

    const history = useHistory()

    return (

        <div className='HomeViewWrapper'>
            <button className='buttonOne box-shadow-button' onClick={() => history.push(RoutingPath.signinView)}>LOGGA IN</button>

            <button className='buttonTwo box-shadow-button' onClick={() => history.push(RoutingPath.homeView)}>VÄLJ TRÄNINGSFORM</button>

            <button className='buttonThree box-shadow-button' onClick={() => history.push(RoutingPath.homeView)}>FAQ</button>
        </div>
    )
}
