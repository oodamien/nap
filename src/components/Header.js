import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = (props) => (
    <header id="header" className={props.alt ? 'alt' : 'classic'}>
        <Link to="/" className="logo"><strong>Napoli</strong> <span>Hossegor</span></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">Menu</a>
        </nav>
    </header>
)

Header.defaultProps = {
  alt: true
}

Header.propTypes = {
    onToggleMenu: PropTypes.func,
    alt: PropTypes.bool
}

export default Header
