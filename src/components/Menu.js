import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Accueil</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/la-carte">La carte du Napoli</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/la-haut">Là-Haut</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/nouveautes">Les nouveautés 2021</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/covid">Mesures Covid 2021</Link></li>
            </ul>
            {/* <ul className="actions vertical">
                <li><a href="#" className="button special fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
