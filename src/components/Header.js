import React from 'react';

const Header = ({ titulo }) => {
    return ( 
        <nav className="nav-wrapper deep-orange darken-3">
            <a href="#!" className="brand-logo center">{ titulo }</a>
        </nav>
     );
}
 
export default Header;
