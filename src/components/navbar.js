import React from 'react';

const Navbar = ({ openDialog }) => {
    return (
        <nav className="navbar">
            <button className="burger-btn" onClick={openDialog}>
                &#9776; {/* Burger icon */}
            </button>
        </nav>
    );
};

export default Navbar;
