import './MobileNavbar.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../../shared/img/logo-white.png'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RoutingPath from '../../../routes/RoutingPath'

export const MobileNavbar = () => {

    const [menuIcon, setMenuIcon] = useState<any>(faBars)
    const [blurredBackground, setBlurredBackground] = useState<any>('')
    const history = useHistory()

    const linkNavigation = (routingPath: string) => {
        setMenuIcon(faBars)
        setBlurredBackground('')
        history.push(routingPath)
    }

    const menuIconDisplay = () => {
        if (menuIcon === faBars) {
            setMenuIcon(faTimes)
            setBlurredBackground(`navbar-mobile-blurry-background`)
        } else {
            setMenuIcon(faBars)
            setBlurredBackground('')
        }
    }
    const displayNavigationMenu = () => {
        return (menuIcon === faTimes)
            ? (<nav className="navbar-mobile-menu-wrapper">
                <ul className="navbar-mobile-menu">
                    <li className="navbar-mobile-item-1" onClick={() => linkNavigation(RoutingPath.signinView)} >Logga in</li>
                    <li className="navbar-mobile-item-2" onClick={() => linkNavigation(RoutingPath.homeView)}>träningsform</li>
                    <li className="navbar-mobile-item-3" onClick={() => linkNavigation(RoutingPath.homeView)}>Vanliga frågor</li>
                    <li className="navbar-mobile-item-4" onClick={() => linkNavigation(RoutingPath.homeView)}>Om appen</li>
                    <li className="navbar-mobile-item-5" onClick={() => linkNavigation(RoutingPath.homeView)}>Kontakta oss</li>
                </ul>
            </nav>)
            : (<></>)
    }


    return (
        <div className="navbar-mobile-wrapper">
            <div className="navbar-mobile-logo">
                <img src={Logo} alt="Logo Träning För Alla" onClick={() => history.push(RoutingPath.homeView)} />
                <div className="navbar-mobile-burger-icon">
                    <FontAwesomeIcon icon={menuIcon} onClick={() => menuIconDisplay()} />
                </div>
            </div>
            <div className={blurredBackground} onClick={() => menuIconDisplay()}></div>
            <div className="navbar-mobile-burger-menu">
                {displayNavigationMenu()}
            </div>
        </div>
    )
}
