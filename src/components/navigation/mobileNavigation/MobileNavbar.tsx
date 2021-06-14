import './MobileNavbar.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../../shared/img/logo-white.png'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MobileNavbar = () => {

    const [menuIcon, setMenuIcon] = useState<any>(faBars)
    const [blurredBackground, setBlurredBackground] = useState<any>('')
    const history = useHistory()

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
                    <li>Logga in</li>
                    <li>Skapa konto</li>
                    <li>Vanliga frågor</li>
                    <li>Om appen</li>
                    <li>Kontakta oss</li>
                </ul>
            </nav>)
            : (<></>)
    }


    return (
        <div className="navbar-mobile-wrapper">
            {/* <div className="navbar-mobile"> */}
            <div className="navbar-mobile-logo">
                <img src={Logo} alt="Logo Träning För Alla" />
                <div className="navbar-mobile-burger-icon">
                    <FontAwesomeIcon icon={menuIcon} onClick={() => menuIconDisplay()} />
                </div>
            </div>
            <div className={blurredBackground} onClick={() => menuIconDisplay()}></div>
            <div className="navbar-mobile-burger-menu">
                {displayNavigationMenu()}
            </div>
            {/* </div> */}
        </div>
    )
}
