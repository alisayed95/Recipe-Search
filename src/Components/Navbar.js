import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = {
        color :'white',
        backgroundColor : 'transparent',
        textDecoration : 'none'
    }
    return ( 

        <nav>
            <Link style={styles} to='/'>
            Recipe Search
            </Link>
        </nav>
     );
}
 
export default Navbar;