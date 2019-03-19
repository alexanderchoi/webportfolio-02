import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <Link to='/work'>Work</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default Navbar;