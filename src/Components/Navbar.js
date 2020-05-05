import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        color :'white',
        backgroundColor : 'transparent',
        textDecoration : 'none',
        fontFamily: 'Amatic SC',
        fontSize : '3rem'
    }
    return ( 

        <nav>
            <Link style={styles} to='/'>
            Recipe Search - Search For Your Food
            </Link>
        </nav>
     );
}
 
export default Navbar;
