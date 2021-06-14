import './HomeView.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'

export const HomeView = () => {

    const history = useHistory()
    return (

        <div className='HomeViewWrapper'>
            <button className='buttonOne'onClick={() => history.push(RoutingPath.signView)}>LOGGA IN</button>

            <div className='CreateAccount'>
                <span onClick={() => history.push(RoutingPath.registerView)}>INTE MEDLEM? SKAPA GRATIS KONTO HÄR</span></div>

            <br /><button className='buttonTwo'onClick={() => history.push(RoutingPath.trainingForm)}>VÄLJ TRÄNINGSFORM</button>

            <button className='buttonThree'onClick={() => history.push(RoutingPath.fAQ)}>FAQ</button>

        </div>
    )
}
