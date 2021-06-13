import './MobileNavbar.css'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../../shared/img/logo-white.png'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const MobileNavbar = () => {

    const [menuIcon, setMenuIcon] = useState<any>(faBars)
    const history = useHistory()

    const menuIconDisplay = () => {
        menuIcon === faBars ? setMenuIcon(faTimes) : setMenuIcon(faBars)
    }
    const displayNavigationMenu = () => {
        if (menuIcon === faTimes) {
            return (<nav className="navbar-mobile-menu-wrapper">
                <ul className="navbar-mobile-menu">
                    <li>Logga in</li>
                    <li>Skapa konto</li>
                    <li>Vanliga frågor</li>
                    <li>Om appen</li>
                    <li>Kontakta oss</li>
                </ul>
            </nav>)
        } else {
            return <></>
        }
    }

    return (
        <div className="navbar-mobile-wrapper">
            <div className="navbar-mobile">
                <div className="navbar-mobile-logo">
                    <img src={Logo} alt="Logo Träning För Alla" />
                    <div>
                        <FontAwesomeIcon icon={menuIcon} onClick={() => menuIconDisplay()} />
                    </div>
                </div>
                <div className="navbar-mobile-burger-icon">
                    {displayNavigationMenu()}
                </div>
            </div>
        </div>
    )
}
