import React from 'react'
import '../assets/styles/components/Header.scss'

import logo from '../assets/static/logo-platzi-video-BW2.png'
import userIcon from '../assets/static/user-icon.png'

const Header = () => {
    return (
        <header className="header">
            <img className="header__img" src={logo} alt="Platzi Video"/>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img src={userIcon} alt="User icon"/>
                    <p>Perfil</p>
                </div>
                <ul>
                    <li>Cuenta</li>
                    <li>Cerrar Sesion</li>
                </ul>
            </div>
        </header>
    )
}

export default Header