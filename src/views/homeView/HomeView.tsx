import './HomeView.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import Lifter from '../../shared/img/Lifter.png'

export const HomeView = () => {

    const history = useHistory()

    return (
        <div className='home-view-wrapper'>
            <button className='buttonOne box-shadow-button' onClick={() => history.push(RoutingPath.signinView)}>LOGGA IN</button>
            <button className='buttonTwo box-shadow-button' onClick={() => history.push(RoutingPath.training)}>ÖVNINGAR</button>
            <button className='buttonThree box-shadow-button' onClick={() => history.push(RoutingPath.fAQ)}>FAQ</button>
            <div className='backround-lifter'>
                <img className='backround-lifter' src={Lifter} alt="error"></img>
            </div>
        </div>
    )
}
